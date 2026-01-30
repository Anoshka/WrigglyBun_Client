// src/cms/sanityClient.js
import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "q7ct7sx2",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});
