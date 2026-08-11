import { useEffect, useState } from "react";
import siteConfig from "../config/siteConfig";
import { MenuIcon, CloseIcon, PhoneIcon } from "./icons";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { company, contact, navLinks } = siteConfig;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar${isScrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-main">{company.logoText}</span>
          <span className="navbar__logo-accent">{company.logoAccent}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={`tel:${contact.phoneRaw}`} className="navbar__phone">
            <PhoneIcon />
            <span>{contact.phone}</span>
          </a>
          <a href="#contact" className="btn btn--primary navbar__cta">
            Get a Free Estimate
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`navbar__mobile${isMenuOpen ? " navbar__mobile--open" : ""}`}>
        <nav aria-label="Mobile" className="navbar__mobile-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__mobile-footer">
          <a href={`tel:${contact.phoneRaw}`} className="navbar__mobile-phone">
            <PhoneIcon />
            {contact.phone}
          </a>
          <a href="#contact" className="btn btn--primary btn--block" onClick={closeMenu}>
            Get a Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}
