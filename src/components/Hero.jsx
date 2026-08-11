import siteConfig from "../config/siteConfig";
import "./Hero.css";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <img src={hero.image} alt={hero.imageAlt} loading="eager" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__heading">{hero.heading}</h1>
        <p className="hero__subheading">{hero.subheading}</p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            {hero.primaryButtonText}
          </a>
          <a href="#projects" className="btn btn--outline">
            {hero.secondaryButtonText}
          </a>
        </div>

        <p className="hero__trustline">{hero.trustLine}</p>
      </div>
    </section>
  );
}
