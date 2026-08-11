import siteConfig from "../config/siteConfig";
import Button from "./Button";
import { CheckIcon, PhoneIcon } from "./icons";
import "./Hero.css";

export default function Hero() {
  const { hero, business, contact } = siteConfig;

  return (
    <section className="hero">
      <div className="hero__media">
        <img src={hero.image} alt={hero.imageAlt} loading="eager" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__heading">{business.heroHeadline}</h1>

        <ul className="hero__trust-list">
          {hero.trustSignals.map((signal) => (
            <li key={signal}>
              <CheckIcon />
              <strong>{signal}</strong>
            </li>
          ))}
        </ul>

        <a href={`tel:${contact.phoneRaw}`} className="hero__phone">
          <PhoneIcon />
          {contact.phone}
        </a>

        <div className="hero__actions">
          <Button to="/contact" variant="primary" size="lg">
            {hero.ctaText}
          </Button>
          <Button to="/gallery" variant="secondary" size="lg" className="btn--on-dark">
            {hero.secondaryCtaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
