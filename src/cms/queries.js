// src/cms/queries.js
export const serviceBySlugQuery = `
*[_type == "service" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  subtitle,
  introTitle,
  hero{..., "alt": coalesce(alt, title)},
  carousel[]{..., "alt": coalesce(alt, "Image")},
  pricingHeading,
  pricingPlans[]{name, priceLabel, periodLabel, cta{label, href}, features},
  customPricingCta{label, href, text},
  notesHeading,
  notesSections[]{title, items},
  faqsHeading,
  faqs[]->{question, answer}
}
`;

export const homePageQuery = `
*[_type == "homePage"][0]{
  heroCards[]{
    title,
    font,
    link,
    image{..., "alt": coalesce(alt, title)}
  },
  packagesTitle,
  packagesTitleFont,
  packagesQuoteLabel,
  bestSellingPackages[]{title, link, buttonLabel},
  greyServicesTitle,
  greyServicesTitleFont,
  greyServices[]{id, title, description, link, linkLabel},
  featuredTestimonialsHeading,
  featuredTestimonialsHeadingFont,
  featuredTestimonials[]->{name, rating, review, image{..., "alt": coalesce(alt, name)}},
  instaHeading,
  instaHeadingFont,
  faqEyebrow,
  faqTitle,
  faqTitleFont,
  faqContactText,
  homeFaqs[]->{question, answer},
  showHeroes,
  showPackages,
  showAbout,
  showGreyServices,
  showInsta,
  showFeaturedTestimonials,
  showTestimonials,
  showFaqs
}
`;

export const aboutPageQuery = `
*[_type == "aboutPage"][0]{
  landingTitle,
  landingTitleFont,
  landingText,
  landingTextFont,
  landingButtonLabel,
  landingButtonLink,
  portrait{..., "alt": coalesce(alt, "About")},
  blocks[]{_type, text, font},
  paragraphs,
  showTestimonials
}
`;

export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  businessName,
  phone,
  phoneDisplay,
  email,
  whatsappNumber,
  whatsappMessage,
  instagramUrl,
  instagramHandle,
  mapsUrl,
  addressLines,
  contactPageTitle,
  sessionOptions,
  colorBrown,
  colorAccent,
  colorBackground,
  colorText,
  logo{..., "alt": coalesce(alt, "Logo")},
  headerLine1,
  headerLine2,
  headerFont,
  navLinks[]{label, href}
}
`;

export const faqsForPageQuery = `
*[_type == "faq" && (showOnFaqPage == true || category == "Misc")] | order(_createdAt asc){
  question,
  answer,
  category
}
`;

export const testimonialsQuery = `
*[_type == "testimonial"] | order(_createdAt desc){
  name,
  rating,
  review,
  image{..., "alt": coalesce(alt, name)}
}
`;

export const blogPostsQuery = `
*[_type == "blogPost"] | order(publishedAt desc){
  title,
  "slug": slug.current,
  description,
  thumbnail{..., "alt": coalesce(alt, title)},
  publishedAt
}
`;

export const blogPostBySlugQuery = `
*[_type == "blogPost" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  description,
  thumbnail{..., "alt": coalesce(alt, title)},
  images[]{..., "alt": coalesce(alt, "Image")},
  body,
  link,
  publishedAt
}
`;

export const eventsQuery = `
*[_type == "event"] | order(eventDate desc){
  title,
  "slug": slug.current,
  description,
  thumbnail{..., "alt": coalesce(alt, title)},
  eventDate,
  publishedAt
}
`;

export const eventBySlugQuery = `
*[_type == "event" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  description,
  thumbnail{..., "alt": coalesce(alt, title)},
  images[]{..., "alt": coalesce(alt, "Image")},
  body,
  link,
  eventDate,
  publishedAt
}
`;
