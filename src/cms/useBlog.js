import { useEffect, useMemo, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { useImageUrl } from "./useImageUrl";
import { blogPostsQuery, blogPostBySlugQuery } from "./queries";

export function useBlogPosts() {
  const client = useCmsClient();
  const toImgUrl = useImageUrl();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(blogPostsQuery)
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client]);

  const posts = useMemo(() => {
    if (!raw) return [];
    return (raw || []).map((p) => ({
      ...p,
      image: p.thumbnail ? toImgUrl(p.thumbnail, 800) : null,
    }));
  }, [raw, toImgUrl]);

  return { posts, loading, error };
}

export function useBlogPost(slug) {
  const client = useCmsClient();
  const toImgUrl = useImageUrl();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    client
      .fetch(blogPostBySlugQuery, { slug })
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client, slug]);

  const post = useMemo(() => {
    if (!raw) return null;
    return {
      ...raw,
      thumbnail: raw.thumbnail ? toImgUrl(raw.thumbnail, 1200) : null,
      images: (raw.images || []).map((img) => toImgUrl(img, 1200)),
    };
  }, [raw, toImgUrl]);

  return { post, loading, error };
}
