import siteConfig from "../config/siteConfig";
import { PhoneIcon, MailIcon, PinIcon, FacebookIcon, InstagramIcon, LinkedinIcon, GoogleIcon } from "./icons";
import "./Footer.css";

export default function Footer() {
  const { company, contact, footer, services, serviceAreas, social } = siteConfig;
  const year = new Date().getFullYear();

  const socialLinks = [
    { key: "facebook", href: social.facebook, Icon: FacebookIcon, label: "Facebook" },
    { key: "instagram", href: social.instagram, Icon: InstagramIcon, label: "Instagram" },
    { key: "linkedin", href: social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { key: "google", href: social.google, Icon: GoogleIcon, label: "Google" },
  ].filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <a href="#top" className="footer__logo">
            <span className="footer__logo-main">{company.logoText}</span>
            <span className="footer__logo-accent">{company.logoAccent}</span>
          </a>
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
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Service Areas</h3>
          <ul>
            {serviceAreas.areas.map((area) => (
              <li key={area}>{area}</li>
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
              <span>
                {contact.address.street}
                <br />
                {contact.address.city}, {contact.address.state} {contact.address.zip}
              </span>
            </li>
          </ul>
          <p className="footer__hours">
            {contact.hours.map((h) => (
              <span key={h.days}>
                {h.days}: {h.time}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {year} {footer.copyrightName}. All rights reserved. {company.licenseNumber}
        </p>
        <div className="footer__legal">
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
