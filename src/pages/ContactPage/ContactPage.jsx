import React, { useState } from "react";
import emailjs from "/emailjs-com";
import "./ContactPage.scss";
import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "/react-icons/fa";
import insta_icon from "../../assets/images/icons/instagram.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    session: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service configuration (change with your own service ID, template ID, and user ID)
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your emailjs service ID
        "YOUR_TEMPLATE_ID", // Replace with your emailjs template ID
        e.target,
        "YOUR_USER_ID" // Replace with your emailjs user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("There was an error. Please try again.");
        }
      );
  };

  return (
    <div>
      <h2 className="contact__title">Contact Us</h2>
      <div className="contact">
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
              <label htmlFor="session">Session:</label>
              <select
                id="session"
                name="session"
                value={formData.session}
                onChange={handleChange}
                required
              >
                <option value="">Select a session type</option>
                <option value="Little Bun Moments">Little Bun Moments</option>
                <option value="First Wriggles">First Wriggles</option>
                <option value="Tiny Triumphs">Tiny Triumphs</option>
                <option value="Wriggly Explorers">Wriggly Explorers</option>
                <option value="Youthful Charms">Youthful Charms</option>
                <option value="Forever Frames">Forever Frames</option>
                <option value="Bun-tastic Celebrations">
                  Bun-tastic Celebrations
                </option>
                <option value="Birth & Beyond">Birth & Beyond</option>
                <option value="Styled Stories">Styled Stories</option>
                <option value="General Inquiry">General Inquiry</option>
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

        {/* Social Media Icons */}
        <div className="socials">
          <div className="socials__item">
            <Link
              to="https://www.instagram.com/wrigglybunphotography/"
              className="socials__link"
              target="blank"
            >
              <FaInstagram className="socials__icon" />
              <p className="socials__name">wrigglybunphotography</p>
            </Link>
          </div>
          <div className="socials__item">
            <Link to="tel:+919820591096" className="socials__link">
              <FaPhoneAlt className="socials__icon" />
              <p className="socials__name">+91 (982) 059-1096</p>
            </Link>
          </div>
          <div className="socials__item">
            <Link to="mailto:wrigglybun@gmail.com" className="socials__link">
              <FaEnvelope className="socials__icon" />
              <p className="socials__name">wrigglybun@gmail.com</p>
            </Link>
          </div>
          <div className="socials__item">
            <Link
              to="https://maps.app.goo.gl/KRzKScyNmm6bmgSn8"
              className="socials__link"
              target="blank"
            >
              <FaMapMarkerAlt className="socials__icon" />
              <div className="socials__address">
                <p className="socials__name">
                  Tower 2, Prestige Dolce, Ecc Rd, near Prestige
                </p>
                <p className="socials__name">
                  Bougainvillea, Dodsworth Layout, Whitefield, Vita, Bengaluru,
                </p>
                <p className="socials__name">Karnataka 560066, India</p>
              </div>
            </Link>
          </div>
          <div className="socials__item">
            <Link
              to="https://wa.me/919820591096?text=Hi%20Anandita,%20I'd%20like%20to%20book%20a%20photoshoot!"
              className="socials__link"
            >
              <FaWhatsapp className="socials__icon" />
              <p className="socials__name">+91 (982) 059-1096</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
