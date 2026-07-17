import { useEffect } from 'react'
import { useSiteSettings } from '../cms/useSiteSettings'

/**
 * Applies CMS brand colors as CSS variables on <html>.
 * SCSS uses var(--wb-*, fallback) so her color edits show on the site.
 */
export default function ThemeFromCms() {
  const { data } = useSiteSettings()

  useEffect(() => {
    if (!data) return
    const root = document.documentElement
    root.style.setProperty('--wb-brown', data.colorBrown)
    root.style.setProperty('--wb-accent', data.colorAccent)
    root.style.setProperty('--wb-bg', data.colorBackground)
    root.style.setProperty('--wb-text', data.colorText)
  }, [data])

  return null
}
