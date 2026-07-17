import { useEffect, useState } from 'react'
import { sanity } from './sanityClient'
import { faqsForPageQuery } from './queries'
import faqData from '../assets/JSON/faq.json'

const FALLBACK_FAQS = (faqData?.FAQ?.Miscellaneous?.questions || []).map((q) => ({
  question: q.question,
  answer: q.answer,
}))

export function useFaqs() {
  const [faqs, setFaqs] = useState(FALLBACK_FAQS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    sanity
      .fetch(faqsForPageQuery)
      .then((rows) => {
        if (rows?.length) {
          setFaqs(rows.map((r) => ({ question: r.question, answer: r.answer })))
        }
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { faqs, loading, error }
}
