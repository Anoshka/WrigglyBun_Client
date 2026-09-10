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

export function useFaqs() {
  const client = useCmsClient();
  const [faqs, setFaqs] = useState(FALLBACK_FAQS);
  const [eyebrow, setEyebrow] = useState("----- FAQS -----");
  const [title, setTitle] = useState("Frequently Asked Questions");
  const [contactText, setContactText] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([client.fetch(homePageQuery), client.fetch(faqsForPageQuery)])
      .then(([home, rows]) => {
        if (home?.faqEyebrow) setEyebrow(home.faqEyebrow);
        if (home?.faqTitle) setTitle(home.faqTitle);
        if (home?.faqContactText) setContactText(home.faqContactText);

        const ordered = (home?.homeFaqs || []).filter((f) => f?.question);
        if (ordered.length) {
          setFaqs(
            ordered.map((r) => ({ question: r.question, answer: r.answer }))
          );
        } else if (rows?.length) {
          setFaqs(
            rows.map((r) => ({ question: r.question, answer: r.answer }))
          );
        } else {
          setFaqs(FALLBACK_FAQS);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client]);

  return { faqs, eyebrow, title, contactText, loading, error };
}
