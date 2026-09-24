import { useEffect, useRef, useState } from 'react';
import { BUSINESS, SERVICES, DOMESTIC_SCOPE, COMMERCIAL_FOCUS, TILE_MAKERS, METAL_COVERINGS, METAL_MATERIALS, SHEETING_FLASHING, CHROMADEK, TRUST_PILLARS, FAQS } from '../data/site.js';
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

/* ---------- Sheeting & flashing ---------- */

export function SheetingFlashingSection() {
  return (
    <section className="section section-grey" id="sheeting-flashing">
      <div className="wrap">
        <div className="split">
          <div>
            <SectionHeading
              num="M/01"
              eyebrow="Sheeting & flashing"
              title="Sheeting & flashing"
              intro="Sheeting and flashing products supplied and installed alongside roof coverings."
            />
            <div className="chip-grid">
              {SHEETING_FLASHING.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
          <figure className="split-figure">
            <img
              src="/media/metal-sheeting.jpg"
              alt="IBR metal roof sheeting on a commercial building"
              loading="lazy"
              width="800" height="800"
            />
            <figcaption>IBR sheeting profile — illustrative imagery</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ---------- Concrete roof tile systems ---------- */

export function TileSystemsSection() {
  return (
    <section className="section" id="roof-tiles">
      <div className="wrap">
        <SectionHeading
          num="M/02"
          eyebrow="Concrete roof tiles"
          title="Concrete roof tile systems"
          intro="C.F.S. Roofing & Gutters installs concrete roof tiles from various manufacturers, including Marley, Lafarge/Monier Roofing, Brickor and Coverland."
        />
        <div className="tile-makers">
          {Object.entries(TILE_MAKERS).map(([maker, profiles]) => (
            <div key={maker} className="tile-maker">
              <p className="tile-maker-name">{maker}</p>
              <ul className="tile-list">
                {profiles.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="footnote">
          Tile profiles installed as supplied by the respective manufacturers. Current profile
          availability and colour options are confirmed per project.
        </p>
      </div>
    </section>
  );
}

/* ---------- Metal roof coverings ---------- */

export function MetalCoveringsSection() {
  return (
    <section className="section section-dark" id="metal-coverings">
      <div className="wrap">
        <div className="split split-reverse">
          <div>
            <SectionHeading
              light
              num="M/03"
              eyebrow="Metal roof coverings"
              title="Metal roof coverings"
              intro="Metal roof coverings installed for residential, industrial and commercial buildings."
            />
            <ul className="metal-list">
              {METAL_COVERINGS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="p-light section-note">
              Installed in materials including {METAL_MATERIALS.join(', ')}.
            </p>
          </div>
          <figure className="split-figure">
            <img
              src="/media/metal-sheeting.jpg"
              alt="Metal roof sheeting installation on a building roof"
              loading="lazy"
              width="800" height="800"
            />
            <figcaption>Metal sheeting — illustrative imagery</figcaption>
          </figure>
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
          num="M/04"
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

/* ---------- Laminated timber beams ---------- */

export function BeamsSection() {
  return (
    <section className="section" id="lam-beams">
      <div className="wrap">
        <div className="split">
          <figure className="split-figure">
            <img
              src="/media/laminated-beams.jpg"
              alt="Laminated timber beams forming a vaulted ceiling structure"
              loading="lazy"
              width="800" height="800"
            />
            <figcaption>Laminated timber beams — illustrative imagery</figcaption>
          </figure>
          <div>
            <SectionHeading
              num="M/05"
              eyebrow="Laminated timber beams"
              title="Laminated timber beams"
              intro="A natural alternative to steel or concrete, made by gluing timber together under pressure and heat. The resulting product is strong, stable and rigid."
            />
            <ul className="point-list">
              <li>High weight-to-strength ratio</li>
              <li>Dimensional stability</li>
              <li>Load carrying capacity</li>
              <li>Fire resistance</li>
              <li>Structural engineering capability</li>
            </ul>
            <p className="footnote">
              Beams are supplied and installed as a project-specific structural element.
              Engineering requirements are confirmed per project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bargeboards & fascia ---------- */

export function BargeFasciaSection() {
  return (
    <section className="section section-grey" id="barge-fascia">
      <div className="wrap">
        <div className="split split-reverse">
          <div>
            <SectionHeading
              num="M/06"
              eyebrow="Roofline elements"
              title="Bargeboards & fascia boards"
            />
            <div className="rf">
              <div className="rf-item">
                <p className="rf-term">Bargeboards</p>
                <p className="rf-def">
                  Located at the gable end of the roof. They protect roof timbers and contribute to
                  the appearance of the roofline.
                </p>
              </div>
              <div className="rf-item">
                <p className="rf-term">Fascia</p>
                <p className="rf-def">
                  Positioned beneath the roof edge and behind the eavestrough. Fascia can be clad
                  with aluminium to protect the timber from deterioration while providing an
                  aesthetic finish.
                </p>
              </div>
            </div>
          </div>
          <figure className="split-figure">
            <img
              src="/media/fascia-roofline.jpg"
              alt="Fascia board and bargeboard detail on a residential gable end"
              loading="lazy"
              width="800" height="800"
            />
            <figcaption>Fascia and bargeboard detail — illustrative imagery</figcaption>
          </figure>
        </div>
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
