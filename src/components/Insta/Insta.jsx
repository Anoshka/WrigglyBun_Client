import React, { useEffect } from "react";
import "./Insta.scss";

const Insta = () => {
  useEffect(() => {
    // If Elfsight uses any JavaScript for initialization, we can ensure it's loaded.
    const script = document.createElement("script");
    <script
      src="https://static.elfsight.com/platform/platform.js"
      async
    ></script>; // Elfsight platform script
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const elfsightEmbedCode = `
    <div class="elfsight-app-c16638bf-0105-4953-a8d5-c4d3194514c3" data-elfsight-app-lazy></div>
  `;

  return (
    <div>
      <h1 className=" insta__title">WRIGGLY MOMENTS ON INSTA</h1>
      <div
        className="elfsight-instagram-widget"
        dangerouslySetInnerHTML={{ __html: elfsightEmbedCode }}
      />
    </div>
  );
};

export default Insta;
