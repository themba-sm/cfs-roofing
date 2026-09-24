import { useEffect, useState } from 'react';
import { GALLERY } from '../data/site.js';
import { Eyebrow } from '../components/ui.jsx';
import { CTASection } from '../components/RoofingSections.jsx';

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.title = 'Gallery | C.F.S. Roofing & Gutters';
    return () => { document.title = 'C.F.S. Roofing & Gutters | Roofing & Roof Trusses in Kempton Park'; };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const items = GALLERY.items.filter((i) => cat === 'All' || i.category === cat);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="page-title">Roofing capability, in view.</h1>
          <p className="page-sub">{GALLERY.note}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="filter-row" role="group" aria-label="Filter by category">
            {GALLERY.categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter ${cat === c ? 'filter-active' : ''}`}
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {items.map((item) => (
              <figure
                key={item.src}
                className="gallery-item"
                role="button"
                tabIndex={0}
                aria-label={`View larger: ${item.alt}`}
                onClick={() => setLightbox(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightbox(item);
                  }
                }}
              >
                <img src={item.src} alt={item.alt} loading="lazy" width="1024" height="1024" />
                <figcaption>
                  <span className="gallery-cat">{item.category}</span>
                  <span className="gallery-caption">{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="footnote">{GALLERY.note}</p>
        </div>
      </section>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <figcaption>
              <span className="gallery-cat">{lightbox.category}</span>
              {lightbox.caption}
            </figcaption>
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              autoFocus
            >
              ✕
            </button>
          </figure>
        </div>
      )}

      <CTASection />
    </>
  );
}
