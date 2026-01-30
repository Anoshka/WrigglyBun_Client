import React from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogPage.scss";
import { useBlogPost } from "../../cms/useBlog";

const BlogPostPage = () => {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug);

  if (loading) return <div className="blog-page blog-post-page">Loading…</div>;
  if (error || !post) return <div className="blog-page blog-post-page">Post not found.</div>;

  return (
    <article className="blog-page blog-post-page">
      <Link to="/blog" className="blog-post-page__back">← Back to Blog</Link>
      <h1 className="blog-post-page__title">{post.title}</h1>
      {post.description && <p className="blog-post-page__description">{post.description}</p>}
      {post.thumbnail && <img src={post.thumbnail} alt={post.title} className="blog-post-page__thumb" />}
      {post.images?.length > 0 && (
        <div className="blog-post-page__images">
          {post.images.map((url, i) => (
            <img key={i} src={url} alt="" className="blog-post-page__img" />
          ))}
        </div>
      )}
      {post.body && (
        <div className="blog-post-page__body">{post.body.split("\n").map((p, i) => (p.trim() ? <p key={i}>{p}</p> : null))}</div>
      )}
      {post.link && (
        <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-post__link">
          External link →
        </a>
      )}
    </article>
  );
};

export default BlogPostPage;
