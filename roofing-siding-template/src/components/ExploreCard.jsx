import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";
import "./ExploreCard.css";

/**
 * Compact teaser card that links out to a full page or external page
 * (e.g. Services, Gallery, Reviews) rather than duplicating that content
 * on the current page.
 */
export default function ExploreCard({ image, imageAlt, title, description, linkText, to, href }) {
  const linkProps = to ? { to } : { href, target: "_blank", rel: "noopener noreferrer" };
  const LinkTag = to ? Link : "a";

  return (
    <LinkTag className="explore-card" {...linkProps}>
      <div className="explore-card__image">
        <img src={image} alt={imageAlt || ""} loading="lazy" />
      </div>
      <div className="explore-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="explore-card__cta">
          <span>{linkText}</span>
          <ArrowRightIcon />
        </span>
      </div>
    </LinkTag>
  );
}
