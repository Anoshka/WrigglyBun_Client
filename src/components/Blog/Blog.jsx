import React from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import BlogPage from "../../pages/BlogPage/BlogPage";

const blogs = [
  {
    index: 1,
    title: "Christmas Shoot!",
    description:
      "Tis the season, and we're all for it! See what we were up to during the Christmas break!",
    content: "test content",
    link: "https://wrigglybunphotography.pixieset.com/seasonalmix/",
  },
];

function Blog() {
  return (
    <div className="blog">
      <div className="blog__title">FEATURED</div>
      <BlogPage />
    </div>
  );
}

export default Blog;
