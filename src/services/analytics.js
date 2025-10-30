import ReactGA from "react-ga4";

// Initialize GA4
export const initGA = () => {
  ReactGA.initialize("G-5N0QSNHE11"); // Replace with your GA4 Measurement ID
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

// Track portfolio views
export const trackPortfolioView = (portfolioName) => {
  ReactGA.event({
    category: "Portfolio",
    action: "View",
    label: portfolioName,
  });
};

// Track contact form submissions
export const trackContactSubmission = (success) => {
  ReactGA.event({
    category: "Contact",
    action: "Submit",
    label: success ? "Success" : "Failed",
  });
};

// Track photo interactions
export const trackPhotoInteraction = (photoId, action) => {
  ReactGA.event({
    category: "Photo",
    action: action, // 'View', 'Download', etc.
    label: photoId,
  });
};

// Track form submissions
export const trackFormSubmission = (formType, status, sessionType = "") => {
  ReactGA.event({
    category: "Form",
    action: "Submit",
    label: formType,
    sessionType,
    status,
  });
};

// Track social media clicks
export const trackSocialClick = (platform, url) => {
  ReactGA.event({
    category: "Social",
    action: "Click",
    label: platform,
    url,
  });
};

// Track gallery interactions
export const trackGalleryClick = (sessionName, sessionAge) => {
  ReactGA.event({
    category: "Gallery",
    action: "Click",
    label: sessionName,
    sessionAge,
  });
};
