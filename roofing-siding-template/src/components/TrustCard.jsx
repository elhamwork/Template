import { iconMap } from "./icons";
import "./TrustCard.css";

export default function TrustCard({ icon, title, description }) {
  const Icon = iconMap[icon];

  return (
    <div className="trust-card">
      <div className="trust-card__icon" aria-hidden="true">
        {Icon && <Icon />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
