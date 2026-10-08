import { useEffect, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { faqsForPageQuery, homePageQuery } from "./queries";
import faqData from "../assets/JSON/faq.json";

const FALLBACK_FAQS = (faqData?.FAQ?.Miscellaneous?.questions || []).map(
  (q) => ({
    question: q.question,
    answer: q.answer,
  })
);

function mapFaq(r) {
  return {
    question: r.question,
    questionFont: r.questionFont,
    questionColor: r.questionColor,
    answer: r.answer,
    answerFont: r.answerFont,
    answerColor: r.answerColor,
  };
}

export function useFaqs() {
  const client = useCmsClient();
  const [faqs, setFaqs] = useState(FALLBACK_FAQS);
  const [eyebrow, setEyebrow] = useState("----- FAQS -----");
  const [eyebrowFont, setEyebrowFont] = useState("");
  const [eyebrowColor, setEyebrowColor] = useState("");
  const [title, setTitle] = useState("Frequently Asked Questions");
  const [titleFont, setTitleFont] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [contactText, setContactText] = useState(null);
  const [contactTextFont, setContactTextFont] = useState("");
  const [contactTextColor, setContactTextColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([client.fetch(homePageQuery), client.fetch(faqsForPageQuery)])
      .then(([home, rows]) => {
        if (home?.faqEyebrow) setEyebrow(home.faqEyebrow);
        if (home?.faqEyebrowFont) setEyebrowFont(home.faqEyebrowFont);
        if (home?.faqEyebrowColor) setEyebrowColor(home.faqEyebrowColor);
        if (home?.faqTitle) setTitle(home.faqTitle);
        if (home?.faqTitleFont) setTitleFont(home.faqTitleFont);
        if (home?.faqTitleColor) setTitleColor(home.faqTitleColor);
        if (home?.faqContactText) setContactText(home.faqContactText);
        if (home?.faqContactTextFont) setContactTextFont(home.faqContactTextFont);
        if (home?.faqContactTextColor) setContactTextColor(home.faqContactTextColor);

        const ordered = (home?.homeFaqs || []).filter((f) => f?.question);
        if (ordered.length) {
          setFaqs(ordered.map(mapFaq));
        } else if (rows?.length) {
          setFaqs(rows.map(mapFaq));
        } else {
          setFaqs(FALLBACK_FAQS);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client]);

  return {
    faqs,
    eyebrow,
    eyebrowFont,
    eyebrowColor,
    title,
    titleFont,
    titleColor,
    contactText,
    contactTextFont,
    contactTextColor,
    loading,
    error,
  };
}
