import { Link } from "react-router-dom";
import "./Services.scss";
import img1 from "../../assets/images/landingpage_images/baby_3_edit_01.png";
import img2 from "../../assets/images/landingpage_images/maternity_03.png";
import img3 from "../../assets/images/tiny_triumphs.jpg";
import img4 from "../../assets/images/landingpage_images/family_01.png";
import img5 from "../../assets/images/landingpage_images/family_02_edit.jpg";
import { useLanding } from "../../cms/useLanding";

const FALLBACK_CARDS = [
  { title: "Newborn", link: "/newborn", img: img1 },
  { title: "Maternity", link: "/maternity", img: img2 },
  { title: "6 Months & Above", link: "/6months", img: img3 },
  { title: "Family", link: "/family", img: img5 },
  { title: "Special Occasions", link: "/special-events", img: img4 },
];

const Services = () => {
  const { data } = useLanding();
  const cards = data?.heroCards?.length === 5
    ? data.heroCards.map((c) => ({ title: c.title, link: c.link, img: c.img, alt: c.alt }))
    : FALLBACK_CARDS;

  return (
    <section className="services">
      <div className="services__container">
        {cards.map((service, i) => (
          <Link to={service.link} className="services__card" key={service.title}>
            <img
              src={service.img}
              alt={service.alt || service.title}
              className={
                "services__img" +
                (i === 0 ? " services__img--stretch" : "")
              }
            />
            <div className="services__overlay">
              <span className="services__title">{service.title}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="services__packages">
        <div className="services__packages--header">
          <h3 className="services__packages--start">YEARLY PLANS ------</h3>
          <Link
            to="https://wa.me/919820591096?text=Hi%20Anandita,%20I'd%20like%20to%20book%20a%20photoshoot!"
            target="_blank"
            rel="noopener noreferrer"
            className="services__packages--contact services__packages--contact-outside"
          >
            GET A QUOTE
          </Link>
        </div>
        <h1 className="services__packages--title">Best Selling Packages</h1>
        <Link
          to="https://wa.me/919820591096?text=Hi%20Anandita,%20I'd%20like%20to%20book%20a%20photoshoot!"
          target="_blank"
          rel="noopener noreferrer"
          className="services__packages--contact"
        >
          GET A QUOTE
        </Link>
        <div className="services__packages--cards">
          <div className="services__packages--container services__packages--contact-inside">
            <h2 className="services__packages--subtitle">
              Newborn Yearly Plan (Studio)
            </h2>
            <Link to="/newborn" className="services__packages--link">
              KNOW MORE
            </Link>
          </div>
          <div className="services__packages--container">
            <h2 className="services__packages--subtitle">Maternity + Newborn</h2>
            <Link to="/maternity" className="services__packages--link">
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
