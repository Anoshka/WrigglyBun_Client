import { Link } from "react-router-dom";
import "./About.scss";
import { useAbout } from "../../cms/useAbout";

const FALLBACK = {
  landingTitle: "ABOUT US",
  landingText:
    "At WrigglyBun, we go beyond photography. It’s about honoring your journey, celebrating your story, and creating an experience as special as the memories themselves.",
  landingButtonLabel: "WRIGGLYBUN PHOTOGRAPHY",
  landingButtonLink: "/about",
};

function About() {
  const { data } = useAbout();
  const title = data?.landingTitle || FALLBACK.landingTitle;
  const text = data?.landingText || FALLBACK.landingText;
  const buttonLabel = data?.landingButtonLabel || FALLBACK.landingButtonLabel;
  const buttonLink = data?.landingButtonLink || FALLBACK.landingButtonLink;

  return (
    <div className="about">
      <h3 className="about__title">{title}</h3>
      <p className="about__description">{text}</p>
      <Link to={buttonLink} className="about__contact">
        {buttonLabel}
      </Link>
    </div>
  );
}

export default About;
