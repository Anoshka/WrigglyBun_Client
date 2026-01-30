import React from "react";
import { Link } from "react-router-dom";
import "./PhotoPage.scss";
import img1 from "../../assets/images/tiny_triumphs.jpg";
import img2 from "../../assets/images/little_bun.jpg";
import img3 from "../../assets/images/bun-tastic_celebrations.jpg";
import img4 from "../../assets/images/forever_frames_01.jpg";

const photopage = [
  {
    title: "Newborn",
    link: "/services/newborn",
    img: img1,
  },
  {
    title: "Maternity",
    link: "/services/maternity",
    img: img2,
  },
  {
    title: "6 Months & Above",
    link: "/services/6months",
    img: img3,
  },
  {
    title: "Family",
    link: "/services/family",
    img: img4,
  },
];

const PhotoPage = () => (
  <section className="photopage">
    <section className="photo-page__title">
      <h1>Maternity Photoshoot</h1>
      <Link to="/" className="photo-page__back-link">
        HOME → MATERNITY
      </Link>
    </section>
    <h2 className="photo-page__service">— OUR SERVICE —</h2>
    <h1 className="photo-page__title--sub">Maternity Photoshoot</h1>
    <p className="photo-page__description">
      The best time to schedule your maternity photoshoot is between 28 and 36
      weeks of pregnancy.———
    </p>
    <div className="photopage__container">
      {photopage.map((service) => (
        <Link to={service.link} className="photopage__card" key={service.title}>
          <img
            src={service.img}
            alt={service.title}
            className="photopage__img"
          />
          <div className="photopage__overlay">
            <span className="photopage__title">{service.title}</span>
          </div>
        </Link>
      ))}
    </div>
    <div className="photo-page__package--container">
      <p>This is my package</p>
    </div>
  </section>
);

export default PhotoPage;
