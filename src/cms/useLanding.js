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
        color: card.color,
        link: card.link || "#",
        img: toImgUrl(card.image, 800),
        alt: card.image?.alt || card.title,
      })),
      packagesTitle: raw.packagesTitle,
      packagesTitleFont: raw.packagesTitleFont,
      packagesTitleColor: raw.packagesTitleColor,
      packagesQuoteLabel: raw.packagesQuoteLabel,
      packagesQuoteLabelFont: raw.packagesQuoteLabelFont,
      packagesQuoteLabelColor: raw.packagesQuoteLabelColor,
      bestSellingPackages: raw.bestSellingPackages || [],
      greyServicesTitle: raw.greyServicesTitle,
      greyServicesTitleFont: raw.greyServicesTitleFont,
      greyServicesTitleColor: raw.greyServicesTitleColor,
      greyServices: raw.greyServices || [],
      featuredTestimonialsHeading:
        raw.featuredTestimonialsHeading || "What clients say",
      featuredTestimonialsHeadingFont: raw.featuredTestimonialsHeadingFont,
      featuredTestimonialsHeadingColor: raw.featuredTestimonialsHeadingColor,
      featuredTestimonials: (raw.featuredTestimonials || []).map((t) => ({
        name: t.name,
        nameFont: t.nameFont,
        nameColor: t.nameColor,
        rating: t.rating,
        review: t.review,
        reviewFont: t.reviewFont,
        reviewColor: t.reviewColor,
        image: t.image ? toImgUrl(t.image, 400) : null,
        alt: t.image?.alt || t.name,
      })),
      instaHeading: raw.instaHeading,
      instaHeadingFont: raw.instaHeadingFont,
      instaHeadingColor: raw.instaHeadingColor,
      faqEyebrow: raw.faqEyebrow,
      faqEyebrowFont: raw.faqEyebrowFont,
      faqEyebrowColor: raw.faqEyebrowColor,
      faqTitle: raw.faqTitle,
      faqTitleFont: raw.faqTitleFont,
      faqTitleColor: raw.faqTitleColor,
      faqContactText: raw.faqContactText,
      faqContactTextFont: raw.faqContactTextFont,
      faqContactTextColor: raw.faqContactTextColor,
      homeFaqs: (raw.homeFaqs || [])
        .filter((f) => f?.question)
        .map((f) => ({
          question: f.question,
          questionFont: f.questionFont,
          questionColor: f.questionColor,
          answer: f.answer,
          answerFont: f.answerFont,
          answerColor: f.answerColor,
        })),
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
