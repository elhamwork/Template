import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import { PhoneIcon, MailIcon, PinIcon, FacebookIcon, InstagramIcon, GoogleIcon } from "./icons";
import "./Footer.css";

export default function Footer() {
  const { business, contact, footer, nav, social } = siteConfig;
  const year = new Date().getFullYear();

  const socialLinks = [
    { key: "facebook", href: social.facebook, Icon: FacebookIcon, label: "Facebook" },
    { key: "instagram", href: social.instagram, Icon: InstagramIcon, label: "Instagram" },
    { key: "google", href: social.google, Icon: GoogleIcon, label: "Google" },
  ].filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-main">{business.logoText}</span>
            <span className="footer__logo-accent">{business.logoAccent}</span>
          </Link>
          <p>{footer.description}</p>
          {socialLinks.length > 0 && (
            <div className="footer__social">
              {socialLinks.map(({ key, href, Icon, label }) => (
                <a key={key} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="footer__col">
          <h3>Navigation</h3>
          <ul>
            {nav.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <PhoneIcon />
              <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <PinIcon />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Service Area</h3>
          <p className="footer__service-area">{contact.serviceArea}</p>
          <ul className="footer__areas">
            {contact.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {year} {business.name}. All rights reserved. {business.licenseNumber}
        </p>
        <div className="footer__legal">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
