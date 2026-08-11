import { useEffect } from "react";
import siteConfig from "./config/siteConfig";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ServiceAreas from "./components/ServiceAreas";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import EstimateForm from "./components/EstimateForm";
import Footer from "./components/Footer";

function useThemeVariables() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", siteConfig.theme.primaryColor);
    root.style.setProperty("--color-secondary", siteConfig.theme.secondaryColor);
    root.style.setProperty("--color-accent", siteConfig.theme.accentColor);
    root.style.setProperty("--color-text", siteConfig.theme.textColor);
    root.style.setProperty("--color-text-muted", siteConfig.theme.mutedTextColor);
  }, []);
}

function useDocumentMeta() {
  useEffect(() => {
    document.title = siteConfig.seo.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", siteConfig.seo.description);

    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      document.head.appendChild(favicon);
    }
    favicon.setAttribute("href", siteConfig.company.favicon);
  }, []);
}

export default function App() {
  useThemeVariables();
  useDocumentMeta();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Projects />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <CTA />
        <EstimateForm />
      </main>
      <Footer />
    </>
  );
}
