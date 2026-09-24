import { useEffect, useRef, useState } from 'react';
import { BUSINESS, SERVICES, DOMESTIC_SCOPE, COMMERCIAL_FOCUS, CHROMADEK, TRUST_PILLARS, FAQS } from '../data/site.js';
import { Btn, SectionHeading, Reveal, Eyebrow } from './ui.jsx';

/* ---------- 01–08 service accordion system ---------- */

function AccordionCard({ service, open, onToggle }) {
  const bodyRef = useRef(null);
  return (
    <div className={`svc ${open ? 'svc-open' : ''}`}>
      <h3>
        <button
          type="button"
          className="svc-head"
          aria-expanded={open}
          aria-controls={`svc-panel-${service.id}`}
          onClick={onToggle}
        >
          <span className="svc-num" aria-hidden="true">{service.num}</span>
          <span className="svc-title">{service.title}</span>
          <span className="svc-state" aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
      </h3>
      <div
        id={`svc-panel-${service.id}`}
        className="svc-panel"
        style={{ maxHeight: open ? `${bodyRef.current?.scrollHeight ?? 480}px` : '0px' }}
      >
        <div ref={bodyRef} className="svc-body">
          <p className="svc-lead">{service.lead}</p>
          <ul className="svc-points">
            {service.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ServicesAccordion({ intro }) {
  const [openId, setOpenId] = useState('trusses');
  return (
    <section className="section section-tight">
      <div className="wrap">
        <SectionHeading
          num="S/01"
          eyebrow="Service system"
          title="What C.F.S. does"
          intro={intro}
        />
        <div className="svc-list">
          {SERVICES.map((s) => (
            <AccordionCard
              key={s.id}
              service={s}
              open={openId === s.id}
              onToggle={() => setOpenId((id) => (id === s.id ? null : s.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Chromadek feature ---------- */

const CHROMADEK_SWATCH = {
  'Dove Grey': '#B8BAB6',
  'Charcoal Grey': '#4A4E4A',
  'Dark Dolphin': '#39414E',
  'Aloe Green': '#4E5D4A',
  'Buffalo Brown': '#5C4A38',
};

export function ChromadekSection() {
  return (
    <section className="section section-dark chromadek" id="chromadek">
      <div className="wrap">
        <SectionHeading
          light
          num="C/01"
          eyebrow="Chromadek"
          title="Chromadek sheeting"
          intro="Chromadek is an arc coil-coated steel product, supplied in a range of colours and paint systems."
        />
        <div className="chromadek-grid">
          <div className="chromadek-block">
            <p className="chromadek-tag">Heat reflection</p>
            <p className="p-light">{CHROMADEK.heatLine}</p>
            <div className="swatches" role="group" aria-label="Colours supplied with the heat-reflective paint system">
              {CHROMADEK.heatColours.map((c) => (
                <span key={c} className="swatch">
                  <span className="swatch-dot" style={{ background: CHROMADEK_SWATCH[c] }} aria-hidden="true"></span>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="chromadek-block">
            <p className="chromadek-tag">Strength</p>
            <p className="p-light">{CHROMADEK.strengthLine}</p>
          </div>
        </div>
        <div className="swatches swatches-wide" role="group" aria-label="Chromadek colours">
          {CHROMADEK.colours.map((c) => (
            <span key={c} className="swatch">
              <span className="swatch-dot" style={{ background: CHROMADEK_SWATCH[c] }} aria-hidden="true"></span>
              {c}
            </span>
          ))}
        </div>
        <p className="p-light footnote-light">
          Product information as supplied by the manufacturer. Colour availability and paint-system
          specification are confirmed per project.
        </p>
      </div>
    </section>
  );
}

/* ---------- Domestic + commercial ---------- */

export function DomesticCommercialSection() {
  return (
    <section className="section" id="domestic-commercial">
      <div className="wrap">
        <SectionHeading
          num="S/02"
          eyebrow="Applications"
          title="Domestic and commercial roofing"
          intro="C.F.S. Roofing & Gutters services both domestic and commercial applications."
        />
        <div className="domcom-grid">
          <div className="domcom">
            <h3>Domestic roofing</h3>
            <p>
              Catering for domestic requirements, from a single alteration to new residential
              developments.
            </p>
            <ul className="mini-list">
              <li>Alterations</li>
              <li>Additions</li>
              <li>New residences</li>
              <li>Townhouse developments</li>
              <li>Cluster developments</li>
            </ul>
            <p className="mini-sub">Scope includes:</p>
            <ul className="mini-list mini-list-dim">
              {DOMESTIC_SCOPE.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="domcom domcom-dark">
            <h3>Commercial roofing</h3>
            <p>
              The business focuses on service, quality workmanship and cost effectiveness — with
              accurate planning, design coordination and installation.
            </p>
            <ul className="mini-list">
              <li>Office blocks</li>
              <li>Factories</li>
              <li>Shopping malls</li>
              <li>Schools</li>
              <li>Hospitals</li>
            </ul>
            <p className="mini-note">
              Where professional design information is not available, C.F.S. Roofing &amp; Gutters
              has the expertise to resolve design complications to suit building requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust pillars ---------- */

export function TrustSection() {
  return (
    <section className="section section-grey" id="trust">
      <div className="wrap">
        <SectionHeading
          eyebrow="Why engage C.F.S."
          title="Established roofing capability"
          intro="The facts the business was built on."
        />
        <div className="trust-grid">
          {TRUST_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className={`trust ${i === 0 ? 'trust-lead' : ''}`}>
              <p className="trust-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</p>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function FAQSection({ title = 'Roofing questions, answered' }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap wrap-narrow">
        <SectionHeading eyebrow="FAQ" title={title} />
        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq ${isOpen ? 'faq-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen((v) => (v === i ? null : i))}
                  >
                    {f.q}
                    <span className="faq-state" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <div className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

export function CTASection({ quoteHref = '/contact' }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <Eyebrow light>Enquiries</Eyebrow>
        <h2>Ready to talk roofing?</h2>
        <p className="cta-copy">
          Tell C.F.S. Roofing &amp; Gutters what you're working on and request a quote or
          consultation.
        </p>
        <div className="cta-actions">
          <Btn to={quoteHref} variant="primary">Request a Quote</Btn>
          <Btn
            href={`tel:+27${BUSINESS.phones[0].replace(/^0/, '').replace(/\s/g, '')}`}
            variant="ghost-light"
          >
            Call C.F.S.
          </Btn>
        </div>
      </div>
    </section>
  );
}
