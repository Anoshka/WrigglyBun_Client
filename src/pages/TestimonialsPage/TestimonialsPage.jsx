import React, { useEffect } from "react";
import "./TestimonialsPage.scss";

const TestimonialsPage = () => {
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
        className="elfsight-app-3f605a57-262f-4ec6-922f-87be6722fbff"
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default TestimonialsPage;
