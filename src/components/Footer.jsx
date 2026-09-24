import { Link } from '../lib/router.jsx';
import { BUSINESS } from '../data/site.js';

export default function Footer() {
  const a2 = BUSINESS.address;
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-name">C.F.S. Roofing &amp; Gutters</p>
          <p className="footer-line">
            Design, supply and installation of prefabricated timber roof trusses and roof coverings.
          </p>
          <p className="footer-line footer-since">{BUSINESS.establishedLine}</p>
          <div className="footer-social">
            {BUSINESS.social.map((s) => (
              <span key={s} className="footer-social-name">{s}</span>
            ))}
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <p className="footer-heading">Site</p>
          <Link to="/roofing" className="footer-link">Roofing</Link>
          <Link to="/seamless-gutters" className="footer-link">Seamless Gutters</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>

        <div className="footer-contact">
          <p className="footer-heading">Visit</p>
          <address className="footer-address">
            {a2.line1}<br />
            {a2.line2}<br />
            {a2.line3}<br />
            {a2.country}
          </address>
          <p className="footer-heading">Call</p>
          {BUSINESS.phones.map((p) => (
            <a key={p} className="footer-link" href={`tel:+27${p.replace(/^0/, '').replace(/\s/g, '')}`}>
              {p}
            </a>
          ))}
          <p className="footer-heading">Email</p>
          {BUSINESS.emails.map((e) => (
            <a key={e} className="footer-link" href={`mailto:${e}`}>{e}</a>
          ))}
        </div>

        <div className="footer-cta">
          <p className="footer-heading">Enquiries</p>
          <p className="footer-line">Tell us what you need and the C.F.S. team will get back to you.</p>
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </div>
    </footer>
  );
}
