import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/temp_logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown on About
  const menuRef = useRef(null); // Reference for the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); // Close dropdown when closing the menu
  };

  // Close the menu when clicking outside of it or on a nav link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false); // Close the dropdown if clicked outside
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
            <img src={logo} className="header__img" />
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
          <NavLink to="/" className="header__link" onClick={closeMenu}>
            Home
          </NavLink>

          {/* About Link with Dropdown on Tablet and Desktop */}
          <div className=" header__link header__about">
            <NavLink
              to="/about"
              className="header__link--about"
              onClick={closeMenu}
            >
              About
            </NavLink>
            {/* Dropdown on Tablet and Desktop */}
            <div
              className={`header__dropdown ${isDropdownOpen ? "open" : ""}`}
              onClick={toggleDropdown}
            >
              <div className="header__dropdown-content">
                <NavLink
                  to="/about"
                  className="header__link"
                  onClick={closeMenu}
                >
                  About Me
                </NavLink>
                <NavLink
                  to="/the-studio"
                  className="header__link"
                  onClick={closeMenu}
                >
                  The Studio
                </NavLink>
                <NavLink
                  to="/testimonials"
                  className="header__link"
                  onClick={closeMenu}
                >
                  Testimonials
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink to="/gallery" className="header__link" onClick={closeMenu}>
            Gallery
          </NavLink>
          {isMenuOpen && (
            <NavLink
              to="/testimonials"
              className="header__link"
              onClick={closeMenu}
            >
              Testimonials
            </NavLink>
          )}

          <NavLink to="/contact" className="header__link" onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/faq" className="header__link" onClick={closeMenu}>
            FAQ
          </NavLink>
          <NavLink to="/blog" className="header__link" onClick={closeMenu}>
            Blog
          </NavLink>

          {/* Add "The Studio" only in the mobile view */}
          {isMenuOpen && (
            <NavLink
              to="/the-studio"
              className="header__link"
              onClick={closeMenu}
            >
              The Studio
            </NavLink>
          )}
        </nav>
      </section>
    </header>
  );
}

export default Header;
