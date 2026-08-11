import siteConfig from "../config/siteConfig";
import "./CTA.css";

export default function CTA() {
  const { cta } = siteConfig;

  return (
    <section className="cta">
      <div className="cta__media">
        <img src={cta.image} alt={cta.imageAlt} loading="lazy" />
        <div className="cta__overlay" />
      </div>
      <div className="container cta__content">
        <h2>{cta.heading}</h2>
        <p>{cta.subheading}</p>
        <a href="#contact" className="btn btn--primary">
          {cta.buttonText}
        </a>
      </div>
    </section>
  );
}
