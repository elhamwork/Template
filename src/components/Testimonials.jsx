import siteConfig from "../config/siteConfig";
import Reveal from "./Reveal";
import { StarIcon } from "./icons";
import "./Testimonials.css";

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < rating} className="star-rating__star" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { testimonialsSection, testimonials } = siteConfig;

  return (
    <section id="reviews" className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Reviews</span>
          <h2>{testimonialsSection.heading}</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" className="testimonial-card" delay={i * 70} key={t.name}>
              <StarRating rating={t.rating} />
              <blockquote>&ldquo;{t.review}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__city">{t.city}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
