import "./GalleryItem.css";

export default function GalleryItem({ item }) {
  return (
    <figure className="gallery-item">
      <img src={item.image} alt={`${item.title} — ${item.location}`} loading="lazy" />
      <figcaption className="gallery-item__caption">
        <span className="gallery-item__title">{item.title}</span>
        <span className="gallery-item__location">{item.location}</span>
      </figcaption>
    </figure>
  );
}
