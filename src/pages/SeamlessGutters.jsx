import { useEffect } from 'react';
import { BUSINESS } from '../data/site.js';
import { Eyebrow, Btn } from '../components/ui.jsx';
import QuoteFlow from '../components/QuoteFlow.jsx';
import { CTASection } from '../components/RoofingSections.jsx';

export default function SeamlessGutters() {
  useEffect(() => {
    document.title = 'Seamless Gutters | C.F.S. Roofing & Gutters';
    return () => { document.title = 'C.F.S. Roofing & Gutters | Roofing & Roof Trusses in Kempton Park'; };
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Seamless gutters</Eyebrow>
          <h1 className="page-title">Seamless gutter enquiries.</h1>
          <p className="page-sub">
            Speak to C.F.S. Roofing &amp; Gutters about your gutter requirements. Tell us what
            you need and the team will get back to you to confirm the next steps.
          </p>
          <div className="hero-actions">
            <Btn href="#gutter-enquiry" variant="primary">Enquire</Btn>
            <Btn
              href={`tel:+27${BUSINESS.phones[0].replace(/^0/, '').replace(/\s/g, '')}`}
              variant="ghost-light"
            >
              Call C.F.S.
            </Btn>
          </div>
        </div>
      </section>

      <section className="section" id="gutter-enquiry">
        <div className="wrap wrap-narrow">
          <div className="gutter-note">
            <Eyebrow>Enquiries</Eyebrow>
            <h2>Start a gutter enquiry</h2>
            <p className="section-intro">
              Tell us what you need and we'll get your enquiry to the C.F.S. Roofing &amp;
              Gutters team.
            </p>
          </div>
          <QuoteFlow initialService="Seamless Gutters" source="seamless-gutters page" />
        </div>
      </section>

      <CTASection quoteHref="#gutter-enquiry" />
    </>
  );
}
