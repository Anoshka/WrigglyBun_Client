import { Link } from "react-router-dom";
import placeholder from "../../assets/images/Ishaan_jpeg.jpg";
import "./Gallery.scss";

const galleryData = [
  {
    id: 1,
    wrigglyBunAlignedName: "Little Bun Moments",
    age: "Maternity (28-35 weeks)",
    description: "Celebrate the journey of life as it begins...",
  },
  {
    id: 2,
    wrigglyBunAlignedName: "First Wriggles",
    age: "New Born (7-40 days)",
    description: "The tiniest fingers, softest yawns...",
  },
  {
    id: 3,
    wrigglyBunAlignedName: "Tiny Triumphs",
    age: "Milestones (3 to 9 months)",
    description: "From the first laugh to tiny milestones...",
  },
  {
    id: 4,
    wrigglyBunAlignedName: "Wriggly Explorers",
    age: "10 months – 3 years",
    description: "These playful sessions capture the charm...",
  },
  {
    id: 5,
    wrigglyBunAlignedName: "Youthful Charms",
    age: "3 – 18 years",
    description: "From childhood giggles to teenage confidence...",
  },
  {
    id: 6,
    wrigglyBunAlignedName: "Forever Frames",
    age: "All Ages",
    description: "Our family portraits celebrate your bond...",
  },
  {
    id: 7,
    wrigglyBunAlignedName: "Bun-tastic Celebrations",
    age: "All Ages",
    description: "Every celebration is filled with love...",
  },
  {
    id: 8,
    wrigglyBunAlignedName: "Birth & Beyond",
    age: "Birth & Fresh48",
    description: "Our hospital sessions capture the awe...",
  },
  {
    id: 9,
    wrigglyBunAlignedName: "Styled Stories",
    age: "All Ages",
    description: "Creative photography transforms your vision...",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <p className="gallery__title">GALLERY</p>
      <div className="gallery__grid">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery__item">
            <Link to={`/gallery/${item.id}`}>
              <div className="gallery__image">
                {/* Replace with actual images */}
                <img src={placeholder} alt={item.wrigglyBunAlignedName} />
              </div>
              <div className="gallery__text">
                <h3>{item.wrigglyBunAlignedName}</h3>
                <p>{item.age}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
