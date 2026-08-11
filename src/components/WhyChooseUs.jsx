import siteConfig from "../config/siteConfig";
import Reveal from "./Reveal";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const { whyChooseUs } = siteConfig;

  return (
    <section className="section why-choose-us">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Our Difference</span>
          <h2>{whyChooseUs.heading}</h2>
        </div>

        <div className="why-choose-us__grid">
          {whyChooseUs.reasons.map((reason, i) => (
            <Reveal as="div" className="why-choose-us__item" delay={i * 50} key={reason.title}>
              <span className="why-choose-us__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
