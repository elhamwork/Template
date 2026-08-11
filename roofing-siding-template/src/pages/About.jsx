import siteConfig from "../config/siteConfig";
import PageHero from "../components/PageHero";
import TrustCard from "../components/TrustCard";
import Button from "../components/Button";
import { CheckIcon } from "../components/icons";
import usePageMeta from "../hooks/usePageMeta";
import "./About.css";

export default function About() {
  const { about, business, trustCards, seo } = siteConfig;
  usePageMeta(seo.about);

  return (
    <>
      <PageHero
        eyebrow="About Us"
        heading={`About ${business.name}`}
        description={`Locally owned and operated in ${business.city}, ${business.state} since ${business.yearFounded}.`}
      />

      <section className="section">
        <div className="container about-grid">
          <div className="about-media">
            <img src={about.image} alt={about.imageAlt} loading="lazy" />
            <div className="about-badge">
              <span className="about-badge__number">{business.yearsInBusiness}+</span>
              <span className="about-badge__label">Years in Business</span>
            </div>
          </div>

          <div className="about-content">
            <h2>{about.heading}</h2>
            {about.body.map((paragraph, i) => (
              <p key={i} className="about-paragraph">
                {paragraph}
              </p>
            ))}
            <ul className="about-credentials">
              {about.credentials.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="primary" size="lg">
              Schedule a Free Estimate
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Our Difference</span>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="about-trust-grid">
            {trustCards.map((card) => (
              <TrustCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
