// studio/schemas/service.js
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    },
    {name: 'introTitle', title: 'Intro Title', type: 'string'},
    {
      name: 'hero',
      title: 'Hero',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt'}],
    },
    {
      name: 'carousel',
      title: 'Carousel',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string', title: 'Alt'}],
        },
      ],
    },
    {name: 'pricingHeading', title: 'Pricing Heading', type: 'string'},
    {
      name: 'pricingPlans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'priceLabel', type: 'string', title: 'Price Label'},
            {name: 'periodLabel', type: 'string', title: 'Period Label'},
            {
              name: 'cta',
              title: 'CTA',
              type: 'object',
              fields: [
                {name: 'label', type: 'string', title: 'Label'},
                {name: 'href', type: 'url', title: 'Href'},
              ],
            },
            {name: 'features', type: 'array', of: [{type: 'string'}], title: 'Features'},
          ],
        },
      ],
    },
    {
      name: 'customPricingCta',
      title: 'Custom Pricing CTA',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'href', type: 'url'},
        {name: 'text', type: 'string'},
      ],
    },
    {name: 'notesHeading', title: 'Notes Heading', type: 'string'},
    {
      name: 'notesSections',
      title: 'Notes Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string'},
            {name: 'items', type: 'array', of: [{type: 'string'}]},
          ],
        },
      ],
    },
    {name: 'faqsHeading', title: 'FAQs Heading', type: 'string'},
    {name: 'faqs', title: 'FAQs', type: 'array', of: [{type: 'reference', to: [{type: 'faq'}]}]},
  ],
}
