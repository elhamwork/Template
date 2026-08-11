import { useState } from "react";
import siteConfig from "../config/siteConfig";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "./icons";
import "./EstimateForm.css";

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  zip: "",
  service: "",
  message: "",
};

export default function EstimateForm() {
  const { estimateForm, contact, company } = siteConfig;
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); // idle | submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit handler — wire this up to your API, form service,
    // or CRM of choice (e.g. Formspree, Netlify Forms, a serverless function).
    setStatus("submitted");
  };

  return (
    <section id="contact" className="section estimate section--muted">
      <div className="container estimate__grid">
        <div className="estimate__info">
          <span className="section-heading__eyebrow">Get In Touch</span>
          <h2>{estimateForm.heading}</h2>
          <p className="estimate__info-text">{estimateForm.subheading}</p>

          <ul className="estimate__contact-list">
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
                {contact.address.street}, {contact.address.city}, {contact.address.state} {contact.address.zip}
              </span>
            </li>
            <li className="estimate__hours">
              <ClockIcon />
              <div>
                {contact.hours.map((h) => (
                  <div key={h.days} className="estimate__hours-row">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>

          <p className="estimate__license">
            {company.licenseNumber} &nbsp;•&nbsp; Licensed &amp; Insured
          </p>
        </div>

        <div className="estimate__form-wrapper">
          {status === "submitted" ? (
            <div className="estimate__success" role="status">
              <h3>Thank you!</h3>
              <p>
                Your request has been received. A member of our team will contact you within one
                business day to schedule your free estimate.
              </p>
            </div>
          ) : (
            <form className="estimate__form" onSubmit={handleSubmit} noValidate>
              <div className="estimate__form-row">
                <div className="estimate__field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="estimate__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="estimate__form-row">
                <div className="estimate__field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="estimate__field">
                  <label htmlFor="zip">ZIP Code</label>
                  <input id="zip" name="zip" type="text" inputMode="numeric" autoComplete="postal-code" required value={formData.zip} onChange={handleChange} />
                </div>
              </div>

              <div className="estimate__field">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" required value={formData.service} onChange={handleChange}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {estimateForm.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="estimate__field">
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} />
              </div>

              <div className="estimate__field">
                <label htmlFor="photos">Upload Photos (optional)</label>
                <input id="photos" name="photos" type="file" accept="image/*" multiple />
              </div>

              <button type="submit" className="btn btn--primary btn--block">
                {estimateForm.submitText}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
