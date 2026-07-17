import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { enableVisualEditing } from "@sanity/visual-editing";
import { usePreview } from "../../cms/PreviewContext";

/** Connects the site to Sanity Presentation (live preview + click-to-edit). */
export default function VisualEditingBridge() {
  const { isPreview } = usePreview();
  const navigate = useNavigate();
  const location = useLocation();
  const onNavigateRef = useRef(null);
  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;

  useEffect(() => {
    if (!isPreview) return;

    const disable = enableVisualEditing({
      zIndex: 10000,
      history: {
        subscribe: (onNavigate) => {
          onNavigateRef.current = onNavigate;
          return () => {
            onNavigateRef.current = null;
          };
        },
        update: (update) => {
          if (update.type === "push" || update.type === "replace") {
            navigateRef.current(update.url, {
              replace: update.type === "replace",
            });
          } else if (update.type === "pop") {
            navigateRef.current(-1);
          }
        },
      },
      refresh: async () => {
        window.location.reload();
      },
    });

    return () => disable();
  }, [isPreview]);

  useEffect(() => {
    if (!isPreview || !onNavigateRef.current) return;
    onNavigateRef.current({
      type: "push",
      url: `${location.pathname}${location.search}${location.hash}`,
    });
  }, [location.pathname, location.search, location.hash, isPreview]);

  return null;
}
