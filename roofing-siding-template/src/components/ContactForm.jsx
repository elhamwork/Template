import { useState } from "react";
import siteConfig from "../config/siteConfig";
import Button from "./Button";
import "./ContactForm.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const { contactForm } = siteConfig;
  const [formData, setFormData] = useState(initialState);
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

  if (status === "submitted") {
    return (
      <div className="contact-form__success" role="status">
        <h3>Thank you!</h3>
        <p>Your request has been received. A member of our team will contact you within one business day.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" autoComplete="given-name" required value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="contact-form__field">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" autoComplete="family-name" required value={formData.lastName} onChange={handleChange} />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required value={formData.phone} onChange={handleChange} />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Project Details</label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us about your roofing or siding project..." value={formData.message} onChange={handleChange} />
      </div>

      <Button type="submit" variant="primary" size="lg" className="btn--block">
        {contactForm.submitText}
      </Button>
    </form>
  );
}
