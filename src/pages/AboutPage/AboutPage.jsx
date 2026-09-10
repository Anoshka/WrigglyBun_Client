import placeholder from "../../assets/images/Anandita_placeholder.jpg";
import Testimonials from "../../components/Testimonials/Testimonials";
import { useAbout } from "../../cms/useAbout";
import { fontStyle } from "../../cms/fontStyle";
import "./AboutPage.scss";

const FALLBACK_PARAGRAPHS = [
  "Anandita, the heart and soul behind this venture, fell in love with photography as a child. Armed with a humble Kodak camera loaded with a 36 exposures reel, she eagerly captured moments on yearly family trips across India. Those trips ignited her passion for storytelling through images, each frame speaking volumes.",
  "Over the years, Anandita explored multiple photography genres. Her artistic eye sharpened during her time photographing Bharatnatyam dance performances, a demanding art form that calls for impeccable timing, rhythm, and the ability to anticipate fleeting moments. As a former Bharatnatyam student herself, this background honed her observational skills, enabling her to capture candid moments that resonate across all ages.",
];

function AboutPage() {
  const { data } = useAbout();
  const portraitSrc = data?.portrait?.src || placeholder;
  const portraitAlt = data?.portrait?.alt || "Anandita's photo";
  const blocks =
    data?.blocks?.length > 0
      ? data.blocks
      : (data?.paragraphs?.length > 0
          ? data.paragraphs
          : FALLBACK_PARAGRAPHS
        ).map((text) => ({ type: "paragraph", text }));

  return (
    <div className="about-page">
      <div className="about-page__top">
        <img
          className="about-page__image"
          src={portraitSrc}
          alt={portraitAlt}
          loading="lazy"
        />
        <div className="about-page__text">
          {blocks.map((block, i) =>
            block.type === "heading" ? (
              <h2
                className="about-page__heading"
                key={`h-${i}`}
                style={fontStyle(block.font)}
              >
                {block.text}
              </h2>
            ) : (
              <p
                className="about-page__description"
                key={`p-${i}`}
                style={fontStyle(block.font)}
              >
                {block.text}
              </p>
            )
          )}
        </div>
      </div>
      {data?.showTestimonials !== false && (
        <Testimonials className="about-page__testimonials" />
      )}
    </div>
  );
}

export default AboutPage;
