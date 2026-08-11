import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";
import "./ServiceCard.css";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__image">
        <img src={service.image} alt="" loading="lazy" />
      </div>
      <div className="service-card__body">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <Link to={`/services#${service.id}`} className="service-card__link">
          Learn More <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}
