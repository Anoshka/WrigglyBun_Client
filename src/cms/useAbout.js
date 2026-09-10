import { useEffect, useMemo, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { useImageUrl } from "./useImageUrl";
import { aboutPageQuery } from "./queries";

export function useAbout() {
  const client = useCmsClient();
  const toImgUrl = useImageUrl();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(aboutPageQuery)
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client]);

  const data = useMemo(() => {
    if (!raw) return null;
    return {
      landingTitle: raw.landingTitle,
      landingText: raw.landingText,
      landingButtonLabel: raw.landingButtonLabel,
      landingButtonLink: raw.landingButtonLink || "/about",
      portrait: raw.portrait
        ? { src: toImgUrl(raw.portrait, 900), alt: raw.portrait.alt || "About" }
        : null,
      blocks: (raw.blocks || [])
        .filter((b) => b?.text)
        .map((b) => ({
          type: b._type === "heading" ? "heading" : "paragraph",
          text: b.text,
        })),
      paragraphs: (raw.paragraphs || []).filter(Boolean),
      showTestimonials: raw.showTestimonials !== false,
    };
  }, [raw, toImgUrl]);

  return { data, loading, error };
}
