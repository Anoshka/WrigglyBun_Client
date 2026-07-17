import { useEffect, useMemo, useState } from 'react'
import { sanity } from './sanityClient'
import { urlFor } from './imageUrl'
import { aboutPageQuery } from './queries'

function toImgUrl(img, width = 1200) {
  return img ? urlFor(img).width(width).auto('format').url() : null
}

export function useAbout() {
  const [raw, setRaw] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    sanity.fetch(aboutPageQuery).then(setRaw).catch(setError).finally(() => setLoading(false))
  }, [])

  const data = useMemo(() => {
    if (!raw) return null
    return {
      landingTitle: raw.landingTitle,
      landingText: raw.landingText,
      landingButtonLabel: raw.landingButtonLabel,
      landingButtonLink: raw.landingButtonLink || '/about',
      portrait: raw.portrait
        ? { src: toImgUrl(raw.portrait, 900), alt: raw.portrait.alt || 'About' }
        : null,
      paragraphs: (raw.paragraphs || []).filter(Boolean),
    }
  }, [raw])

  return { data, loading, error }
}
