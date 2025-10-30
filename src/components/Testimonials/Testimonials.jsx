import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Testimonials.scss";

const Testimonials = () => {
  useEffect(() => {
    // Dynamically load the Elfsight platform script if it's not included globally
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="google-reviews">
      <div
        className="elfsight-app-e933704f-406e-4376-9d10-51731ea2e24a"
        data-elfsight-app-lazy
      />
      {/* <Link
        to="https://search.google.com/local/writereview?placeid=ChIJw9ZB2k4UrjsR8v1w3QwQn6w"
        className="google-reviews__link"
      >
        REVIEW US ON GOOGLE
      </Link> */}
      <a
        href="https://www.google.com/search?hl=en-CA&gl=ca&q=Tower+2,+WrigglyBun+Photography,+Prestige+Dolce,+Pattandur+Agrahara+ECC+Rd,+near+Prestige+Bougainvillea,+Dodsworth+Layout,+Whitefield,+Vita,+Bengaluru,+Karnataka+560066,+India&ludocid=7770227240587207958&lsig=AB86z5UBl6Vn8lngBdFvfpR3J4OS#lrd=0xacfd6341e6b8264b:0x6bd56481c343a516,3"
        className="google-reviews__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        REVIEW US ON GOOGLE
      </a>
    </div>
  );
};

export default Testimonials;
