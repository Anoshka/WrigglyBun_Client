import React, { useEffect } from "react";
import { fontStyle } from "../../cms/fontStyle";
import "./Insta.scss";

const Insta = ({ heading, headingFont }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const elfsightEmbedCode = `
    <div class="elfsight-app-c16638bf-0105-4953-a8d5-c4d3194514c3" data-elfsight-app-lazy></div>
  `;

  return (
    <div>
      <h1 className="insta__title" style={fontStyle(headingFont)}>
        {heading || "WRIGGLY MOMENTS ON INSTA"}
      </h1>
      <div
        className="elfsight-instagram-widget"
        dangerouslySetInnerHTML={{ __html: elfsightEmbedCode }}
      />
    </div>
  );
};

export default Insta;
