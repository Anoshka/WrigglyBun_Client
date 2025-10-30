import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <h3 className="about__title">ABOUT US -----</h3>
      {/* <p className="about__description">
        WrigglyBun Photography is a Bangalore-based studio dedicated to
        celebrating the beauty of motherhood and childhood. Every session is
        designed to reflect your unique journey, creating memories that you’ll
        treasure forever. At WrigglyBun, we go beyond photography—it’s about
        honoring your journey, celebrating your story, and creating an
        experience as special as the memories themselves.
      </p> */}
      <p
        to="https://wa.me/919820591096?text=Hi%20Anandita,%20I'd%20like%20to%20book%20a%20photoshoot!"
        target="_blank"
        rel="noopener noreferrer"
        className="about__description"
      >
        At WrigglyBun, we go beyond photography—it’s about honoring your
        journey, celebrating your story, and creating an experience as special
        as the memories themselves.
      </p>
      <Link to="/about" className="about__contact">
        WRIGGLYBUN PHOTOGRAPHY
      </Link>
    </div>
  );
}

export default About;
