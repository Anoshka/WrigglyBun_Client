// studio/schemas/testimonial.js
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() },
    { name: 'rating', title: 'Rating', type: 'number', validation: (r) => r.min(1).max(5) },
    { name: 'review', title: 'Review', type: 'text', validation: (r) => r.required() },
    { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt' }] },
  ],
}
