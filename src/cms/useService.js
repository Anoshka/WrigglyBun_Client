import { useEffect, useMemo, useState } from "react";
import { sanity } from "./sanityClient";
import { urlFor } from "./imageUrl";
import { serviceBySlugQuery } from "./queries";

function toImgUrl(img, width = 1600) {
  return img ? urlFor(img).width(width).auto("format").url() : null;
}

export function useService(slug) {
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    sanity
      .fetch(serviceBySlugQuery, { slug })
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [slug]);

  const data = useMemo(() => {
    if (!raw) return null;
    return {
      slug: raw.slug,
      title: raw.title,
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
  }, [raw]);

  return { data, loading, error };
}
