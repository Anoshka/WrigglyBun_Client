import { useMemo } from "react";
import { createSanityClient } from "./sanityClient";
import { usePreview } from "./PreviewContext";

export function useCmsClient() {
  const { isPreview } = usePreview();
  return useMemo(() => createSanityClient(isPreview), [isPreview]);
}
