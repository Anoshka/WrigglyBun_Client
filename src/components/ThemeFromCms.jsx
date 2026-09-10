import { useEffect } from "react";
import { useSiteSettings } from "../cms/useSiteSettings";

/**
 * Applies CMS brand colors and fonts as CSS variables on <html>.
 */
export default function ThemeFromCms() {
  const { data } = useSiteSettings();

  useEffect(() => {
    if (!data) return;
    const root = document.documentElement;
    root.style.setProperty("--wb-brown", data.colorBrown);
    root.style.setProperty("--wb-accent", data.colorAccent);
    root.style.setProperty("--wb-bg", data.colorBackground);
    root.style.setProperty("--wb-text", data.colorText);

    if (data.bodyFont && data.bodyFont !== "default") {
      root.style.setProperty("--wb-body-font", data.bodyFont);
    } else {
      root.style.removeProperty("--wb-body-font");
    }
    if (data.headingFont && data.headingFont !== "default") {
      root.style.setProperty("--wb-heading-font", data.headingFont);
    } else {
      root.style.removeProperty("--wb-heading-font");
    }
  }, [data]);

  return null;
}
