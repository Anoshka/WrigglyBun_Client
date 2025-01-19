import React, { useEffect } from "react";

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
    </div>
  );
};

export default Testimonials;
