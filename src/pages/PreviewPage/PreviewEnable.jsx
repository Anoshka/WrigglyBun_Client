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
    window.location.replace(safeRedirectPath());
  }, []);

  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      Opening preview…
    </div>
  )
}
