import "./PageHero.css";

export default function PageHero({ eyebrow, heading, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
        <h1>{heading}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
