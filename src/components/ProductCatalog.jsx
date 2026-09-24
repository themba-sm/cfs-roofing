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
