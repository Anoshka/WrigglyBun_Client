// src/cms/sanityClient.js
import { createClient } from "@sanity/client";

const studioUrl =
  import.meta.env.VITE_SANITY_STUDIO_URL || "https://wrigglybun.sanity.studio";

const config = {
  projectId: "q7ct7sx2",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  stega: {
    enabled: false,
    studioUrl,
  },
};

/** Published content only (live site default). */
export function createPublishedClient() {
  return createClient(config);
}

/** Draft + published (preview on view site). Requires VITE_SANITY_PREVIEW_TOKEN. */
export function createPreviewClient() {
  const token = import.meta.env.VITE_SANITY_PREVIEW_TOKEN;
  if (!token) {
    console.warn(
      "[CMS] VITE_SANITY_PREVIEW_TOKEN is missing — preview will show published content only."
    );
  }
  return createClient({
    ...config,
    token: token || undefined,
    perspective: "previewDrafts",
    ignoreBrowserTokenWarning: true,
    /* Stega + overlays wash out cards/buttons. Preview should look like live. */
    stega: {
      enabled: false,
      studioUrl,
    },
  });
}

export function createSanityClient(preview = false) {
  return preview ? createPreviewClient() : createPublishedClient();
}

/** Default client — published only. Hooks should use useCmsClient() instead. */
export const sanity = createPublishedClient();
