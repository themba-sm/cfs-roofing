import { Link } from '../lib/router.jsx';
import { BUSINESS, TRUST_PILLARS } from '../data/site.js';
import { Btn, Eyebrow, SectionHeading, Reveal, TrussDiagram } from '../components/ui.jsx';
import {
  ServicesAccordion,
  SheetingFlashingSection,
  TileSystemsSection,
  ChromadekSection,
  DomesticCommercialSection,
  TrustSection,
  FAQSection,
  CTASection,
} from '../components/RoofingSections.jsx';

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/media/hero-trusses.jpg"
            alt=""
            width="1024" height="1024"
            fetchPriority="high"
          />
          <div className="hero-scrim" />
          <div className="hero-gridlines">
            <TrussDiagram className="hero-truss" />
          </div>
        </div>
        <div className="wrap hero-inner">
          <p className="hero-kicker">
            <span className="hero-kicker-dot" aria-hidden="true" />
            {BUSINESS.establishedLine}
          </p>
          <h1 className="hero-title">
            Roofing built on <span className="hero-title-accent">structure.</span>
          </h1>
          <p className="hero-sub">
            Design, supply and installation of timber roof trusses and roof coverings for
            domestic and commercial projects.
          </p>
          <div className="hero-actions">
            <Btn to="/contact" variant="primary">Request a Quote</Btn>
            <Btn to="/roofing" variant="ghost-light">Explore Roofing</Btn>
          </div>
        </div>
        <div className="hero-foot" aria-hidden="true">
          <div className="wrap hero-foot-inner">
            <span>Roof structures</span>
            <span className="hero-foot-sep" />
            <span>Roof coverings</span>
            <span className="hero-foot-sep" />
            <span>Domestic + Commercial</span>
            <span className="hero-foot-sep" />
            <span>Kempton Park, South Africa</span>
          </div>
        </div>
      </section>

      {/* ---------- Editorial intro ---------- */}
      <section className="section section-dark blueprint">
        <div className="wrap split-editorial">
          <div className="editorial-label">
            <Eyebrow>Since 1994</Eyebrow>
          </div>
          <div>
            <h2 className="editorial-title">Built from the structure up.</h2>
            <p className="editorial-lead">
              C.F.S. Roofing &amp; Gutters specialises in the design, supply and installation of
              prefabricated timber roof trusses and roof coverings for domestic and commercial
              applications.
            </p>
            <div className="editorial-points">
              <Reveal as="article" className="ed-point">
                <p className="ed-num" aria-hidden="true">01</p>
                <h3>Design</h3>
                <p>Truss design worked to each building's roof structure.</p>
              </Reveal>
              <Reveal as="article" className="ed-point" delay={80}>
                <p className="ed-num" aria-hidden="true">02</p>
                <h3>Supply</h3>
                <p>Trusses, coverings, sheeting, flashing and associated materials.</p>
              </Reveal>
              <Reveal as="article" className="ed-point" delay={160}>
                <p className="ed-num" aria-hidden="true">03</p>
                <h3>Installation</h3>
                <p>Installed for domestic and commercial projects.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <ServicesAccordion intro="Eight service areas, from the truss up. Select any service for details." />

      {/* ---------- Materials highlights (condensed) ---------- */}
      <SheetingFlashingSection />
      <TileSystemsSection />
      <ChromadekSection />

      {/* ---------- Domestic + commercial ---------- */}
      <DomesticCommercialSection />

      {/* ---------- Gallery teaser ---------- */}
      <section className="section section-dark blueprint">
        <div className="wrap">
          <div className="tease-head">
            <SectionHeading
              eyebrow="Gallery"
              title="Roofing, seen up close"
              intro="Roof structures, coverings and roofline details."
            />
            <Btn to="/gallery" variant="outline">View Gallery</Btn>
          </div>
          <div className="tease-grid">
            <figure className="tease tease-lead">
              <img src="/media/hero-trusses.jpg" alt="Timber roof truss installation on a residential build" loading="lazy" width="1024" height="1024" />
            </figure>
            <figure className="tease">
              <img src="/media/concrete-tiles.jpg" alt="Concrete roof tiles on a pitched residential roof" loading="lazy" width="1024" height="1024" />
            </figure>
            <figure className="tease">
              <img src="/media/commercial-roof.jpg" alt="Commercial roof structure under construction" loading="lazy" width="1024" height="1024" />
            </figure>
          </div>
          <p className="footnote">{`Contextual roofing imagery. Real C.F.S. project photography will be added as it becomes available.`}</p>
        </div>
      </section>

      {/* ---------- Trust ---------- */}
      <TrustSection />

      {/* ---------- FAQ ---------- */}
      <FAQSection />

      {/* ---------- Final CTA ---------- */}
      <CTASection />
    </>
  );
}
