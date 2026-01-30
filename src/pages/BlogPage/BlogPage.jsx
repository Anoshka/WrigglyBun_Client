import { Link } from "react-router-dom";
import "./BlogPage.scss";
import { useBlogPosts } from "../../cms/useBlog";
import forever_frames from "../../assets/images/forever_frames_01.jpg";
import youthful_charms from "../../assets/images/youthful_charms.jpg";

// Existing content – shown until you add blog posts in Sanity
const FALLBACK_BLOGS = [
  {
    title: "Christmas Shoot!",
    description:
      "Tis the season, and we're all for it! See what we were up to during the Christmas break!",
    link: "https://wrigglybunphotography.pixieset.com/seasonalmix/",
    image: forever_frames,
    isFallback: true,
  },
  {
    title: "Freezing those special moments in time",
    description:
      "We know the fragility of these special moments, and here we explore how you can freeze these moments forever",
    link: "https://wrigglybunphotography.pixieset.com/familyportraits/",
    image: youthful_charms,
    isFallback: true,
  },
];

const BlogPage = () => {
  const { posts, loading } = useBlogPosts();
  const list = posts?.length ? posts : FALLBACK_BLOGS;

  if (loading && !FALLBACK_BLOGS.length) return <div className="blog-page">Loading…</div>;

  return (
    <div className="blog-page">
      {list.map((blog, index) => (
        <div
          key={blog.slug || blog.title || index}
          className={`blog-post ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="blog-post__content">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            {blog.isFallback && blog.link ? (
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post__link"
              >
                LEARN MORE!
              </a>
            ) : (
              <Link to={`/blog/${blog.slug}`} className="blog-post__link">
                LEARN MORE!
              </Link>
            )}
          </div>
          <div className="blog-post__image">
            {(blog.image || blog.thumbnail) && (
              <img
                src={blog.image || blog.thumbnail}
                alt={blog.title}
                loading="lazy"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
