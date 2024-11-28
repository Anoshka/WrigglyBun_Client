import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo-placeholder_01.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <section className="header__container">
        {/* Logo */}
        <div className="header__left">
          <NavLink to="/" className="header__logo">
            <img src={logo} alt="InStock-logo" className="header__img" />
            WrigglyBun
          </NavLink>
          <p className="header__description">
            Capturing joy, innocence, and everything in between!
          </p>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className={`header__hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Navigation Links */}
        <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/about" className="header__link">
            About
          </NavLink>
          <NavLink to="/gallery" className="header__link">
            Gallery
          </NavLink>
          <NavLink to="/testimonials" className="header__link">
            Testimonials
          </NavLink>
          <NavLink to="/contact" className="header__link">
            Contact
          </NavLink>
          <NavLink to="/faq" className="header__link">
            FAQ
          </NavLink>
        </nav>
      </section>
    </header>
  );
}

export default Header;
