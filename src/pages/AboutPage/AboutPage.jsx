import placeholder from "../../assets/images/Anandita_placeholder.jpg";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <div className="about-page">
      <img
        className="about-page__image"
        src={placeholder}
        alt="Anandita's photo"
      />
      <div className="about-page__text">
        <p className="about-page__description">
          Anandita, the heart and soul behind this venture, fell in love with
          photography as a child. Armed with a humble Kodak camera loaded with a
          36 exposures reel, she eagerly captured moments on yearly family trips
          across India. Those trips ignited her passion for storytelling through
          images, each frame speaking volumes.
        </p>
        <p className="about-page__description">
          Over the years, Anandita explored multiple photography genres. Her
          artistic eye sharpened during her time photographing Bharatnatyam
          dance performances, a demanding art form that calls for impeccable
          timing, rhythm, and the ability to anticipate fleeting moments. As a
          former Bharatnatyam student herself, this background honed her
          observational skills, enabling her to capture candid moments that
          resonate across all ages.
        </p>
        <p className="about-page__description">
          After completing her Chartered Accountancy and spending over a decade
          in the corporate world, Anandita decided to follow her passion for
          storytelling through photography. Inspired by her son—the tiniest,
          most wriggly bundle she had ever held—WrigglyBun Photography was born.
          The name reflects both the joyful chaos of little ones and the journey
          of motherhood, from "a bun in the oven" to the endless movement of
          growing toddlers.
        </p>
        <p className="about-page__description">
          WrigglyBun Photography specializes in capturing life’s most precious
          stages: the anticipation of pregnancy, the delicate innocence of
          newborns, the playful charm of toddlers, and their special events such
          as birthdays, tonsure, threading ceremonies, etc. Each photograph is a
          celebration of the giggles, wriggles, and tender moments that families
          hold dear.
        </p>
        <p className="about-page__description">
          With formal training from the National Institute of Photography,
          Mumbai, and workshops led by esteemed global photographers, Anandita
          continuously hones her craft to bring out the best in every frame.
        </p>
        <p className="about-page__description">
          At WrigglyBun Photography, it is not just about creating stunning
          photos—it is about crafting an unforgettable experience. Anandita
          looks forward to welcoming you to her studio to turn fleeting moments
          into treasured memories.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
