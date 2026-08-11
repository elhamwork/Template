import siteConfig from "../config/siteConfig";
import { PinIcon } from "./icons";
import "./ServiceAreas.css";

export default function ServiceAreas() {
  const { serviceAreas } = siteConfig;

  return (
    <section className="section service-areas section--muted">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Where We Work</span>
          <h2>{serviceAreas.heading}</h2>
          <p>{serviceAreas.subheading}</p>
        </div>

        <ul className="service-areas__list">
          {serviceAreas.areas.map((area) => (
            <li key={area}>
              <PinIcon className="service-areas__icon" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
