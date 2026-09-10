import { useEffect } from "react";
import { enablePreviewMode } from "../../cms/PreviewContext";

function safeRedirectPath() {
  const params = new URLSearchParams(window.location.search)
  const raw =
    params.get('sanity-preview-pathname') ||
    params.get('redirect') ||
    params.get('pathname') ||
    '/'
  try {
    const decoded = decodeURIComponent(raw)
    if (decoded.startsWith('/') && !decoded.startsWith('//')) return decoded
  } catch {
    /* ignore */
  }
  return '/'
}

/** Sanity Presentation opens this to load draft content, then the requested page. */
export default function PreviewEnable() {
  useEffect(() => {
    enablePreviewMode();
    const params = new URLSearchParams(window.location.search);
    const expected = import.meta.env.VITE_SANITY_PREVIEW_SECRET;
    const fromQuery =
      params.get("sanity-preview-secret") || params.get("sanity-preview");
    if (expected && fromQuery === expected) {
      try {
        sessionStorage.setItem("sanity-preview", expected);
      } catch {
        /* ignore */
      }
    }
    window.location.replace(safeRedirectPath());
  }, []);

  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      Opening preview…
    </div>
  )
}
