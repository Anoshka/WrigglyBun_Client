// src/cms/queries.js
export const serviceBySlugQuery = `
*[_type == "service" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
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
    link,
    image{..., "alt": coalesce(alt, title)}
  },
  featuredTestimonials[]->{name, rating, review, image{..., "alt": coalesce(alt, name)}}
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
