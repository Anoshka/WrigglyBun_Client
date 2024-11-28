import React from "react";
import "./Testimonials.scss";
import img1 from "../../assets/images/testimonials/moonBhandari.png";
import img2 from "../../assets/images/testimonials/romaDoshi.png";
import img3 from "../../assets/images/testimonials/soumyaaMenon.png";
import { Link } from "react-router-dom";

const testimonialsData = [
  {
    id: 1,
    name: "Moon Bhandari",
    rating: "5",
    review:
      "Anandita is an exceptionally talented and creative photographer. She has done an outstanding job with my portraits. I am extremely pleased with her work and highly recommend her to anyone seeking portraits, maternity, newborn, or family photography sessions.",
    link: "https://maps.app.goo.gl/RJPhkS3iCi6WJVwAA",
    image: img1, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Roma Doshi",
    rating: "5",
    review:
      "In May I visited Bangalore for my Holidays and needed some interesting photos of me and my Son. I approached Anandita and we had lots of fun shooting with her. She is a professional and understands your requirements. She made my 5-year-old comfortable while clicking photos (he generally doesn't allow anyone to click his pictures but he was smiling). Thank you for such wonderful clicks and the warmth. All the best for future projects.",
    link: "https://maps.app.goo.gl/2QJRF38cyRkENw1E9",
    image: img2, // Replace with actual image URL
  },
  {
    id: 3,
    name: "Soumyaa Menon",
    rating: "5",
    review:
      "Anandita is a very compassionate and creative person to have around. Recently, for capturing my son's birthday event we got in touch with her and she made sure that everything & possibly everyone was captured by her lens. She is a superb professional, very punctual and gives her complete best. Amazing portrait captures by her that will surely make you go back to the sweet memories. Would, definitely recommend her to anyone who wishes to have their beautiful moments etched into forever frames.",
    link: "https://maps.app.goo.gl/byxpMn4uGpUQRCvw8",
    image: img3, // Replace with actual image URL
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <p className="testimonials__title">TESTIMONIALS</p>
      <div className="testimonials__grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial__card">
            <Link to={testimonial.link}>
              <div className="testimonial__image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial__content">
                <h3 className="testimonial__name">{testimonial.name}</h3>
                <div className="testimonial__rating">
                  {Array.from({ length: parseInt(testimonial.rating) }).map(
                    (_, index) => (
                      <span key={index} className="star">
                        ★
                      </span>
                    )
                  )}
                </div>
                <p className="testimonial__review">{testimonial.review}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Link
        to="https://maps.app.goo.gl/KRzKScyNmm6bmgSn8"
        className="testimonials__link"
      >
        Read more
      </Link>
    </div>
  );
};

export default Testimonials;
