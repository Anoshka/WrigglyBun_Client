import React from "react";
import "./TestimonialsPage.scss";
import { useTestimonials } from "../../cms/useTestimonials";
import Anumeha from "../../assets/images/testimonial_images/1 Anumeha.jpg";
import Ayushi from "../../assets/images/testimonial_images/ayushi_mishra_01.jpg";
import Vishali from "../../assets/images/testimonial_images/3 Vishali.jpg";
import Sonal from "../../assets/images/testimonial_images/4 Sonal.jpg";
import Sapna from "../../assets/images/testimonial_images/sapna_soni_01.jpg";
import Anu from "../../assets/images/testimonial_images/6 Anu Roy.jpg";
import Swarna from "../../assets/images/testimonial_images/7 Swarna.jpg";

const FALLBACK_TESTIMONIALS = [
  { name: "Anumeha Asthana", text: "We had the pleasure of working with Anandita during Dhruva's two-month shoot…", image: Anumeha },
  { name: "Ayushi Mishra", text: "Anandita is a true professional…", image: Ayushi },
  { name: "Vishali Hari", text: "I was in search of a photographer for my maternity shoot…", image: Vishali },
  { name: "Sonal Gupta", text: "We had the pleasure of working with Anandita for a photo shoot…", image: Sonal },
  { name: "Sapna Soni", text: "Such a beautiful experience while Aanya's photosession!!", image: Sapna },
  { name: "Anu Roy", text: "It has been a wholesome experience getting my twins photographed…", image: Anu },
  { name: "Swarna Gowri", text: "It was amazing experience to shoot with Anandita…", image: Swarna },
];

const TestimonialsPage = () => {
  const { testimonials, loading } = useTestimonials();
  const list = testimonials?.length ? testimonials : FALLBACK_TESTIMONIALS;

  if (loading) return <section className="testimonials">Loading…</section>;

  return (
    <section className="testimonials">
      {list.map((testimonial, index) => (
        <div
          key={testimonial.name + index}
          className={`testimonial ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div
            className={`testimonial__image-container testimonial__image-container--${
              testimonial.name.split(" ")[0]
            }`}
          >
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={`testimonial__image testimonial__image--${
                  testimonial.name.split(" ")[0]
                }`}
                loading="lazy"
              />
            )}
          </div>
          <div className="testimonial__content">
            <h3 className="testimonial__name testimonial__name--ayushi">
              {testimonial.name}
            </h3>
            <p className="testimonial__text">&ldquo;{testimonial.text}&rdquo;</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestimonialsPage;
