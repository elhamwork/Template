export default function SectionHeading({ eyebrow, heading, description, align = "center" }) {
  return (
    <div className="section-heading" style={align === "left" ? { textAlign: "left", margin: "0 0 var(--space-5)" } : undefined}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2>{heading}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
