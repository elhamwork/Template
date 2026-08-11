import siteConfig from "../config/siteConfig";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import TrustCard from "../components/TrustCard";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import Button from "../components/Button";
import { CheckIcon } from "../components/icons";
import usePageMeta from "../hooks/usePageMeta";
import "./Home.css";

export default function Home() {
  const { trustCards, services, about, testimonials, seo } = siteConfig;
  usePageMeta(seo.home);

  return (
    <>
      <Hero />

      <section className="section" aria-label="Why homeowners choose us">
        <div className="container">
          <div className="home-trust-grid">
            {trustCards.map((card) => (
              <TrustCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            heading="Our Services"
            description="Full-service roofing and siding, from a single repair to a complete exterior replacement."
          />
          <div className="home-services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="home-services-cta">
            <Button to="/services" variant="secondary" size="md">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-about-grid">
          <div className="home-about-media">
            <img src={about.image} alt={about.imageAlt} loading="lazy" />
          </div>
          <div className="home-about-content">
            <span className="section-heading__eyebrow">{about.eyebrow}</span>
            <h2>{about.heading}</h2>
            {about.body.map((paragraph, i) => (
              <p key={i} className="home-about-paragraph">
                {paragraph}
              </p>
            ))}
            <ul className="home-about-credentials">
              {about.credentials.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button to="/about" variant="secondary" size="md">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading eyebrow="What Our Customers Say" heading="Trusted Across the Miami Valley" />
          <div className="home-testimonials-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section home-cta">
        <div className="container home-cta__inner">
          <div>
            <h2>Ready to Protect Your Home?</h2>
            <p>Schedule your free roofing or siding estimate today.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg">
            {siteConfig.hero.ctaText}
          </Button>
        </div>
      </section>
    </>
  );
}
