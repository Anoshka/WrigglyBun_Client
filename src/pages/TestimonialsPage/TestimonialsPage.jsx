import React from "react";
import "./TestimonialsPage.scss";
import Anumeha from "../../assets/images/testimonial_images/1 Anumeha.jpg";
import Ayushi from "../../assets/images/testimonial_images/ayushi_mishra_01.jpg";
import Vishali from "../../assets/images/testimonial_images/3 Vishali.jpg";
import Sonal from "../../assets/images/testimonial_images/4 Sonal.jpg";
import Sapna from "../../assets/images/testimonial_images/sapna_soni_01.jpg";
import Anu from "../../assets/images/testimonial_images/6 Anu Roy.jpg";
import Swarna from "../../assets/images/testimonial_images/7 Swarna.jpg";

const testimonials = [
  {
    name: "Anumeha Asthana",
    text: "We had the pleasure of working with Anandita during Dhruva's two-month shoot, and it was an incredibly fun and memorable experience. Anandita not only made Dhruva feel at ease but also went above and beyond to accommodate our specific requests for various shots. She even included our family pet in some stunning family photos, which was a wonderful touch.",
    image: Anumeha,
  },
  {
    name: "Ayushi Mishra",
    text: "Anandita is a true professional. She is extremely knowledgeable and accommodating. She did a fantastic photo shoot of our new born and captured some precious, candid moments. She has a touch of a mother who was able to engage and handle the infant which was very much required. Thank you once again Anandita.",
    image: Ayushi,
  },
  {
    name: "Vishali Hari",
    text: "I was in search of a photographer for my maternity shoot. That is when I got to know about WigglyBun Photography. From the first day of inquiry till now Anandita has been extremely sweet and passionate. She made me and my family comfortable during the shoot. The day of the shoot was very well paced which was really a big relief for me. She is very passionate and compatible person. Her love towards capturing the expression from behind the lens added additional beauty to the pictures. All the pictures came out well and very affordable too. Loved her work. Waiting for the newborn shoot with WigglyBun Photography. Much love to you Anandita. Keep up the good work you are doing. I would strongly suggest her if you are looking for your maternity shoot as well as newborn shoot in and around Bangalore.",
    image: Vishali,
  },
  {
    name: "Sonal Gupta",
    text: "We had the pleasure of working with Anandita for a photo shoot of our 20-day-old baby, and we couldn’t be happier with the experience. Anandita was incredibly caring and gentle throughout the entire session. Despite multiple changes of dress and wrapping, our baby remained comfortable and undisturbed, which speaks volumes about her skill and patience. Baby photoshoots require a lot of patience and a calm demeanor, and Anandita managed it all beautifully. She delivered stunning shots that we will cherish forever. We highly recommend Anandita for anyone looking for a talented and compassionate photographer for their little ones.",
    image: Sonal,
  },
  {
    name: "Sapna Soni",
    text: "Such a beautiful experience while Aanya's photosession!! Best thing is as a photographer you are so soft spoken ..in future will definitely do more photosession for my kids ..thankyou.",
    image: Sapna,
  },
  {
    name: "Anu Roy",
    text: "It has been a wholesome experience getting my twins photographed with WrigglyBun. Anandita is an ace photographer and holds great deal of expertise specifically in kids and babies photography. She has her way to get the most precious moments captured. I would recommend everyone to opt for WrigglyBun photography when they need the best experience with their kids photography.",
    image: Anu,
  },
  {
    name: "Swarna Gowri",
    text: "It was amazing experience to shoot with Anandita. She made it really comfortable for the kids to pose and click. We had a wonderful time and those memories got captured forever. The photos were amazing 🤩",
    image: Swarna,
  },
];

const TestimonialsPage = () => {
  return (
    <section className="testimonials">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div
            className={`testimonial__image-container testimonial__image-container--${
              testimonial.name.split(" ")[0]
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`testimonial__image testimonial__image--${
                testimonial.name.split(" ")[0]
              }`}
              loading="lazy"
            />
          </div>
          <div className="testimonial__content">
            <h3 className="testimonial__name testimonial__name--ayushi">
              {testimonial.name}
            </h3>
            <p className="testimonial__text">{`" ${testimonial.text} "`}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestimonialsPage;
