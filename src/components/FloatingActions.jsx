import { useEffect, useRef, useState } from 'react';
import { Link } from '../lib/router.jsx';
import { BUSINESS } from '../data/site.js';
import { answerQuestion, HANDOFF, SUGGESTED } from '../lib/assistant.js';

/* ---------- message model ---------- */

let mid = 0;

function bot(text, extra = {}) {
  return { id: ++mid, who: 'bot', text, ...extra };
}

function user(text) {
  return { id: ++mid, who: 'user', text };
}

/* ---------- assistant panel ---------- */

function AssistantPanel({ open, onClose }) {
  const [messages, setMessages] = useState(() => [
    bot(
      `Hi \u2014 I\u2019m the C.F.S. assistant. I answer instantly from C.F.S. Roofing & Gutters\u2019 service information: trusses, roof coverings, tiles, sheeting, flashing, beams, gutters and enquiries.`,
      { chips: SUGGESTED.slice(0, 4) }
    ),
  ]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  const send = (text) => {
    const clean = (text || '').trim();
    if (!clean) return;
    setDraft('');
    setMessages((m) => [...m, user(clean)]);
    setTyping(true);
    const reply = answerQuestion(clean);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        bot(reply.answer, {
          chips: reply.chips,
          handoff: reply.handoff,
        }),
      ]);
    }, 420);
  };

  const chipAction = (chip) => {
    if (/quote/i.test(chip)) return 'quote';
    if (/whatsapp/i.test(chip)) return 'whatsapp';
    if (/call/i.test(chip)) return 'call';
    return 'ask';
  };

  return (
    <div className={`assistant-panel ${open ? 'assistant-panel-open' : ''}`} role="dialog" aria-label="C.F.S. assistant">
      <div className="assistant-head">
        <div className="assistant-id">
          <span className="assistant-avatar" aria-hidden="true">
            <svg viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#C8102E" />
              <path d="M14 5 L24 21 L4 21 Z" stroke="#fff" strokeWidth="1.8" fill="none" />
              <path d="M14 5 L14 21 M9.5 15.5 L18.5 15.5" stroke="#fff" strokeWidth="1.1" />
            </svg>
          </span>
          <div>
            <p className="assistant-name">C.F.S. Assistant</p>
            <p className="assistant-status">
              <span className="assistant-dot" aria-hidden="true" />
              Instant answers · official service info
            </p>
          </div>
        </div>
        <button type="button" className="assistant-close" aria-label="Close assistant" onClick={onClose}>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="assistant-body" ref={bodyRef}>
        {messages.map((m) => (
          <div key={m.id} className={`assistant-msg assistant-msg-${m.who}`}>
            <div className="assistant-bubble">{m.text}</div>
            {m.who === 'bot' && m.chips?.length ? (
              <div className="assistant-chips">
                {m.chips.map((chip) => {
                  const act = chipAction(chip);
                  if (act === 'quote')
                    return (
                      <Link key={chip} to="/contact" className="assistant-chip assistant-chip-solid" onClick={onClose}>
                        {chip}
                      </Link>
                    );
                  if (act === 'whatsapp')
                    return (
                      <a key={chip} href={HANDOFF.whatsapp} target="_blank" rel="noopener noreferrer" className="assistant-chip assistant-chip-solid">
                        {chip}
                      </a>
                    );
                  if (act === 'call')
                    return (
                      <a key={chip} href={HANDOFF.tel} className="assistant-chip assistant-chip-solid">
                        {chip}
                      </a>
                    );
                  return (
                    <button key={chip} type="button" className="assistant-chip" onClick={() => send(chip)}>
                      {chip}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        ))}
        {typing && (
          <div className="assistant-msg assistant-msg-bot">
            <div className="assistant-bubble assistant-typing" aria-label="Assistant is typing">
              <span /><span /><span />
            </div>
          </div>
        )}
      </div>

      <form
        className="assistant-input"
        onSubmit={(e) => {
          e.preventDefault();
          send(draft);
        }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask about trusses, tiles, gutters…"
          aria-label="Ask a question"
          maxLength={200}
        />
        <button type="submit" aria-label="Send" disabled={!draft.trim()}>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 10 L16 10 M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
      <p className="assistant-foot">
        Answers come only from supplied C.F.S. business information. For anything else, the team replies on WhatsApp.
      </p>
    </div>
  );
}

/* ---------- floating actions ---------- */

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [showChips, setShowChips] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const t = window.setTimeout(() => setShowChips(true), 1400);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div className={`assistant-hint ${showChips && !open ? 'assistant-hint-show' : ''}`}>
        Questions? Ask the C.F.S. assistant
      </div>

      <div className="float-actions">
        <button
          type="button"
          className={`float-btn float-assistant ${open ? 'float-btn-active' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close C.F.S. assistant' : 'Open C.F.S. assistant'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3 L20.5 18 L3.5 18 Z" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinejoin="round" />
            <path d="M12 7.5 L12 18 M7.8 13.8 L16.2 13.8" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </button>
        <a
          className="float-btn float-wa"
          href={HANDOFF.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp C.F.S. Roofing & Gutters on ${BUSINESS.phones[0]}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.27z" />
          </svg>
        </a>
      </div>

      <AssistantPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
