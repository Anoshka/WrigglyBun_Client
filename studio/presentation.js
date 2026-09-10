const SERVICE_PATHS = {
  newborn: '/newborn',
  maternity: '/maternity',
  '6months': '/6months',
  family: '/family',
  'special-events': '/special-events',
}

/** Maps Studio documents to real website URLs so Presentation can preview every page. */
export const presentationResolve = {
  locations: {
    homePage: {
      select: {},
      resolve: () => ({
        locations: [{title: 'Home', href: '/'}],
      }),
    },
    aboutPage: {
      select: {},
      resolve: () => ({
        locations: [
          {title: 'About page', href: '/about'},
          {title: 'Home — About section', href: '/'},
        ],
      }),
    },
    siteSettings: {
      select: {},
      resolve: () => ({
        locations: [
          {title: 'Home (header & footer)', href: '/'},
          {title: 'Contact', href: '/contact'},
        ],
      }),
    },
    service: {
      select: {title: 'title', slug: 'slug.current'},
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Service',
            href: SERVICE_PATHS[doc?.slug] || `/${doc?.slug || ''}`,
          },
        ],
      }),
    },
    faq: {
      select: {title: 'question'},
      resolve: () => ({
        locations: [
          {title: 'Home FAQs', href: '/'},
          {title: 'FAQ page', href: '/faq'},
        ],
      }),
    },
    testimonial: {
      select: {title: 'name'},
      resolve: () => ({
        locations: [
          {title: 'Home', href: '/'},
          {title: 'Testimonials', href: '/testimonials'},
          {title: 'About', href: '/about'},
        ],
      }),
    },
    blogPost: {
      select: {title: 'title', slug: 'slug.current'},
      resolve: (doc) => ({
        locations: [
          {title: 'Blog', href: '/blog'},
          ...(doc?.slug
            ? [{title: doc.title || 'Post', href: `/blog/${doc.slug}`}]
            : []),
        ],
      }),
    },
    event: {
      select: {title: 'title', slug: 'slug.current'},
      resolve: (doc) => ({
        locations: [
          {title: 'Events', href: '/events'},
          ...(doc?.slug
            ? [{title: doc.title || 'Event', href: `/events/${doc.slug}`}]
            : []),
        ],
      }),
    },
  },
}
