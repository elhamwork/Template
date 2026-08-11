import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import Button from "./Button";
import { MenuIcon, CloseIcon, PhoneIcon } from "./icons";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { business, contact, nav } = siteConfig;

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
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-main">{business.logoText}</span>
          <span className="navbar__logo-accent">{business.logoAccent}</span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {nav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={`tel:${contact.phoneRaw}`} className="navbar__phone">
            <PhoneIcon />
            <span>{contact.phone}</span>
          </a>
          <Button to="/contact" variant="primary" size="md" className="navbar__cta">
            Get a Quote
          </Button>
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
          {nav.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className="navbar__mobile-link" onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar__mobile-footer">
          <a href={`tel:${contact.phoneRaw}`} className="navbar__mobile-phone">
            <PhoneIcon />
            {contact.phone}
          </a>
          <Button to="/contact" variant="primary" size="lg" className="btn--block" onClick={closeMenu}>
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
