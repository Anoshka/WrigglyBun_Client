import { useEffect, useMemo, useState } from 'react'
import { sanity } from './sanityClient'
import { urlFor } from './imageUrl'
import { homePageQuery } from './queries'

function toImgUrl(img, width = 1200) {
  return img ? urlFor(img).width(width).auto('format').url() : null
}

export function useLanding() {
  const [raw, setRaw] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    sanity.fetch(homePageQuery).then(setRaw).catch(setError).finally(() => setLoading(false))
  }, [])

  const data = useMemo(() => {
    if (!raw) return null
    return {
      heroCards: (raw.heroCards || []).map((card) => ({
        title: card.title,
        link: card.link || '#',
        img: toImgUrl(card.image, 800),
        alt: card.image?.alt || card.title,
      })),
      packagesTitle: raw.packagesTitle,
      packagesQuoteLabel: raw.packagesQuoteLabel,
      bestSellingPackages: raw.bestSellingPackages || [],
      greyServicesTitle: raw.greyServicesTitle,
      greyServices: raw.greyServices || [],
      featuredTestimonialsHeading: raw.featuredTestimonialsHeading || 'What clients say',
      featuredTestimonials: (raw.featuredTestimonials || []).map((t) => ({
        name: t.name,
        rating: t.rating,
        review: t.review,
        image: t.image ? toImgUrl(t.image, 400) : null,
        alt: t.image?.alt || t.name,
      })),
      instaHeading: raw.instaHeading,
    }
  }, [raw])

  return { data, loading, error }
}
