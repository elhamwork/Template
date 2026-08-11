import siteConfig from "../config/siteConfig";
import Reveal from "./Reveal";
import "./Process.css";

export default function Process() {
  const { process } = siteConfig;

  return (
    <section className="section process section--muted">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">How It Works</span>
          <h2>{process.heading}</h2>
          <p>{process.subheading}</p>
        </div>

        <div className="process__grid">
          {process.steps.map((step, i) => (
            <Reveal as="div" className="process__step" delay={i * 60} key={step.step}>
              <span className="process__number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
