import { useEffect, useMemo, useState } from 'react';
import { QUOTE_FLOW, BUSINESS } from '../data/site.js';
import { submitLead } from '../lib/api.js';

/*
 * Guided "Request a Quote" flow.
 * Selectable options first, typing kept to a minimum.
 * This is a REQUEST — never presented as a confirmed appointment.
 */

const STEP_LABELS = [
  'What do you need help with?',
  'What type of project is this?',
  'How would you like us to help?',
  'Preferred date',
  'Preferred time',
  'Your details',
  'Anything else?',
];

function OptionGrid({ options, value, onChange, name, columns = 2 }) {
  return (
    <div className={`opt-grid opt-${columns}`} role="radiogroup" aria-label={name}>
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={selected}
            className={`opt ${selected ? 'opt-selected' : ''}`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default function QuoteFlow({ initialService = '', source = 'website' }) {
  const [step, setStep] = useState(initialService ? 1 : 0);
  const [data, setData] = useState({
    service: initialService || '',
    projectType: '',
    enquiryType: '',
    preferredDate: '',
    preferredTime: '',
    name: '',
    phone: '',
    email: '',
    additionalInformation: '',
  });
  const [dateSkipped, setDateSkipped] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); /* idle | submitting | done | error */
  const [serverErrors, setServerErrors] = useState({});

  const set = (key) => (value) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const lastStep = STEP_LABELS.length; /* index 6 = final input step */
  const progress = Math.round(((step + 1) / (lastStep + 1)) * 100);

  function validateStep(s) {
    const e = {};
    if (s === 0 && !data.service) e.service = 'Please choose what you need help with.';
    if (s === 1 && !data.projectType) e.projectType = 'Please choose a project type.';
    if (s === 2 && !data.enquiryType) e.enquiryType = 'Please choose how we can help.';
    if (s === 3 && !data.preferredDate && !dateSkipped) e.preferredDate = 'Please choose a preferred date, or select Not sure yet.';
    if (s === 5) {
      if (!data.name || data.name.trim().length < 2) e.name = 'Please enter your full name.';
      const digits = (data.phone.match(/\d/g) || []).length;
      if (!/^(\+?\d[\d\s\-()+.]*)$/.test(data.phone.trim()) || digits < 9 || digits > 13) {
        e.phone = 'Please enter a valid phone number.';
      }
      if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
        e.email = 'Please enter a valid email address.';
      }
    }
    return e;
  }

  function next() {
    const e = validateStep(step);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setStep((s) => Math.min(s + 1, lastStep));
  }

  function back() {
    setStatus('idle');
    setServerErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit(e) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    const payload = {
      ...data,
      company: '', /* honeypot */
      source,
    };
    const result = await submitLead(payload);
    if (result.ok) {
      setStatus('done');
    } else if (result.errors) {
      setServerErrors(result.errors);
      setStep(5);
      setStatus('idle');
    } else {
      setStatus('error');
    }
  }

  /* success state */
  if (status === 'done') {
    return (
      <div className="qf-card" role="status">
        <div className="qf-done">
          <span className="qf-done-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l5 5L19 7" stroke="currentColor" strokeWidth="2.4" /></svg>
          </span>
          <h3>Request received</h3>
          <p className="qf-done-copy">
            Thanks, your request has been received. The C.F.S. Roofing &amp; Gutters team will
            review your enquiry and get back to you to confirm the next steps.
          </p>
          <p className="qf-done-note">
            Your preferred date and time are noted as preferences — the team will confirm a
            suitable time with you.
          </p>
          <div className="qf-done-actions">
            <a className="btn btn-outline" href={`tel:+27${BUSINESS.phones[0].replace(/^0/, '').replace(/\s/g, '')}`}>
              Call C.F.S.
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="qf-card">
      <div className="qf-progress" aria-hidden="true">
        <div className="qf-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="qf-step-count">
        Step {step + 1} of {lastStep + 1}
        <span className="qf-step-dot" aria-hidden="true" />
        {STEP_LABELS[step]}
      </p>

      {status === 'error' ? (
        <div className="qf-error" role="alert">
          <p className="qf-error-title">We couldn't submit your request right now.</p>
          <p>Please try again, or contact C.F.S. Roofing &amp; Gutters directly:</p>
          <div className="qf-error-actions">
            {BUSINESS.phones.map((p) => (
              <a key={p} className="btn btn-outline btn-sm" href={`tel:+27${p.replace(/^0/, '').replace(/\s/g, '')}`}>
                Call {p}
              </a>
            ))}
            <a className="btn btn-outline btn-sm" href={`mailto:${BUSINESS.emails[0]}`}>
              Email the team
            </a>
          </div>
          <button type="button" className="qf-retry" onClick={() => setStatus('idle')}>
            Try submitting again
          </button>
        </div>
      ) : step === 0 ? (
        <fieldset className="qf-step">
          <legend className="qf-legend">What do you need help with?</legend>
          <OptionGrid name="Service" options={QUOTE_FLOW.services} value={data.service} onChange={set('service')} />
          {errors.service && <p className="field-error">{errors.service}</p>}
        </fieldset>
      ) : step === 1 ? (
        <fieldset className="qf-step">
          <legend className="qf-legend">What type of project is this?</legend>
          <OptionGrid name="Project type" options={QUOTE_FLOW.projectTypes} value={data.projectType} onChange={set('projectType')} />
          {errors.projectType && <p className="field-error">{errors.projectType}</p>}
        </fieldset>
      ) : step === 2 ? (
        <fieldset className="qf-step">
          <legend className="qf-legend">How would you like us to help?</legend>
          <OptionGrid name="Enquiry type" options={QUOTE_FLOW.helpTypes} value={data.enquiryType} onChange={set('enquiryType')} />
          {errors.enquiryType && <p className="field-error">{errors.enquiryType}</p>}
        </fieldset>
      ) : step === 3 ? (
        <fieldset className="qf-step">
          <legend className="qf-legend">Preferred date</legend>
          <p className="qf-hint">A preferred date only — not a confirmed appointment.</p>
          <label className="field">
            <span className="field-label">Preferred date</span>
            <input
              type="date"
              className="field-input"
              value={data.preferredDate}
              min={new Date().toISOString().slice(0, 10)}
              onChange={(e) => { set('preferredDate')(e.target.value); setDateSkipped(false); }}
            />
          </label>
          {errors.preferredDate && <p className="field-error">{errors.preferredDate}</p>}
          <button
            type="button"
            className={`qf-skip ${dateSkipped ? 'qf-skip-active' : ''}`}
            onClick={() => {
              const skipping = !dateSkipped;
              setDateSkipped(skipping);
              if (skipping) set('preferredDate')('');
            }}
          >
            {dateSkipped ? '✓ No set date — we will confirm timing with you' : 'Not sure yet'}
          </button>
        </fieldset>
      ) : step === 4 ? (
        <fieldset className="qf-step">
          <legend className="qf-legend">Preferred time</legend>
          <p className="qf-hint">A preferred time only — the team will confirm with you.</p>
          <OptionGrid name="Preferred time" options={QUOTE_FLOW.times} value={data.preferredTime} onChange={set('preferredTime')} columns={2} />
        </fieldset>
      ) : step === 5 ? (
        <fieldset className="qf-step">
          <legend className="qf-legend">Your details</legend>
          <label className="field">
            <span className="field-label">Full name</span>
            <input
              type="text"
              className={`field-input ${errors.name || serverErrors.name ? 'field-input-invalid' : ''}`}
              autoComplete="name"
              value={data.name}
              onChange={(e) => set('name')(e.target.value)}
            />
            {(errors.name || serverErrors.name) && <p className="field-error">{errors.name || serverErrors.name}</p>}
          </label>
          <label className="field">
            <span className="field-label">Phone number</span>
            <input
              type="tel"
              inputMode="tel"
              placeholder="e.g. 072 123 4567"
              className={`field-input ${errors.phone || serverErrors.phone ? 'field-input-invalid' : ''}`}
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => set('phone')(e.target.value)}
            />
            {(errors.phone || serverErrors.phone) && <p className="field-error">{errors.phone || serverErrors.phone}</p>}
          </label>
          <label className="field">
            <span className="field-label">Email address <span className="field-optional">(optional)</span></span>
            <input
              type="email"
              inputMode="email"
              className={`field-input ${errors.email || serverErrors.email ? 'field-input-invalid' : ''}`}
              autoComplete="email"
              value={data.email}
              onChange={(e) => set('email')(e.target.value)}
            />
            {(errors.email || serverErrors.email) && <p className="field-error">{errors.email || serverErrors.email}</p>}
          </label>
        </fieldset>
      ) : step === 6 ? (
        <fieldset className="qf-step">
          <legend className="qf-legend">Anything else we should know about the project?</legend>
          <label className="field">
            <span className="field-label">Additional information <span className="field-optional">(optional)</span></span>
            <textarea
              className="field-input field-textarea"
              rows="4"
              maxLength="1000"
              placeholder="Site details, timing, materials you have in mind — anything helpful."
              value={data.additionalInformation}
              onChange={(e) => set('additionalInformation')(e.target.value)}
            />
          </label>
        </fieldset>
      ) : null}

      {status !== 'error' && (
        <div className="qf-nav">
          {step > 0 ? (
            <button type="button" className="btn btn-outline" onClick={back}>Back</button>
          ) : (
            <span />
          )}
          {step < lastStep ? (
            <button type="button" className="btn btn-primary" onClick={next}>Continue</button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={submit}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send my request'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
