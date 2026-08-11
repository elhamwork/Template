import siteConfig from "../config/siteConfig";
import { CheckIcon } from "./icons";
import "./TrustBar.css";

export default function TrustBar() {
  const { trustItems } = siteConfig;

  return (
    <section className="trustbar" aria-label="Why customers trust us">
      <div className="container trustbar__inner">
        {trustItems.map((item) => (
          <div className="trustbar__item" key={item.label}>
            <CheckIcon className="trustbar__icon" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
