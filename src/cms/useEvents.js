import { useEffect, useMemo, useState } from 'react'
import { sanity } from './sanityClient'
import { urlFor } from './imageUrl'
import { eventsQuery, eventBySlugQuery } from './queries'

function toImgUrl(img, width = 1200) {
  return img ? urlFor(img).width(width).auto('format').url() : null
}

export function useEvents() {
  const [raw, setRaw] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    sanity.fetch(eventsQuery).then(setRaw).catch(setError).finally(() => setLoading(false))
  }, [])

  const events = useMemo(() => {
    if (!raw) return []
    return (raw || []).map((e) => ({
      ...e,
      image: e.thumbnail ? toImgUrl(e.thumbnail, 800) : null,
    }))
  }, [raw])

  return { events, loading, error }
}

export function useEvent(slug) {
  const [raw, setRaw] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    sanity.fetch(eventBySlugQuery, { slug }).then(setRaw).catch(setError).finally(() => setLoading(false))
  }, [slug])

  const event = useMemo(() => {
    if (!raw) return null
    return {
      ...raw,
      thumbnail: raw.thumbnail ? toImgUrl(raw.thumbnail, 1200) : null,
      images: (raw.images || []).map((img) => toImgUrl(img, 1200)),
    }
  }, [raw])

  return { event, loading, error }
}
