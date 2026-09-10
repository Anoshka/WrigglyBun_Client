import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logoFallback from "../../assets/images/icons/camera_icon _01.png";
import { trackEngagement } from "../../services/analytics";
import { useSiteSettings } from "../../cms/useSiteSettings";
import { fontStyle } from "../../cms/fontStyle";
import { useImageUrl } from "../../cms/useImageUrl";

function Header() {
  const { data: s } = useSiteSettings();
  const toImgUrl = useImageUrl();
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

  const logoSrc = s.logo ? toImgUrl(s.logo, 200) : logoFallback;
  const line1 = s.headerLine1 || "WrigglyBun";
  const line2 = s.headerLine2 || "Photography";
  const links = s.navLinks || [];

  return (
    <header className="header">
      <section className="header__container">
        <div className="header__left">
          <NavLink to="/" className="header__logo">
            <img
              src={logoSrc}
              className="header__img"
              alt={s.logo?.alt || "WrigglyBun Photography"}
              loading="lazy"
            />
            <span className="header__title" style={fontStyle(s.headerFont)}>
              <span className="header__title-line header__title-line__one">
                {line1}
              </span>
              <span className="header__title-line header__title-line__two">
                {line2}
              </span>
            </span>
          </NavLink>
        </div>

        <div
          className={`header__hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav
          ref={menuRef}
          className={`header__nav ${isMenuOpen ? "open" : ""}`}
        >
          {links.map((link) => (
            <NavLink
              key={`${link.label}-${link.href}`}
              to={link.href || "/"}
              className={
                link.href === "/about"
                  ? "header__link header__link--about"
                  : "header__link"
              }
              onClick={() => {
                if (link.href === "/contact") {
                  trackEngagement("click_contact", "header_nav", "header");
                }
                closeMenu();
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </section>
    </header>
  );
}

export default Header;
