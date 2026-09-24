import { useEffect } from 'react';
import { BUSINESS } from '../data/site.js';
import { Eyebrow } from '../components/ui.jsx';
import QuoteFlow from '../components/QuoteFlow.jsx';
import { FAQSection } from '../components/RoofingSections.jsx';

function telHref(p) {
  return `tel:+27${p.replace(/^0/, '').replace(/\s/g, '')}`;
}

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact & Request a Quote | C.F.S. Roofing & Gutters';
    return () => { document.title = 'C.F.S. Roofing & Gutters | Roofing & Roof Trusses in Kempton Park'; };
  }, []);

  const a = BUSINESS.address;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="page-title">Let's talk about your roofing project.</h1>
          <p className="page-sub">
            Whether you're planning a new build, alteration, residential development or
            commercial project, send C.F.S. Roofing &amp; Gutters your requirements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            {/* ---------- Contact details ---------- */}
            <div className="contact-details">
              <h2 className="contact-h">Get in touch</h2>
              <div className="c-block">
                <p className="c-label">Call</p>
                {BUSINESS.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="c-link c-link-strong">{p}</a>
                ))}
              </div>
              <div className="c-block">
                <p className="c-label">Email</p>
                {BUSINESS.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="c-link">{e}</a>
                ))}
              </div>
              <div className="c-block">
                <p className="c-label">Visit</p>
                <address className="c-address">
                  {a.line1}<br />{a.line2}<br />{a.line3}<br />{a.country}
                </address>
                <a className="c-link c-link-accent" href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer">
                  View location &amp; get directions ↗
                </a>
              </div>
              <div className="c-block">
                <p className="c-label">Follow</p>
                <p className="c-social">
                  {BUSINESS.social.map((s, i) => (
                    <span key={s}>
                      {s}{i < BUSINESS.social.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {/* ---------- Guided quote flow ---------- */}
            <div className="contact-flow" id="request-quote">
              <Eyebrow>Request a quote</Eyebrow>
              <h2 className="contact-h">Tell us what you need</h2>
              <p className="section-intro">
                Tell us what you need and we'll get your enquiry to the C.F.S. Roofing &amp;
                Gutters team.
              </p>
              <QuoteFlow source="contact page" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Before you ask" />
    </>
  );
}
