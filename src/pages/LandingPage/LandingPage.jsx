import About from "../../components/About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import Insta from "../../components/Insta/Insta";
import Services from "../../components/Services/Services";
import GreyServices from "../../components/GreyServices/GreyServices";
import FAQs from "../FAQPage/FAQPage";
import { useLanding } from "../../cms/useLanding";
import "./LandingPage.scss";

function LandingPage() {
  const { data } = useLanding();
  const featured = data?.featuredTestimonials || [];
  const featuredHeading =
    data?.featuredTestimonialsHeading || "What clients say";

  return (
    <div>
      {(data?.showHeroes !== false || data?.showPackages !== false) && (
        <Services />
      )}
      {data?.showAbout !== false && <About />}
      {data?.showGreyServices !== false && <GreyServices />}
      {data?.showInsta !== false && <Insta heading={data?.instaHeading} />}
      {data?.showFeaturedTestimonials !== false && featured.length > 0 && (
        <section className="landing-testimonials">
          <h2 className="landing-testimonials__title">{featuredHeading}</h2>
          <div className="landing-testimonials__grid">
            {featured.map((t, i) => (
              <div key={i} className="landing-testimonial">
                {t.image && (
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="landing-testimonial__img"
                  />
                )}
                <div className="landing-testimonial__content">
                  <h3 className="landing-testimonial__name">{t.name}</h3>
                  <p className="landing-testimonial__text">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {data?.showTestimonials !== false && <Testimonials />}
      {data?.showFaqs !== false && <FAQs />}
    </div>
  );
}

export default LandingPage;
