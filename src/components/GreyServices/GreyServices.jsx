import React from "react";
import { Link } from "react-router-dom";
import "./GreyServices.scss";
import img1 from "../../assets/images/landingpage_images/baby_3_edit_01.png";
import img2 from "../../assets/images/landingpage_images/maternity_03.png";
import img3 from "../../assets/images/tiny_triumphs.jpg";
import img4 from "../../assets/images/landingpage_images/family_01.png";
const services = [
  {
    id: "01",
    title: "Newborn",
    link: "/newborn",
    description:
      "The tiniest fingers, softest yawns, and the pure wonder of your newborn’s first days—each moment is a treasure. Let us capture these irreplaceable memories so you can hold onto them forever.",
  },
  {
    id: "02",
    title: "Maternity",
    link: "/maternity",
    description:
      "Celebrate the journey of life as it begins, capturing the glow of motherhood and the anticipation of meeting your little one. These timeless maternity portraits honor the love, strength, and beauty of this special chapter.",
  },
  {
    id: "03",
    title: "6 Months & Above",
    link: "/6months",
    description:
      "From the first laugh to tiny milestones like sitting up or crawling, these joyful phases of growth deserve to be remembered. Our milestone sessions beautifully document your baby’s journey, one triumph at a time.",
  },
  {
    id: "04",
    title: "Family",
    link: "/family",
    description:
      "The love shared within a family is the foundation of everything. Our family portraits celebrate your bond, creating lasting keepsakes of the laughter and connection you share.",
  },
];

const Services = () => (
  <section className="grey-services">
    <h1 className="grey-services__title">Our Services</h1>
    <div className="grey-services__wrap">
      {services.map((service) => (
        <div className="grey-services__card" key={service.title}>
          <h3 className="grey-services__card--id">{service.id}</h3>

          <div className="grey-services__container">
            <span className="grey-services__service">{service.title}</span>
            <p className="grey-services__description">{service.description}</p>
            <Link to={service.link} className="grey-services__link">
              READ MORE →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
