import { useEffect, useRef, useState } from 'react';
import { Link } from '../lib/router.jsx';
import { BUSINESS } from '../data/site.js';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/roofing', label: 'Roofing' },
  { to: '/seamless-gutters', label: 'Seamless Gutters' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header({ path }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (to) => (to === '/' ? path === '/' : path.startsWith(to));

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="C.F.S. Roofing & Gutters — home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" fill="#101114" />
              <path d="M14 5 L24 21 L4 21 Z" stroke="#C8102E" strokeWidth="1.8" />
              <path d="M14 5 L14 21 M9 15.5 L19 15.5" stroke="#F7F7F5" strokeWidth="1.2" />
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-name">C.F.S.</span>
            <span className="brand-sub">Roofing &amp; Gutters</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive(item.to) ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary btn-sm header-cta">
            Request a Quote
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}
      >
        <nav className="mobile-nav" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`mobile-link ${isActive(item.to) ? 'mobile-link-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span>{item.label}</span>
              <span className="mobile-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <Link to="/contact" className="btn btn-primary mobile-menu-cta" onClick={() => setOpen(false)}>
            Request a Quote
          </Link>
          <a href={`tel:+27${BUSINESS.phones[0].replace(/^0/, '').replace(/\s/g, '')}`} className="mobile-call">
            Call {BUSINESS.phones[0]}
          </a>
        </div>
      </div>
    </header>
  );
}
