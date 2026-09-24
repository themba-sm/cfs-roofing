import { Link } from '../lib/router.jsx';
import { BUSINESS } from '../data/site.js';

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="wrap wrap-narrow">
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page isn't part of the structure.</h1>
        <p className="page-sub">
          The page you're looking for doesn't exist or has moved. Head back to the homepage, or
          contact the team directly.
        </p>
        <div className="cta-actions">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <a
            className="btn btn-outline"
            href={`tel:+27${BUSINESS.phones[0].replace(/^0/, '').replace(/\s/g, '')}`}
          >
            Call C.F.S.
          </a>
        </div>
      </div>
    </section>
  );
}
