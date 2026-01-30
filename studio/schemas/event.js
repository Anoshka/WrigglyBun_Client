// Same shape as blog: thumbnail, images, write-up
export default {
  name: 'event',
  title: 'Upcoming Event',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() },
    { name: 'description', title: 'Short description', type: 'text' },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt' }] },
    {
      name: 'images',
      title: 'Images (top of post)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt' }] }],
    },
    { name: 'body', title: 'Write-up', type: 'text' },
    { name: 'link', title: 'External link (optional)', type: 'url' },
    { name: 'eventDate', title: 'Event date', type: 'datetime' },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
  ],
  orderings: [{ name: 'eventDateDesc', title: 'Event date (newest)', by: [{ field: 'eventDate', direction: 'desc' }] }],
}
