import { SectionHeading } from './ui.jsx';

/* Reusable product-catalog section: a grid of product cards, each with its own
   close-up image, name and one-line description. */

function ProductCard({ item }) {
  return (
    <div className="prod-card">
      <figure className="prod-figure">
        <img src={item.img} alt={item.alt} loading="lazy" width="800" height="600" />
      </figure>
      <div className="prod-body">
        <h3 className="prod-name">{item.name}</h3>
        <p className="prod-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export function ProductCatalogSection({
  id,
  num,
  eyebrow,
  title,
  intro,
  grey = false,
  items,
  footnote,
  children,
}) {
  return (
    <section className={`section ${grey ? 'section-grey' : ''}`} id={id}>
      <div className="wrap">
        <SectionHeading num={num} eyebrow={eyebrow} title={title} intro={intro} />
        <div className="catalog-grid">
          {items.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
        {children}
        {footnote && <p className="footnote">{footnote}</p>}
      </div>
    </section>
  );
}

/* Compact band for the Home page: links into the full catalogs on the Roofing page. */

import { Link } from '../lib/router.jsx';

const RANGE_LINKS = [
  {
    to: '/roofing#sheeting-flashing',
    img: '/media/products/sheeting-corrugated.jpg',
    alt: 'Corrugated roof sheeting profile close-up',
    name: 'Sheeting & Flashing',
    desc: 'Corrugated, IBR, Chromadek and flashing products.',
  },
  {
    to: '/roofing#marley-tiles',
    img: '/media/products/marley-double-roman.jpg',
    alt: 'Marley Double Roman concrete roof tile close-up',
    name: 'Marley Tile',
    desc: 'Concrete tile profiles from the Marley range.',
  },
  {
    to: '/roofing#coverland-tiles',
    img: '/media/products/coverland-cupola.jpg',
    alt: 'Coverland Cupola concrete roof tile close-up',
    name: 'Coverland',
    desc: 'Concrete tile profiles from the Coverland range.',
  },
  {
    to: '/roofing#also-supply',
    img: '/media/products/beams-laminated.jpg',
    alt: 'Laminated timber beams close-up',
    name: 'We also supply & install',
    desc: 'Beams, bargeboards, fascia and pine ceilings.',
  },
];

export function ProductRangeBand() {
  return (
    <section className="section section-grey" id="product-range">
      <div className="wrap">
        <SectionHeading
          eyebrow="Product range"
          title="What we supply and install"
          intro="Every product line with its own imagery and detail, on the Roofing page."
        />
        <div className="range-grid">
          {RANGE_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="range-card">
              <figure className="prod-figure">
                <img src={l.img} alt={l.alt} loading="lazy" width="800" height="600" />
              </figure>
              <div className="prod-body">
                <h3 className="prod-name">{l.name}</h3>
                <p className="prod-desc">{l.desc}</p>
                <p className="range-cta">View products <span aria-hidden="true">&rarr;</span></p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
