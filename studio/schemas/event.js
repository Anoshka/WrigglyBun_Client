import {styleFields} from './fontField'

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
    ...styleFields({prefix: 'title'}),
    {
      name: 'slug',
      title: 'Generate web address',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
      description: 'Click Generate after you write the title. Do not type paths.',
    },
    {
      name: 'description',
      title: 'Short description',
      type: 'text',
      rows: 3,
    },
    ...styleFields({prefix: 'description'}),
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
      type: 'portableText',
      description: 'Write the event details here.',
    },
    {
      name: 'link',
      title: 'External link (optional)',
      type: 'url',
      hidden: true,
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
