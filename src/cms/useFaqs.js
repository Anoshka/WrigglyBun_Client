import { useEffect, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { faqsForPageQuery } from "./queries";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(faqsForPageQuery)
      .then((rows) => {
        if (rows?.length) {
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

  return { faqs, loading, error };
}
