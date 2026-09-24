import { useEffect } from 'react';
import { BUSINESS } from '../data/site.js';
import { Eyebrow, TrussDiagram } from '../components/ui.jsx';
import { TrustSection, CTASection } from '../components/RoofingSections.jsx';

export default function About() {
  useEffect(() => {
    document.title = 'About | C.F.S. Roofing & Gutters';
    return () => { document.title = 'C.F.S. Roofing & Gutters | Roofing & Roof Trusses in Kempton Park'; };
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>About</Eyebrow>
          <h1 className="page-title">C.F.S. Roofing &amp; Gutters</h1>
          <p className="page-sub">{BUSINESS.description}</p>
        </div>
        <TrussDiagram className="page-hero-truss" />
      </section>

      <section className="section">
        <div className="wrap split-editorial">
          <div className="editorial-label">
            <Eyebrow>The company</Eyebrow>
          </div>
          <div>
            <h2 className="editorial-title">Servicing the timber trusses industry since 1994.</h2>
            <p className="editorial-lead">
              C.F.S. Roofing &amp; Gutters has been servicing the timber trusses industry since
              1994, specialising in the design, supply and installation of prefabricated trusses
              and roof coverings for domestic and commercial applications.
            </p>
            <p>
              The company states that it has completed numerous projects in association with
              leading contractors and manufacturers in South Africa.
            </p>
            <p>
              The work spans the full roof structure: timber roof trusses, roof coverings,
              sheeting and flashing, concrete roof tiles, laminated timber beams, bargeboards
              and fascia boards.
            </p>
          </div>
        </div>
      </section>

      <TrustSection />
      <CTASection />
    </>
  );
}
