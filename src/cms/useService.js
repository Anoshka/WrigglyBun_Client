import { useEffect, useMemo, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { useImageUrl } from "./useImageUrl";
import { serviceBySlugQuery } from "./queries";

export function useService(slug) {
  const client = useCmsClient();
  const toImgUrl = useImageUrl();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    client
      .fetch(serviceBySlugQuery, { slug })
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client, slug]);

  const data = useMemo(() => {
    if (!raw) return null;
    return {
      slug: raw.slug,
      title: raw.title,
      subtitle: raw.subtitle,
      introTitle: raw.introTitle || raw.title,
      hero: {
        src: toImgUrl(raw.hero, 1920),
        alt: raw.hero?.alt || raw.title,
      },
      carousel: (raw.carousel || []).map((img) => ({
        src: toImgUrl(img, 1200),
        alt: img?.alt,
      })),
      pricingHeading: raw.pricingHeading,
      pricingPlans: raw.pricingPlans || [],
      customPricingCta: raw.customPricingCta,
      notesHeading: raw.notesHeading,
      notesSections: raw.notesSections || [],
      faqsHeading: raw.faqsHeading,
      faqs: (raw.faqs || []).map((f) => ({ q: f.question, a: f.answer })),
    };
  }, [raw, toImgUrl]);

  return { data, loading, error };
}
