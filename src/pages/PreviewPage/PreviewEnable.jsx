import { useEffect } from "react";
import { enablePreviewMode } from "../../cms/PreviewContext";

/** Sanity Presentation opens this to load draft content on the preview site. */
export default function PreviewEnable() {
  useEffect(() => {
    enablePreviewMode();
    window.location.replace("/");
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      Opening preview…
    </div>
  );
}
