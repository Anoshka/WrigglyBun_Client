import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/temp_logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it or on a nav link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <section className="header__container">
        {/* Logo */}
        <div className="header__left">
          <NavLink to="/" className="header__logo">
            <img src={logo} alt="InStock-logo" className="header__img" />
            <p className="header__title">WrigglyBun Photography</p>
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
        <nav
          ref={menuRef}
          className={`header__nav ${isMenuOpen ? "open" : ""}`}
        >
          <NavLink to="/about" className="header__link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/gallery" className="header__link" onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink
            to="/testimonials"
            className="header__link"
            onClick={closeMenu}
          >
            Testimonials
          </NavLink>
          <NavLink to="/contact" className="header__link" onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/faq" className="header__link" onClick={closeMenu}>
            FAQ
          </NavLink>
          <NavLink to="/blog" className="header__link" onClick={closeMenu}>
            Blog
          </NavLink>
        </nav>
      </section>
    </header>
  );
}

export default Header;
