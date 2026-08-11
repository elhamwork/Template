import siteConfig from "../config/siteConfig";
import PageHero from "../components/PageHero";
import GalleryItem from "../components/GalleryItem";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import SectionHeading from "../components/SectionHeading";
import usePageMeta from "../hooks/usePageMeta";
import "./Gallery.css";

export default function Gallery() {
  const { gallery, beforeAfter, business, seo } = siteConfig;
  usePageMeta(seo.gallery);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        heading="Recent Roofing & Siding Projects"
        description={`See the quality behind every project we complete across ${business.city} and the Miami Valley.`}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Before & After" heading={beforeAfter.heading} description={beforeAfter.description} />
          <div className="gallery-before-after">
            <BeforeAfterSlider before={beforeAfter.before} after={beforeAfter.after} />
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading eyebrow="Portfolio" heading="Completed Projects" />
          <div className="gallery-grid">
            {gallery.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
