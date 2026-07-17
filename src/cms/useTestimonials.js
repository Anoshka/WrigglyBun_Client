import { useEffect, useMemo, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { useImageUrl } from "./useImageUrl";
import { testimonialsQuery } from "./queries";

export function useTestimonials() {
  const client = useCmsClient();
  const toImgUrl = useImageUrl();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(testimonialsQuery)
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client]);

  const testimonials = useMemo(() => {
    if (!raw) return [];
    return (raw || []).map((t) => ({
      name: t.name,
      rating: t.rating,
      text: t.review,
      image: t.image ? toImgUrl(t.image, 600) : null,
      alt: t.image?.alt || t.name,
    }));
  }, [raw, toImgUrl]);

  return { testimonials, loading, error };
}
