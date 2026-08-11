import siteConfig from "../config/siteConfig";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";
import "./Services.css";

export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">What We Do</span>
          <h2>Roofing Services</h2>
          <p>Comprehensive roofing solutions for homeowners and businesses, from small repairs to full replacements.</p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <Reveal as="article" className="service-card" delay={i * 60} key={service.id}>
              <div className="service-card__image">
                <img src={service.image} alt="" loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-card__link">
                  Learn More <ArrowRightIcon />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
