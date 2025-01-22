import React from "react";
import "./Footer.scss";
import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social"></div>

        <div className="footer__contact">
          <div className="footer__contact-item">
            <a
              href="https://www.instagram.com/wrigglybunphotography/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer__icon" />
            </a>
          </div>
          <div className="footer__contact-item">
            <a href="tel:+919820591096">
              <FaPhoneAlt className="footer__icon" />
            </a>
          </div>
          <div className="footer__contact-item">
            <a href="mailto:wrigglybun@gmail.com">
              <FaEnvelope className="footer__icon" />
            </a>
          </div>
          <div className="footer__contact-item">
            <a
              href="https://maps.app.goo.gl/KRzKScyNmm6bmgSn8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="footer__icon" />
            </a>
          </div>
          <div className="footer__contact-item">
            <a
              href="https://wa.me/919820591096?text=Hi%20Anandita,%20I'd%20like%20to%20book%20a%20photoshoot!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="footer__icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} WrigglyBun Photography</p>
      </div>
    </footer>
  );
};

export default Footer;
