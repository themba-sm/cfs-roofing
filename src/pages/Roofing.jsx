import { useEffect } from 'react';
import { Btn, Eyebrow, TrussDiagram } from '../components/ui.jsx';
import QuoteFlow from '../components/QuoteFlow.jsx';
import {
  ServicesAccordion,
  SheetingFlashingSection,
  TileSystemsSection,
  MetalCoveringsSection,
  ChromadekSection,
  BeamsSection,
  BargeFasciaSection,
  DomesticCommercialSection,
  TrustSection,
  CTASection,
} from '../components/RoofingSections.jsx';

const SECTIONS = [
  { href: '#service-system', label: 'Service system' },
  { href: '#sheeting-flashing', label: 'Sheeting & Flashing' },
  { href: '#roof-tiles', label: 'Roof Tiles' },
  { href: '#metal-coverings', label: 'Metal Coverings' },
  { href: '#chromadek', label: 'Chromadek' },
  { href: '#lam-beams', label: 'Laminated Beams' },
  { href: '#barge-fascia', label: 'Barge & Fascia' },
  { href: '#domestic-commercial', label: 'Domestic + Commercial' },
];

export default function Roofing() {
  useEffect(() => {
    document.title = 'Roofing Services | C.F.S. Roofing & Gutters';
    return () => { document.title = 'C.F.S. Roofing & Gutters | Roofing & Roof Trusses in Kempton Park'; };
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Roofing services</Eyebrow>
          <h1 className="page-title">From truss design to installed roof covering.</h1>
          <p className="page-sub">
            Timber roof trusses, roof coverings, sheeting and flashing, concrete tiles, laminated
            timber beams and roofline elements — for domestic and commercial applications.
          </p>
        </div>
        <TrussDiagram className="page-hero-truss" />
      </section>

      <nav className="anchor-nav" aria-label="Roofing sections">
        <div className="wrap anchor-nav-inner">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} className="anchor-link">{s.label}</a>
          ))}
        </div>
      </nav>

      <div id="service-system">
        <ServicesAccordion intro="Select any service for details." />
      </div>
      <SheetingFlashingSection />
      <TileSystemsSection />
      <MetalCoveringsSection />
      <ChromadekSection />
      <BeamsSection />
      <BargeFasciaSection />
      <DomesticCommercialSection />
      <TrustSection />
      <section className="section" id="roofing-enquiry">
        <div className="wrap wrap-narrow">
          <div className="gutter-note">
            <Eyebrow>Enquiries</Eyebrow>
            <h2>Start a roofing enquiry</h2>
            <p className="section-intro">
              Tell us what you need and we'll get your enquiry to the C.F.S. Roofing &amp;
              Gutters team.
            </p>
          </div>
          <QuoteFlow initialService="Roofing" source="roofing page" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
