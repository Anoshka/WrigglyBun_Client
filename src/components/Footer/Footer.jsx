import React from "react";
import "./Footer.scss";
import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSiteSettings } from "../../cms/useSiteSettings";
import { trackContactClick } from "../../services/analytics";

const Footer = () => {
  const { data: s } = useSiteSettings();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social"></div>

        <div className="footer__contact">
          <div className="footer__contact-item">
            <a
              href={s.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackContactClick("instagram", "footer", s.instagramUrl)
              }
            >
              <FaInstagram className="footer__icon" />
            </a>
          </div>
          <div className="footer__contact-item">
            <Link
              to={s.phoneTel}
              onClick={() => trackContactClick("phone", "footer", s.phoneTel)}
            >
              <FaPhoneAlt className="footer__icon" />
            </Link>
          </div>
          <div className="footer__contact-item">
            <Link
              to={s.emailMailto}
              onClick={() =>
                trackContactClick("email", "footer", s.emailMailto)
              }
            >
              <FaEnvelope className="footer__icon" />
            </Link>
          </div>
          <div className="footer__contact-item">
            <a
              href={s.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("maps", "footer", s.mapsUrl)}
            >
              <FaMapMarkerAlt className="footer__icon" />
            </a>
          </div>
          <div className="footer__contact-item">
            <a
              href={s.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackContactClick("whatsapp", "footer", s.whatsappUrl)
              }
            >
              <FaWhatsapp className="footer__icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          &copy; {new Date().getFullYear()} {s.businessName}
        </p>
      </div>

      <div className="whatsapp-floating">
        <Link
          to={s.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
          onClick={() =>
            trackContactClick("whatsapp", "floating_button", s.whatsappUrl)
          }
        >
          <FaWhatsapp className="whatsapp-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
