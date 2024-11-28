// Slide.jsx
import React, { useState, useEffect } from "react";
import "./Slide.scss"; // Import the SCSS file
import slide1 from "../../assets/images/slide_01.jpg";
import slide2 from "../../assets/images/slide_02.jpg";

const Slide = () => {
  const images = [slide1, slide2]; // Replace with your actual images

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <section className="slide">
      <div className="slide__container">
        <img src={images[currentIndex]} alt="Slide" className="slide__image" />
      </div>

      {/* Left Arrow */}
      <button className="slide__arrow slide__arrow--left" onClick={prevSlide}>
        &#10094; {/* Left arrow symbol */}
      </button>

      {/* Right Arrow */}
      <button className="slide__arrow slide__arrow--right" onClick={nextSlide}>
        &#10095; {/* Right arrow symbol */}
      </button>
    </section>
  );
};

export default Slide;
