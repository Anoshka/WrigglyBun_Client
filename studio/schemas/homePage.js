// Landing page: 5 hero cards (big photos) + featured testimonials
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heroCards',
      title: 'Hero Cards (5 big photos on top)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'link', type: 'string', title: 'Link (e.g. /newborn)' },
            { name: 'image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt' }] },
          ],
        },
      ],
      validation: (r) => r.min(5).max(5).error('Add exactly 5 hero cards'),
    },
    {
      name: 'featuredTestimonials',
      title: 'Featured Testimonials (shown on landing)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    },
  ],
}
