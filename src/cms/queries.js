// src/cms/queries.js
export const serviceBySlugQuery = `
*[_type == "service" && slug.current == $slug][0]{
  title,
  titleFont,
  titleColor,
  "slug": slug.current,
  subtitle,
  subtitleFont,
  subtitleColor,
  introTitle,
  introTitleFont,
  introTitleColor,
  hero{..., "alt": coalesce(alt, title)},
  carousel[]{..., "alt": coalesce(alt, "Image")},
  pricingHeading,
  pricingHeadingFont,
  pricingHeadingColor,
  pricingPlans[]{
    name, nameFont, nameColor,
    priceLabel, priceLabelFont, priceLabelColor,
    periodLabel, periodLabelFont, periodLabelColor,
    cta{label, labelFont, labelColor, href},
    features
  },
  customPricingCta{label, labelFont, labelColor, href, text},
  notesHeading,
  notesHeadingFont,
  notesHeadingColor,
  notesSections[]{title, titleFont, titleColor, items},
  faqsHeading,
  faqsHeadingFont,
  faqsHeadingColor,
  faqs[]->{question, questionFont, questionColor, answer, answerFont, answerColor}
}
`;

export const homePageQuery = `
*[_type == "homePage"][0]{
  heroCards[]{
    title,
    font,
    color,
    link,
    image{..., "alt": coalesce(alt, title)}
  },
  packagesTitle,
  packagesTitleFont,
  packagesTitleColor,
  packagesQuoteLabel,
  packagesQuoteLabelFont,
  packagesQuoteLabelColor,
  bestSellingPackages[]{
    title, titleFont, titleColor,
    link,
    buttonLabel, buttonLabelFont, buttonLabelColor
  },
  greyServicesTitle,
  greyServicesTitleFont,
  greyServicesTitleColor,
  greyServices[]{
    id, idFont, idColor,
    title, titleFont, titleColor,
    description, descriptionFont, descriptionColor,
    link,
    linkLabel, linkLabelFont, linkLabelColor
  },
  featuredTestimonialsHeading,
  featuredTestimonialsHeadingFont,
  featuredTestimonialsHeadingColor,
  featuredTestimonials[]->{
    name, nameFont, nameColor,
    rating,
    review, reviewFont, reviewColor,
    image{..., "alt": coalesce(alt, name)}
  },
  instaHeading,
  instaHeadingFont,
  instaHeadingColor,
  faqEyebrow,
  faqEyebrowFont,
  faqEyebrowColor,
  faqTitle,
  faqTitleFont,
  faqTitleColor,
  faqContactText,
  faqContactTextFont,
  faqContactTextColor,
  homeFaqs[]->{question, questionFont, questionColor, answer, answerFont, answerColor},
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
  landingTitleColor,
  landingText,
  landingTextFont,
  landingTextColor,
  landingButtonLabel,
  landingButtonLabelFont,
  landingButtonLabelColor,
  landingButtonLink,
  portrait{..., "alt": coalesce(alt, "About")},
  blocks[]{_type, text, font, color},
  paragraphs,
  showTestimonials
}
`;

export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  businessName,
  businessNameFont,
  businessNameColor,
  phone,
  phoneDisplay,
  phoneDisplayFont,
  phoneDisplayColor,
  email,
  whatsappNumber,
  whatsappMessage,
  instagramUrl,
  instagramHandle,
  mapsUrl,
  addressLines,
  contactPageTitle,
  contactPageTitleFont,
  contactPageTitleColor,
  sessionOptions,
  colorBrown,
  colorAccent,
  colorBackground,
  colorText,
  logo{..., "alt": coalesce(alt, "Logo")},
  headerLine1,
  headerLine1Font,
  headerLine1Color,
  headerLine2,
  headerLine2Font,
  headerLine2Color,
  headerFont,
  navLinks[]{label, font, color, href}
}
`;

export const faqsForPageQuery = `
*[_type == "faq" && (showOnFaqPage == true || category == "Misc")] | order(_createdAt asc){
  question,
  questionFont,
  questionColor,
  answer,
  answerFont,
  answerColor,
  category
}
`;

export const testimonialsQuery = `
*[_type == "testimonial"] | order(_createdAt desc){
  name,
  nameFont,
  nameColor,
  rating,
  review,
  reviewFont,
  reviewColor,
  image{..., "alt": coalesce(alt, name)}
}
`;

export const blogPostsQuery = `
*[_type == "blogPost"] | order(publishedAt desc){
  title,
  titleFont,
  titleColor,
  "slug": slug.current,
  description,
  descriptionFont,
  descriptionColor,
  thumbnail{..., "alt": coalesce(alt, title)},
  publishedAt
}
`;

export const blogPostBySlugQuery = `
*[_type == "blogPost" && slug.current == $slug][0]{
  title,
  titleFont,
  titleColor,
  "slug": slug.current,
  description,
  descriptionFont,
  descriptionColor,
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
  titleFont,
  titleColor,
  "slug": slug.current,
  description,
  descriptionFont,
  descriptionColor,
  thumbnail{..., "alt": coalesce(alt, title)},
  eventDate,
  publishedAt
}
`;

export const eventBySlugQuery = `
*[_type == "event" && slug.current == $slug][0]{
  title,
  titleFont,
  titleColor,
  "slug": slug.current,
  description,
  descriptionFont,
  descriptionColor,
  thumbnail{..., "alt": coalesce(alt, title)},
  images[]{..., "alt": coalesce(alt, "Image")},
  body,
  link,
  eventDate,
  publishedAt
}
`;
