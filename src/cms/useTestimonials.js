import { useEffect, useMemo, useState } from 'react'
import { sanity } from './sanityClient'
import { urlFor } from './imageUrl'
import { testimonialsQuery } from './queries'

function toImgUrl(img, width = 600) {
  return img ? urlFor(img).width(width).auto('format').url() : null
}

export function useTestimonials() {
  const [raw, setRaw] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    sanity.fetch(testimonialsQuery).then(setRaw).catch(setError).finally(() => setLoading(false))
  }, [])

  const testimonials = useMemo(() => {
    if (!raw) return []
    return (raw || []).map((t) => ({
      name: t.name,
      rating: t.rating,
      text: t.review,
      image: t.image ? toImgUrl(t.image, 600) : null,
      alt: t.image?.alt || t.name,
    }))
  }, [raw])

  return { testimonials, loading, error }
}
