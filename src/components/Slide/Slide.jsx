import React, { useState, useEffect } from "react";
import "./Slide.scss";
import slide1 from "../../assets/images/slide_01.jpg";
import slide2 from "../../assets/images/slide_02.jpg";
import slide3 from "../../assets/images/baby_1.jpg";
import slide4 from "../../assets/images/baby_2.jpg";
import slide5 from "../../assets/images/baby_3.jpg";
import slide6 from "../../assets/images/baby_4.jpg";

const Slide = () => {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];

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
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="slide">
      <div className="slide__container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide__image ${currentIndex === index ? "active" : ""}`}
          />
        ))}
      </div>

      <button className="slide__arrow slide__arrow--left" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="slide__arrow slide__arrow--right" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default Slide;
