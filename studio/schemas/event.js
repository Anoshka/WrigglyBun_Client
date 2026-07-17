export default {
  name: 'event',
  title: 'Upcoming Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event title',
      type: 'string',
      validation: (r) => r.required(),
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
      description: 'Click Generate — becomes /events/your-slug',
    },
    {
      name: 'description',
      title: 'Short description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
      description: 'Upload, replace, or delete',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
        },
      ],
    },
    {
      name: 'body',
      title: 'Write-up',
      type: 'text',
      rows: 10,
    },
    {
      name: 'link',
      title: 'External link (optional)',
      type: 'url',
    },
    {
      name: 'eventDate',
      title: 'Event date',
      type: 'datetime',
    },
    {
      name: 'publishedAt',
      title: 'Published date',
      type: 'datetime',
    },
  ],
  orderings: [
    {
      name: 'eventDateDesc',
      title: 'Event date (newest)',
      by: [{field: 'eventDate', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', media: 'thumbnail', subtitle: 'eventDate'},
  },
}
