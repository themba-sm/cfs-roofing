import { useEffect } from 'react';
import { Btn, Eyebrow, TrussDiagram } from '../components/ui.jsx';
import QuoteFlow from '../components/QuoteFlow.jsx';
import { ProductCatalogSection } from '../components/ProductCatalog.jsx';
import {
  ServicesAccordion,
  ChromadekSection,
  DomesticCommercialSection,
  TrustSection,
  CTASection,
} from '../components/RoofingSections.jsx';
import {
  SHEETING_FLASHING_CATALOG,
  MARLEY_CATALOG,
  COVERLAND_CATALOG,
  ALSO_SUPPLY_CATALOG,
} from '../data/products.js';

const SECTIONS = [
  { href: '#service-system', label: 'Service system' },
  { href: '#sheeting-flashing', label: 'Sheeting & Flashing' },
  { href: '#marley-tiles', label: 'Marley Tile' },
  { href: '#coverland-tiles', label: 'Coverland' },
  { href: '#also-supply', label: 'We also supply & install' },
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

      <ProductCatalogSection
        id="sheeting-flashing"
        num="M/01"
        eyebrow="Sheeting & flashing"
        title="Sheeting & Flashing"
        grey
        intro="Sheeting and flashing products supplied and installed alongside roof coverings. Colour options and paint systems are confirmed per project."
        items={SHEETING_FLASHING_CATALOG}
        footnote="Product imagery via the manufacturer's published product information. Sizes, colours and specifications are confirmed per project."
      />

      <ChromadekSection />

      <ProductCatalogSection
        id="marley-tiles"
        num="M/02"
        eyebrow="Concrete roof tiles"
        title="Marley Tile"
        intro="Concrete roof tiles supplied and installed from the Marley range of profiles."
        items={MARLEY_CATALOG}
        footnote="Tile profiles as supplied by the manufacturer. Current availability and colour options are confirmed per project."
      />

      <ProductCatalogSection
        id="coverland-tiles"
        num="M/03"
        eyebrow="Concrete roof tiles"
        title="Coverland"
        grey
        intro="Concrete roof tiles supplied and installed from the Coverland range of profiles."
        items={COVERLAND_CATALOG}
        footnote="Tile profiles as supplied by the manufacturer. Concrete tiles from other manufacturers, including Lafarge/Monier Roofing and Brickor, are also available on request. Availability and colour options are confirmed per project."
      />

      <ProductCatalogSection
        id="also-supply"
        num="M/04"
        eyebrow="Structural & finishing products"
        title="We also supply and install"
        intro="Structural and finishing products supplied and installed as part of the roofing package."
        items={ALSO_SUPPLY_CATALOG}
        footnote="Product imagery representative of the products supplied. Sizes, treatments and engineering requirements are confirmed per project."
      />

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

      <CTASection quoteHref="#roofing-enquiry" />
    </>
  );
}
