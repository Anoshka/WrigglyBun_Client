import { useEffect } from "react";
import { disablePreviewMode } from "../../cms/PreviewContext";

export default function PreviewDisable() {
  useEffect(() => {
    disablePreviewMode();
    window.location.replace("/");
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      Exiting preview…
    </div>
  );
}
