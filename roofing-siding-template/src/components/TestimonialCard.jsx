import { StarIcon } from "./icons";
import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      <div className="testimonial-card__stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < testimonial.rating} />
        ))}
      </div>
      <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption>
        <span className="testimonial-card__name">{testimonial.name}</span>
        <span className="testimonial-card__city">{testimonial.city}</span>
      </figcaption>
    </figure>
  );
}
