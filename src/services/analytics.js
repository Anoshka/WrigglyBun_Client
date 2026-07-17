import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-5N0QSNHE11";

let initialized = false;

/**
 * Initialize GA4. Call once on app load.
 * Demographics (age/gender), location, devices, and traffic sources
 * are collected by Google automatically once Google signals is enabled
 * in the GA4 Admin UI — see enableDemographicsNotes below.
 */
export const initGA = () => {
  if (initialized || typeof window === "undefined") return;

  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gtagOptions: {
      // SPA handles page views manually via trackPageView
      send_page_view: false,
      // Helps attribution for ads / organic search
      cookie_flags: "SameSite=None;Secure",
    },
  });

  initialized = true;
};

/** SPA page views — also sends page title for clearer reports */
export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: typeof document !== "undefined" ? document.title : path,
  });
};

/**
 * Primary conversion: user starts a conversation / lead path.
 * Mark `generate_lead` as a key event in GA4 Admin → Events.
 *
 * @param {"whatsapp"|"phone"|"email"|"maps"|"instagram"|"form"|"other"} method
 * @param {string} location - where on the site (e.g. "footer_floating", "contact_page")
 * @param {object} [extra]
 */
export const trackLead = (method, location, extra = {}) => {
  ReactGA.event("generate_lead", {
    method,
    lead_source: location,
    page_path:
      typeof window !== "undefined" ? window.location.pathname : undefined,
    ...extra,
  });
};

/**
 * Contact / social icon clicks (also fires generate_lead for conversion funnel).
 * Use this for WhatsApp, phone, email, maps, Instagram icons.
 */
export const trackContactClick = (method, location, url = "") => {
  const normalized = String(method || "other").toLowerCase();

  ReactGA.event("contact", {
    method: normalized,
    contact_location: location,
    link_url: url || undefined,
  });

  // Count every contact intent as a lead for conversion rate
  trackLead(normalized, location, { link_url: url || undefined });
};

/** Alias kept for existing ContactPage imports */
export const trackSocialClick = (platform, url, location = "contact_page") => {
  trackContactClick(platform, location, url);
};

/**
 * Successful (or failed) contact form submission.
 * Success → generate_lead; always logs form_submit for funnel analysis.
 */
export const trackFormSubmission = (
  formType,
  status,
  sessionType = "",
  location = "contact_page"
) => {
  ReactGA.event("form_submit", {
    form_name: formType,
    form_status: status,
    session_type: sessionType || undefined,
    form_location: location,
  });

  if (status === "success") {
    trackLead("form", location, {
      session_type: sessionType || undefined,
      form_name: formType,
    });
  }
};

/** @deprecated Use trackFormSubmission — kept for compatibility */
export const trackContactSubmission = (success) => {
  trackFormSubmission("contact", success ? "success" : "error");
};

/** Service / package page interest */
export const trackServiceView = (serviceName, slug = "") => {
  ReactGA.event("view_item", {
    item_name: serviceName,
    item_id: slug || serviceName,
    item_category: "service",
  });
};

/** “Get a Quote” / plan CTA (often WhatsApp) */
export const trackQuoteClick = (location, serviceName = "", url = "") => {
  ReactGA.event("select_content", {
    content_type: "quote_cta",
    item_id: serviceName || location,
    content_location: location,
  });

  trackContactClick("whatsapp", location, url);
};

/** Pricing plan CTA on a service page */
export const trackPricingCta = (planName, serviceName, url = "") => {
  ReactGA.event("select_item", {
    item_list_name: serviceName || "pricing",
    item_name: planName,
  });

  trackContactClick("whatsapp", `pricing_${serviceName || "service"}`, url);
};

/** Portfolio / gallery outbound clicks */
export const trackGalleryClick = (sessionName, sessionAge) => {
  ReactGA.event("select_content", {
    content_type: "gallery",
    item_id: sessionName,
    session_age: sessionAge,
  });
};

export const trackPortfolioView = (portfolioName) => {
  ReactGA.event("view_item", {
    item_name: portfolioName,
    item_category: "portfolio",
  });
};

export const trackPhotoInteraction = (photoId, action) => {
  ReactGA.event("select_content", {
    content_type: "photo",
    item_id: photoId,
    interaction_type: action,
  });
};

/** Nav / internal CTA that signals buying intent (e.g. Contact in header) */
export const trackEngagement = (action, label = "", location = "") => {
  ReactGA.event("cta_click", {
    engagement_action: action,
    engagement_label: label || undefined,
    engagement_location: location || undefined,
  });
};
