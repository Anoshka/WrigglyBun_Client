import React from "react";
import "./BlogPage.scss";
import forever_frames from "../../assets/images/forever_frames_01.jpg";
import youthful_charms from "../../assets/images/youthful_charms.jpg";

const blogs = [
  {
    index: 1,
    title: "Christmas Shoot!",
    description:
      "Tis the season, and we're all for it! See what we were up to during the Christmas break!",
    content: "test content",
    link: "https://wrigglybunphotography.pixieset.com/seasonalmix/",
    image: forever_frames,
  },
  {
    index: 2,
    title: "Freezing those special moments in time",
    description:
      "We know the fragility of these special moments, and here we explore how you can freeze these moments forever",
    content: "test content",
    link: "https://wrigglybunphotography.pixieset.com/familyportraits/",
    image: youthful_charms,
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className={`blog-post ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="blog-post__content">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post__link"
            >
              LEARN MORE!
            </a>
          </div>
          <div className="blog-post__image">
            <img src={blog.image} alt={blog.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
