import siteConfig from "../config/siteConfig";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { iconMap } from "../components/icons";
import usePageMeta from "../hooks/usePageMeta";
import "./Services.css";

export default function Services() {
  const { services, business, seo } = siteConfig;
  usePageMeta(seo.services);

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        heading="Roofing & Siding Services"
        description={`Full-service roofing and siding for homeowners across ${business.city} and the Miami Valley.`}
      />

      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <article id={service.id} key={service.id} className={`service-detail${i % 2 === 1 ? " service-detail--reverse" : ""}`}>
                  <div className="service-detail__media">
                    <img src={service.image} alt="" loading="lazy" />
                  </div>
                  <div className="service-detail__content">
                    <div className="service-detail__icon" aria-hidden="true">
                      {Icon && <Icon />}
                    </div>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <Button to="/contact" variant="secondary" size="md">
                      Get a Quote
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--light services-cta">
        <div className="container services-cta__inner">
          <div>
            <h2>Not Sure Which Service You Need?</h2>
            <p>We offer free, no-obligation inspections to diagnose the issue and recommend the right fix.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg">
            Schedule a Free Inspection
          </Button>
        </div>
      </section>
    </>
  );
}
