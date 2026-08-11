import siteConfig from "../config/siteConfig";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "../components/icons";
import usePageMeta from "../hooks/usePageMeta";
import "./Contact.css";

export default function Contact() {
  const { contact, business, contactForm, seo } = siteConfig;
  usePageMeta(seo.contact);

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        heading="Contact Us"
        description={`Request a free estimate or ask us a question — we typically respond within one business day.`}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>{contactForm.heading}</h2>
            <p className="contact-info__subheading">{contactForm.subheading}</p>

            <ul className="contact-info__list">
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
              <li className="contact-info__hours">
                <ClockIcon />
                <div>
                  {contact.hours.map((h) => (
                    <div key={h.days} className="contact-info__hours-row">
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>

            <p className="contact-info__service-area">
              <strong>Service Area:</strong> {contact.serviceArea}
            </p>
            <p className="contact-info__license">{business.licenseNumber} &nbsp;•&nbsp; Licensed &amp; Insured</p>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
