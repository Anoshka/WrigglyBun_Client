import { useEffect, useMemo, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { useImageUrl } from "./useImageUrl";
import { homePageQuery } from "./queries";

export function useLanding() {
  const client = useCmsClient();
  const toImgUrl = useImageUrl();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(homePageQuery)
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client]);

  const data = useMemo(() => {
    if (!raw) return null;
    return {
      heroCards: (raw.heroCards || []).map((card) => ({
        title: card.title,
        font: card.font,
        link: card.link || "#",
        img: toImgUrl(card.image, 800),
        alt: card.image?.alt || card.title,
      })),
      packagesTitle: raw.packagesTitle,
      packagesTitleFont: raw.packagesTitleFont,
      packagesQuoteLabel: raw.packagesQuoteLabel,
      bestSellingPackages: raw.bestSellingPackages || [],
      greyServicesTitle: raw.greyServicesTitle,
      greyServicesTitleFont: raw.greyServicesTitleFont,
      greyServices: raw.greyServices || [],
      featuredTestimonialsHeading:
        raw.featuredTestimonialsHeading || "What clients say",
      featuredTestimonialsHeadingFont: raw.featuredTestimonialsHeadingFont,
      featuredTestimonials: (raw.featuredTestimonials || []).map((t) => ({
        name: t.name,
        rating: t.rating,
        review: t.review,
        image: t.image ? toImgUrl(t.image, 400) : null,
        alt: t.image?.alt || t.name,
      })),
      instaHeading: raw.instaHeading,
      instaHeadingFont: raw.instaHeadingFont,
      faqEyebrow: raw.faqEyebrow,
      faqTitle: raw.faqTitle,
      faqTitleFont: raw.faqTitleFont,
      faqContactText: raw.faqContactText,
      homeFaqs: (raw.homeFaqs || [])
        .filter((f) => f?.question)
        .map((f) => ({ question: f.question, answer: f.answer })),
      showHeroes: raw.showHeroes !== false,
      showPackages: raw.showPackages !== false,
      showAbout: raw.showAbout !== false,
      showGreyServices: raw.showGreyServices !== false,
      showInsta: raw.showInsta !== false,
      showFeaturedTestimonials: raw.showFeaturedTestimonials !== false,
      showTestimonials: raw.showTestimonials !== false,
      showFaqs: raw.showFaqs !== false,
    };
  }, [raw, toImgUrl]);

  return { data, loading, error };
}
