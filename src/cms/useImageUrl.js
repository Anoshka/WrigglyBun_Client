import { useEffect, useMemo, useCallback } from "react";
import { useCmsClient } from "./useCmsClient";
import { createImageUrlBuilder } from "./imageUrl";

export function useImageUrl() {
  const client = useCmsClient();
  const builder = useMemo(() => createImageUrlBuilder(client), [client]);

  return useCallback(
    (img, width = 1200) =>
      img ? builder.image(img).width(width).auto("format").url() : null,
    [builder]
  );
}
