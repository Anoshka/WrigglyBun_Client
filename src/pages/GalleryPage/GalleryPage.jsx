import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional: Blur effect while loading
import "./GalleryPage.scss";
import placeholder from "../../assets/images/Ishaan_jpeg.jpg";
import little_bun from "../../assets/images/little_bun_01.jpg";
import first_wriggles from "../../assets/images/first_wriggles.jpg";
import tiny_triumphs from "../../assets/images/tiny_triumphs_01.jpg";
import wriggly_explorers from "../../assets/images/wriggly_explorers_02.jpg";
import youthful_charms from "../../assets/images/youthful_charms.jpg";
import forever_frames from "../../assets/images/forever_frames_01.jpg";
import buntastic_celebrations from "../../assets/images/buntastic_celebrations_03.jpg";
import birth_and_beyond from "../../assets/images/birth_and_beyond.jpg";
import styled_stories from "../../assets/images/temp_logo.png";
import seasonal_shoot from "../../assets/images/christmas_shoot.jpg";

const galleryData = [
  {
    id: 1,
    wrigglyBunAlignedName: "Little Bun Moments",
    age: "Maternity (28-35 weeks)",
    description:
      "Celebrate the journey of life as it begins, capturing the glow of motherhood and the anticipation of meeting your little one. These timeless maternity portraits honor the love, strength, and beauty of this special chapter.",
    image: little_bun,
    link: "https://wrigglybunphotography.pixieset.com/littlebunmoments/",
  },
  {
    id: 2,
    wrigglyBunAlignedName: "First Wriggles",
    age: "New Born (7-40 days)",
    description:
      "The tiniest fingers, softest yawns, and the pure wonder of your newborn’s first days—each moment is a treasure. Let us capture these irreplaceable memories so you can hold onto them forever.",
    image: first_wriggles,
    link: "https://wrigglybunphotography.pixieset.com/firstwrigglesnewborn/",
  },
  {
    id: 3,
    wrigglyBunAlignedName: "Tiny Triumphs",
    age: "Milestones (3 to 9 months)",
    description:
      "From the first laugh to tiny milestones like sitting up or crawling, these joyful phases of growth deserve to be remembered. Our milestone sessions beautifully document your baby’s journey, one triumph at a time.",
    image: tiny_triumphs,
    link: "https://wrigglybunphotography.pixieset.com/tinytriumphs/",
  },
  {
    id: 4,
    wrigglyBunAlignedName: "Wriggly Explorers",
    age: "10 months – 3 years",
    description:
      "As they toddle into a world of adventure and curiosity, these playful sessions capture the charm and imagination of your little one. Let’s bring their personality to life in vibrant, creative themes!",
    image: wriggly_explorers,
    link: "https://wrigglybunphotography.pixieset.com/wrigglyexplorers/",
  },
  {
    id: 5,
    wrigglyBunAlignedName: "Youthful Charms",
    age: "3 – 18 years",
    description:
      "From childhood giggles to teenage confidence, every phase of growing up tells a unique story. These portraits freeze the moments you’ll cherish, reflecting your child’s personality and spirit.",
    image: youthful_charms,
    link: "https://wrigglybunphotography.pixieset.com/youthfulcharms/",
  },
  {
    id: 6,
    wrigglyBunAlignedName: "Forever Frames",
    age: "All Ages",
    description:
      "The love shared within a family is the foundation of everything. Our family portraits celebrate your bond, creating lasting keepsakes of the laughter and connection you share.",
    image: forever_frames,
    link: "https://wrigglybunphotography.pixieset.com/familyportraits/",
  },
  {
    id: 7,
    wrigglyBunAlignedName: "Bun-tastic Celebrations",
    age: "All Ages",
    description:
      "Every celebration is filled with love, joy, and unforgettable memories. From birthdays to special gatherings, we capture the heart of your events, turning those moments into vibrant keepsakes.",
    image: buntastic_celebrations,
    link: "https://wrigglybunphotography.pixieset.com/bun-tasticcelebrations/",
  },
  {
    id: 8,
    wrigglyBunAlignedName: "Birth & Beyond",
    age: "Hospital Session",
    description:
      "The love shared within a family is the foundation of everything. Our family portraits celebrate your bond, creating lasting keepsakes of the laughter and connection you share.",
    image: birth_and_beyond,
    link: "https://wrigglybunphotography.pixieset.com/birthandbeyond/",
  },
  {
    id: 9,
    wrigglyBunAlignedName: "Seasonal Shoot",
    age: "All ages",
    description:
      "Capture a festival, an important event or even the essence of a season with our seasonal shoots!",
    image: seasonal_shoot,
    link: "https://wrigglybunphotography.pixieset.com/seasonalmix/",
  },
];

const GalleryPage = () => {
  return (
    <div className="gallery">
      <p className="gallery__title">GALLERY</p>
      <div className="gallery__grid">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery__item">
            <Link to={item.link} target="blank">
              <div className="gallery__image">
                <LazyLoadImage
                  src={item.image}
                  alt={item.wrigglyBunAlignedName}
                  className="gallery__category-image"
                  loading="lazy" // Added lazy loading
                  effect="blur" // Optional: Blur effect while loading
                />
              </div>
              <div className="gallery__text">
                <h3>{item.wrigglyBunAlignedName}</h3>
                <p>{item.age}</p>
                <p>{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
