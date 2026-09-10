import { Link } from "react-router-dom";
import "./Services.scss";
import img1 from "../../assets/images/landingpage_images/baby_3_edit_01.png";
import img2 from "../../assets/images/landingpage_images/maternity_03.png";
import img3 from "../../assets/images/tiny_triumphs.jpg";
import img4 from "../../assets/images/landingpage_images/family_01.png";
import img5 from "../../assets/images/landingpage_images/family_02_edit.jpg";
import { useLanding } from "../../cms/useLanding";
import { useSiteSettings } from "../../cms/useSiteSettings";
import { trackQuoteClick } from "../../services/analytics";

const FALLBACK_CARDS = [
  { title: "Newborn", link: "/newborn", img: img1 },
  { title: "Maternity", link: "/maternity", img: img2 },
  { title: "6 Months & Above", link: "/6months", img: img3 },
  { title: "Family", link: "/family", img: img5 },
  { title: "Special Occasions", link: "/special-events", img: img4 },
];

const FALLBACK_PACKAGES = [
  { title: "Maternity Yearly Plan", link: "/maternity", buttonLabel: "KNOW MORE" },
  { title: "Newborn Yearly Plan", link: "/newborn", buttonLabel: "KNOW MORE" },
  {
    title: "6 Months and Above Yearly Plan",
    link: "/6months",
    buttonLabel: "KNOW MORE",
  },
  { title: "Family Plan", link: "/family", buttonLabel: "KNOW MORE" },
];

const Services = () => {
  const { data } = useLanding();
  const { data: settings } = useSiteSettings();

  const cards =
    data?.heroCards?.length > 0
      ? data.heroCards.map((c, i) => ({
          title: c.title,
          link: c.link,
          img: c.img || FALLBACK_CARDS[i % FALLBACK_CARDS.length]?.img,
          alt: c.alt,
        }))
      : FALLBACK_CARDS;

  const packages =
    data?.bestSellingPackages?.length > 0
      ? data.bestSellingPackages
      : FALLBACK_PACKAGES;
  const packagesTitle = data?.packagesTitle || "BEST SELLING PACKAGES";
  const quoteLabel = data?.packagesQuoteLabel || "GET A QUOTE";
  const quoteHref = settings?.whatsappUrl;

  return (
    <section className="services">
      {data?.showHeroes !== false && (
      <div className="services__container">
        {cards.map((service, i) => (
          <Link to={service.link} className="services__card" key={`${service.title}-${i}`}>
            <img
              src={service.img}
              alt={service.alt || service.title}
              className={
                "services__img" + (i === 0 ? " services__img--stretch" : "")
              }
            />
            <div className="services__overlay">
              <span className="services__title">{service.title}</span>
            </div>
          </Link>
        ))}
      </div>
      )}

      {data?.showPackages !== false && (
      <div className="services__packages">
        <div className="services__packages--header" />
        <h1 className="services__packages--title">{packagesTitle}</h1>

        <div className="services__packages--cards">
          {packages.map((pkg) => (
            <div className="services__packages--container" key={pkg.title}>
              <h2 className="services__packages--subtitle">{pkg.title}</h2>
        <Link
          to={pkg.link || "#"}
          className="services__packages--link"
        >
          {pkg.buttonLabel || "KNOW MORE"}
        </Link>
            </div>
          ))}
        </div>
        <a
          href={quoteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="services__packages--contact"
          onClick={() =>
            trackQuoteClick("home_packages", "best_selling", quoteHref)
          }
        >
          {quoteLabel}
        </a>
      </div>
      )}
    </section>
  );
};

export default Services;
