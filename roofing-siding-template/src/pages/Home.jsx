import siteConfig from "../config/siteConfig";
import Hero from "../components/Hero";
import TrustCard from "../components/TrustCard";
import ExploreCard from "../components/ExploreCard";
import Button from "../components/Button";
import usePageMeta from "../hooks/usePageMeta";
import "./Home.css";

export default function Home() {
  const { trustCards, explore, hero, social, seo } = siteConfig;
  usePageMeta(seo.home);

  return (
    <>
      <Hero />

      <section className="section" aria-label="Why homeowners choose us">
        <div className="container">
          <div className="home-trust-grid">
            {trustCards.map((card) => (
              <TrustCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light" aria-label="Explore more">
        <div className="container">
          <div className="home-explore-grid">
            {explore.map((item) => (
              <ExploreCard
                key={item.title}
                image={item.image}
                imageAlt={item.imageAlt}
                title={item.title}
                description={item.description}
                linkText={item.linkText}
                to={item.to}
                href={item.href ?? social.google}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section home-cta">
        <div className="container home-cta__inner">
          <div>
            <h2>Ready to Protect Your Home?</h2>
            <p>Schedule your free roofing or siding estimate today.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg">
            {hero.ctaText}
          </Button>
        </div>
      </section>
    </>
  );
}
