import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <p className="about__description">
        WrigglyBun Photography is a Bangalore-based studio dedicated to
        celebrating the beauty of motherhood and childhood. Every session is
        designed to reflect your unique journey, creating memories that you’ll
        treasure forever. We understand how precious these moments are, which is
        why the safety and comfort of both mother and baby remain at the heart
        of everything we do. At WrigglyBun, we go beyond photography—it’s about
        honoring your journey, celebrating your story, and creating an
        experience as special as the memories themselves.
      </p>
      <Link to="/contact" className="about__contact">
        Contact Now
      </Link>
    </div>
  );
}

export default About;
