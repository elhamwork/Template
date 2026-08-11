import siteConfig from "../config/siteConfig";
import Reveal from "./Reveal";
import { CheckIcon } from "./icons";
import "./About.css";

export default function About() {
  const { about, company } = siteConfig;

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <img src={about.image} alt={about.imageAlt} loading="lazy" />
          <div className="about__badge">
            <span className="about__badge-number">{company.yearsExperience}+</span>
            <span className="about__badge-label">Years of&nbsp;Experience</span>
          </div>
        </Reveal>

        <Reveal className="about__content" delay={100}>
          <span className="section-heading__eyebrow">About Us</span>
          <h2>{about.heading}</h2>
          <p className="about__body">{about.body}</p>

          <ul className="about__points">
            {about.points.map((point) => (
              <li key={point}>
                <CheckIcon className="about__points-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn--dark">
            {about.ctaText}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
