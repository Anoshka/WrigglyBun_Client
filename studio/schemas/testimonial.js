export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client name',
      type: 'string',
      validation: (r) => r.required(),
    },
    {
      name: 'rating',
      title: 'Star rating (1–5)',
      type: 'number',
      validation: (r) => r.min(1).max(5),
      initialValue: 5,
    },
    {
      name: 'review',
      title: 'Review text',
      type: 'text',
      rows: 6,
      validation: (r) => r.required(),
      description: 'Edit wording anytime',
    },
    {
      name: 'image',
      title: 'Client photo (optional)',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
      description: 'Upload, replace, or remove',
    },
  ],
  preview: {
    select: {title: 'name', subtitle: 'review', media: 'image'},
  },
}
