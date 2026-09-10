import { Link } from "react-router-dom";
import "./GreyServices.scss";
import { useLanding } from "../../cms/useLanding";
import { fontStyle } from "../../cms/fontStyle";

const FALLBACK = [
  {
    id: "01",
    title: "Newborn",
    link: "/newborn",
    description:
      "Each moment, from the tiniest fingers, softest yawns, and the pure wonder of your newborn’s first days, is a treasure. Let us capture these irreplaceable memories so you can hold onto them forever.",
    linkLabel: "READ MORE →",
  },
  {
    id: "02",
    title: "Maternity",
    link: "/maternity",
    description:
      "Celebrate the journey of life as it begins, capturing the glow of motherhood and the anticipation of meeting your little one. These timeless maternity portraits honor the love, strength, and beauty of this special chapter.",
    linkLabel: "READ MORE →",
  },
  {
    id: "03",
    title: "6 Months & Above",
    link: "/6months",
    description:
      "From the first laugh to tiny milestones like sitting up or crawling, these joyful phases of growth deserve to be remembered. Our milestone sessions beautifully document your baby’s journey, one triumph at a time.",
    linkLabel: "READ MORE →",
  },
  {
    id: "04",
    title: "Family",
    link: "/family",
    description:
      "The love shared within a family is the foundation of everything. Our family portraits celebrate your bond, creating lasting keepsakes of the laughter and connection you share.",
    linkLabel: "READ MORE →",
  },
  {
    id: "05",
    title: "Special Events",
    link: "/special-events",
    description:
      "Preserve the memories of your special events with stunning photos that capture the joy, emotion, and celebration.",
    linkLabel: "READ MORE →",
  },
];

const GreyServices = () => {
  const { data } = useLanding();
  const title = data?.greyServicesTitle || "Our Services";
  const services =
    data?.greyServices?.length > 0 ? data.greyServices : FALLBACK;

  return (
    <section className="grey-services">
      <h1
        className="grey-services__title"
        style={fontStyle(data?.greyServicesTitleFont)}
      >
        {title}
      </h1>
      <div className="grey-services__wrap">
        {services.map((service) => (
          <div className="grey-services__card" key={service.title}>
            <h3 className="grey-services__card--id">{service.id}</h3>
            <div className="grey-services__container">
              <span className="grey-services__service">{service.title}</span>
              <p className="grey-services__description">{service.description}</p>
              <Link to={service.link || "#"} className="grey-services__link">
                {service.linkLabel || "READ MORE →"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreyServices;
