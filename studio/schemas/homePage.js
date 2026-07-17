// Home page: hero photos, service blurbs, best-selling packages, testimonials
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'heroes', title: '1. Big photo cards'},
    {name: 'packages', title: '2. Best selling packages'},
    {name: 'grey', title: '3. Our Services (grey section)'},
    {name: 'testimonials', title: '4. Featured testimonials'},
    {name: 'insta', title: '5. Instagram section'},
  ],
  fields: [
    {
      name: 'heroCards',
      title: 'Big photo cards (top of home page)',
      type: 'array',
      group: 'heroes',
      description:
        'Add, remove, or reorder cards. Upload a photo for each. Link like /newborn or /maternity.',
      of: [
        {
          type: 'object',
          name: 'heroCard',
          fields: [
            {name: 'title', type: 'string', title: 'Title on the photo', validation: (r) => r.required()},
            {
              name: 'link',
              type: 'string',
              title: 'Where it goes when clicked',
              description: 'e.g. /newborn, /maternity, /family',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Photo',
              options: {hotspot: true},
              fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
            },
          ],
          preview: {
            select: {title: 'title', media: 'image'},
          },
        },
      ],
      validation: (r) => r.min(1).max(12),
    },
    {
      name: 'packagesTitle',
      title: 'Best selling packages — heading',
      type: 'string',
      group: 'packages',
      initialValue: 'BEST SELLING PACKAGES',
    },
    {
      name: 'packagesQuoteLabel',
      title: 'Get a quote — button text',
      type: 'string',
      group: 'packages',
      initialValue: 'GET A QUOTE',
    },
    {
      name: 'bestSellingPackages',
      title: 'Best selling packages',
      type: 'array',
      group: 'packages',
      description: 'Add, edit, reorder, or delete package cards on the home page.',
      of: [
        {
          type: 'object',
          name: 'packageCard',
          fields: [
            {name: 'title', type: 'string', title: 'Package name', validation: (r) => r.required()},
            {
              name: 'link',
              type: 'string',
              title: 'Link (e.g. /maternity)',
              validation: (r) => r.required(),
            },
            {
              name: 'buttonLabel',
              type: 'string',
              title: 'Button text',
              initialValue: 'KNOW MORE',
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'link'},
          },
        },
      ],
    },
    {
      name: 'greyServicesTitle',
      title: 'Our Services — section title',
      type: 'string',
      group: 'grey',
      initialValue: 'Our Services',
    },
    {
      name: 'greyServices',
      title: 'Our Services cards (grey section)',
      type: 'array',
      group: 'grey',
      description: 'These are the numbered cards (01, 02…). Add more or edit wording anytime.',
      of: [
        {
          type: 'object',
          name: 'greyService',
          fields: [
            {
              name: 'id',
              type: 'string',
              title: 'Number label',
              description: 'e.g. 01, 02, 03',
            },
            {name: 'title', type: 'string', title: 'Service name', validation: (r) => r.required()},
            {name: 'description', type: 'text', title: 'Short description', rows: 4},
            {name: 'link', type: 'string', title: 'Link (e.g. /newborn)'},
            {
              name: 'linkLabel',
              type: 'string',
              title: 'Link text',
              initialValue: 'READ MORE →',
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'id'},
          },
        },
      ],
    },
    {
      name: 'featuredTestimonialsHeading',
      title: 'Featured testimonials — heading',
      type: 'string',
      group: 'testimonials',
      initialValue: 'What clients say',
    },
    {
      name: 'featuredTestimonials',
      title: 'Featured testimonials on home page',
      type: 'array',
      group: 'testimonials',
      description: 'Pick which reviews appear on the home page (create Testimonials first).',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
    },
    {
      name: 'instaHeading',
      title: 'Instagram section heading',
      type: 'string',
      group: 'insta',
      initialValue: 'WRIGGLY MOMENTS ON INSTA',
    },
  ],
  preview: {
    prepare: () => ({title: 'Home Page'}),
  },
}
