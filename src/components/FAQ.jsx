import { useState } from "react";
import siteConfig from "../config/siteConfig";
import { ChevronDownIcon } from "./icons";
import "./FAQ.css";

function FAQItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="faq-item">
      <h3>
        <button
          type="button"
          id={buttonId}
          className="faq-item__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <ChevronDownIcon className={`faq-item__chevron${isOpen ? " faq-item__chevron--open" : ""}`} />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`faq-item__panel${isOpen ? " faq-item__panel--open" : ""}`}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq">
      <div className="container faq__container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Questions</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq__list">
          {faq.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
