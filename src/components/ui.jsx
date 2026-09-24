import { useEffect, useRef, useState } from 'react';
import { Link } from '../lib/router.jsx';

/* ---------- Buttons ---------- */

export function Btn({ to, href, onClick, variant = 'primary', children, type, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type || 'button'} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

/* ---------- Section furniture ---------- */

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{children}</p>;
}

export function SectionHeading({ num, eyebrow, title, intro, light = false, align = 'left' }) {
  return (
    <header className={`section-heading ${align === 'center' ? 'section-heading-center' : ''}`}>
      <Eyebrow light={light}>
        {num ? <span className="num" aria-hidden="true">{num}</span> : null}
        {eyebrow}
      </Eyebrow>
      <h2 className={light ? 'h-light' : ''}>{title}</h2>
      {intro ? <p className={`section-intro ${light ? 'p-light' : ''}`}>{intro}</p> : null}
    </header>
  );
}

/* ---------- Scroll reveal (respects reduced motion) ---------- */

export function Reveal({ children, delay = 0, as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- Truss diagram motif (structural line drawing) ---------- */

export function TrussDiagram({ className = '' }) {
  return (
    <svg className={`truss-diagram ${className}`} viewBox="0 0 200 100" fill="none" aria-hidden="true">
      <path d="M100 6 L190 88 L10 88 Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M100 6 L100 88" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M100 6 L55 88 M100 6 L145 88" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M55 60 L145 60" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M55 60 L100 6 M145 60 L100 6" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M10 88 L190 88" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="100" cy="6" r="2.4" fill="currentColor" />
      <circle cx="10" cy="88" r="2.4" fill="currentColor" />
      <circle cx="190" cy="88" r="2.4" fill="currentColor" />
    </svg>
  );
}
