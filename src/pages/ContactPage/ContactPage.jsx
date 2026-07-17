import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactPage.scss";
import {
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  trackFormSubmission,
  trackContactClick,
} from "../../services/analytics";
import { useSiteSettings } from "../../cms/useSiteSettings";

const Contact = () => {
  const { data: s } = useSiteSettings();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    session: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const publicKey = "ibCMc6CKU4ANFipwI";

    emailjs
      .sendForm(
        "service_hbu5nye",
        "template_kxg7j9d",
        e.target,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Your message has been sent successfully!");
          trackFormSubmission("contact", "success", formData.session);
          setFormData({
            name: "",
            email: "",
            phone: "",
            session: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("There was an error. Please try again.");
          trackFormSubmission("contact", "error", formData.session);
        }
      );
  };

  return (
    <main>
      <h2 className="contact__title">{s.contactPageTitle}</h2>
      <section className="contact">
        <div className="contact-page">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form__field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="phone">Phone (Optional):</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="session">Session:</label>
              <select
                id="session"
                name="session"
                value={formData.session}
                onChange={handleChange}
                required
              >
                <option value="">Select a session type</option>
                {s.sessionOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-form__submit">
              Get In Touch
            </button>

            {status && <p className="contact-form__status">{status}</p>}
          </form>
        </div>

        <div className="socials">
          <div className="socials__item">
            <Link
              to={s.instagramUrl}
              className="socials__link"
              target="blank"
              onClick={() =>
                trackContactClick("instagram", "contact_page", s.instagramUrl)
              }
            >
              <FaInstagram className="socials__icon" />
              <p className="socials__name">{s.instagramHandle}</p>
            </Link>
          </div>
          <div className="socials__item">
            <Link
              to={s.emailMailto}
              className="socials__link"
              onClick={() =>
                trackContactClick("email", "contact_page", s.emailMailto)
              }
            >
              <FaEnvelope className="socials__icon" />
              <p className="socials__name">{s.email}</p>
            </Link>
          </div>
          <div className="socials__item">
            <Link
              to={s.mapsUrl}
              className="socials__link"
              target="blank"
              onClick={() =>
                trackContactClick("maps", "contact_page", s.mapsUrl)
              }
            >
              <FaMapMarkerAlt className="socials__icon" />
              <div className="socials__address">
                {s.addressLines.map((line) => (
                  <p className="socials__name" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </Link>
          </div>
          <div className="socials__item">
            <Link
              to={s.whatsappUrl}
              className="socials__link"
              onClick={() =>
                trackContactClick("whatsapp", "contact_page", s.whatsappUrl)
              }
            >
              <FaWhatsapp className="socials__icon" />
              <p className="socials__name">{s.phoneDisplay}</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
