export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  groups: [
    {name: 'basics', title: 'Basics'},
    {name: 'photos', title: 'Photos'},
    {name: 'pricing', title: 'Pricing packages'},
    {name: 'notes', title: 'Notes & FAQs'},
  ],
  fields: [
    {
      name: 'title',
      title: 'Service name',
      type: 'string',
      group: 'basics',
      validation: (r) => r.required(),
      description: 'e.g. Maternity, Newborn',
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      group: 'basics',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
      description: 'Must match the page URL: maternity, newborn, 6months, family, special-events',
    },
    {
      name: 'subtitle',
      title: 'Subtitle (optional)',
      type: 'string',
      group: 'basics',
    },
    {
      name: 'introTitle',
      title: 'Page heading',
      type: 'string',
      group: 'basics',
      description: 'Big title at the top of this service page',
    },
    {
      name: 'hero',
      title: 'Hero photo (top of page)',
      type: 'image',
      group: 'photos',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
      description: 'Upload, replace, or remove this photo anytime',
    },
    {
      name: 'carousel',
      title: 'Photo gallery / carousel',
      type: 'array',
      group: 'photos',
      description:
        'Each photo shows a thumbnail. Drag to reorder. Click to replace/crop. Use ⋮ to delete.',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
        },
      ],
    },
    {
      name: 'pricingHeading',
      title: 'Pricing section heading',
      type: 'string',
      group: 'pricing',
      initialValue: 'Pricing Packages',
    },
    {
      name: 'pricingPlans',
      title: 'Pricing plans',
      type: 'array',
      group: 'pricing',
      description: 'Add a new plan, edit prices/features, or delete a plan',
      of: [
        {
          type: 'object',
          name: 'pricingPlan',
          fields: [
            {name: 'name', type: 'string', title: 'Plan name'},
            {name: 'priceLabel', type: 'string', title: 'Price (e.g. ₹ 19,000)'},
            {name: 'periodLabel', type: 'string', title: 'Period (e.g. / Package)'},
            {
              name: 'cta',
              title: 'Button',
              type: 'object',
              fields: [
                {name: 'label', type: 'string', title: 'Button text'},
                {name: 'href', type: 'url', title: 'Button link (WhatsApp or web)'},
              ],
            },
            {
              name: 'features',
              type: 'array',
              of: [{type: 'string'}],
              title: "What's included",
              description: 'One bullet per line — add or delete freely',
            },
          ],
          preview: {
            select: {title: 'name', subtitle: 'priceLabel'},
          },
        },
      ],
    },
    {
      name: 'customPricingCta',
      title: 'Custom plan CTA',
      type: 'object',
      group: 'pricing',
      fields: [
        {name: 'label', type: 'string', title: 'Button text'},
        {name: 'href', type: 'url', title: 'Link'},
        {name: 'text', type: 'string', title: 'WhatsApp message starter'},
      ],
    },
    {
      name: 'notesHeading',
      title: 'Notes section heading',
      type: 'string',
      group: 'notes',
    },
    {
      name: 'notesSections',
      title: 'Notes sections',
      type: 'array',
      group: 'notes',
      description: 'e.g. What’s Included, Booking & Payment — add/edit/delete sections',
      of: [
        {
          type: 'object',
          name: 'notesSection',
          fields: [
            {name: 'title', type: 'string', title: 'Section title'},
            {name: 'items', type: 'array', of: [{type: 'string'}], title: 'Bullet points'},
          ],
          preview: {
            select: {title: 'title'},
          },
        },
      ],
    },
    {
      name: 'faqsHeading',
      title: 'FAQs heading on this page',
      type: 'string',
      group: 'notes',
      initialValue: 'FAQs',
    },
    {
      name: 'faqs',
      title: 'FAQs for this service',
      type: 'array',
      group: 'notes',
      description: 'Link FAQ items you created under FAQs',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current', media: 'hero'},
  },
}
