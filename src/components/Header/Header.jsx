import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/icons/camera_icon _01.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};

  return (
    <header className="header">
      <section className="header__container">
        {/* Logo */}
        <div className="header__left">
          <NavLink to="/" className="header__logo">
            <img src={logo} className="header__img" loading="lazy" />
            <p className="header__title">
              <p className="header__title-line header__title-line__one">
              WrigglyBun
              </p>
              <p className="header__title-line header__title-line__two">
              Photography
              </p>
            </p>
          </NavLink>
          {/* <p className="header__description">
            Capturing joy, innocence, and everything in between!
          </p> */}
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
          <div
            className="header__link header__about"
            onMouseEnter={handleMouseEnter} // Open dropdown on hover
            onMouseLeave={handleMouseLeave} // Close dropdown on hover leave
          >
            <NavLink
              to="/about"
              className="header__link--about"
              onClick={closeMenu}
            >
              About
            </NavLink>
            {/* Dropdown on Tablet and Desktop */}
            {/* <div className={`header__dropdown ${isDropdownOpen ? "open" : ""}`}>
              <div className="header__dropdown-content">
                <NavLink
                  to="/about"
                  className="header__link"
                  onClick={closeDropdownAndMenu} // Close both dropdown and menu
                >
                  About Me
                </NavLink>
                <NavLink
                  to="/the-studio"
                  className="header__link"
                  onClick={closeDropdownAndMenu} // Close both dropdown and menu
                >
                  The Studio
                </NavLink>
                <NavLink
                  to="/testimonials"
                  className="header__link"
                  onClick={closeDropdownAndMenu} // Close both dropdown and menu
                >
                  Testimonials
                </NavLink>
              </div>
            </div> */}
          </div>

          {/* <NavLink
            to="/testimonials"
            className="header__link"
            onClick={closeMenu}
          >
            Testimonials
          </NavLink> */}
          <NavLink to="/maternity" className="header__link" onClick={closeMenu}>
            Maternity
          </NavLink>
          <NavLink to="/newborn" className="header__link" onClick={closeMenu}>
            Newborn
          </NavLink>
          <NavLink to="/6months" className="header__link" onClick={closeMenu}>
            6 Months & Above
          </NavLink>
          <NavLink to="/family" className="header__link" onClick={closeMenu}>
            Family
          </NavLink>
          <NavLink
            to="/special-events"
            className="header__link"
            onClick={closeMenu}
          >
            Special Occasions
          </NavLink>
          {/* <NavLink to="/events" className="header__link" onClick={closeMenu}>
            Upcoming Events
          </NavLink> */}
          <NavLink to="/blog" className="header__link" onClick={closeMenu}>
            Blog
          </NavLink>

          <NavLink to="/contact" className="header__link" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </section>
    </header>
  );
}

export default Header;
