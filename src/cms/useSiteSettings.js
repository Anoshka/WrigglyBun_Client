import { useEffect, useMemo, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { siteSettingsQuery } from "./queries";

const FALLBACK = {
  businessName: "WrigglyBun Photography",
  phone: "+919820591096",
  phoneDisplay: "+91 982 059 1096",
  email: "wrigglybun@gmail.com",
  whatsappNumber: "919820591096",
  whatsappMessage: "Hi Anandita, I'd like to book a photoshoot!",
  instagramUrl: "https://www.instagram.com/wrigglybunphotography/",
  instagramHandle: "wrigglybunphotography",
  mapsUrl: "https://maps.app.goo.gl/KRzKScyNmm6bmgSn8",
  addressLines: [
    "Tower 2, Prestige Dolce Vita, Ecc Rd, near Prestige",
    "Bougainvillea, Dodsworth Layout, Whitefield, Bengaluru,",
    "Karnataka 560066, India",
  ],
  contactPageTitle: "Contact Us",
  sessionOptions: [
    "Little Bun Moments",
    "First Wriggles",
    "Tiny Triumphs",
    "Wriggly Explorers",
    "Youthful Charms",
    "Forever Frames",
    "Bun-tastic Celebrations",
    "Birth & Beyond",
    "Styled Stories",
    "General Inquiry",
  ],
  colorBrown: "#26110d",
  colorAccent: "#fac532",
  colorBackground: "#ffffff",
  colorText: "#26110d",
};

function buildWhatsAppUrl(number, message) {
  const n = (number || FALLBACK.whatsappNumber).replace(/\D/g, "");
  const text = encodeURIComponent(message || FALLBACK.whatsappMessage);
  return `https://wa.me/${n}?text=${text}`;
}

export function useSiteSettings() {
  const client = useCmsClient();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(siteSettingsQuery)
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client]);

  const data = useMemo(() => {
    const s = raw || {};
    const merged = {
      businessName: s.businessName || FALLBACK.businessName,
      phone: s.phone || FALLBACK.phone,
      phoneDisplay: s.phoneDisplay || FALLBACK.phoneDisplay,
      email: s.email || FALLBACK.email,
      whatsappNumber: s.whatsappNumber || FALLBACK.whatsappNumber,
      whatsappMessage: s.whatsappMessage || FALLBACK.whatsappMessage,
      instagramUrl: s.instagramUrl || FALLBACK.instagramUrl,
      instagramHandle: s.instagramHandle || FALLBACK.instagramHandle,
      mapsUrl: s.mapsUrl || FALLBACK.mapsUrl,
      addressLines: s.addressLines?.length ? s.addressLines : FALLBACK.addressLines,
      contactPageTitle: s.contactPageTitle || FALLBACK.contactPageTitle,
      sessionOptions: s.sessionOptions?.length
        ? s.sessionOptions
        : FALLBACK.sessionOptions,
      colorBrown: s.colorBrown || FALLBACK.colorBrown,
      colorAccent: s.colorAccent || FALLBACK.colorAccent,
      colorBackground: s.colorBackground || FALLBACK.colorBackground,
      colorText: s.colorText || FALLBACK.colorText,
    };
    return {
      ...merged,
      whatsappUrl: buildWhatsAppUrl(merged.whatsappNumber, merged.whatsappMessage),
      phoneTel: `tel:${(merged.phone || "").replace(/\s/g, "")}`,
      emailMailto: `mailto:${merged.email}`,
    };
  }, [raw]);

  return { data, loading, error };
}

export { FALLBACK as SITE_SETTINGS_FALLBACK, buildWhatsAppUrl };
