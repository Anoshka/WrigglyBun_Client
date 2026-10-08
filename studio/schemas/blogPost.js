import {styleFields} from './fontField'

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      title: 'Short description (list preview)',
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
      title: 'Images at top of post',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
        },
      ],
      description: 'Add more photos, reorder, or remove',
    },
    {
      name: 'body',
      title: 'Write-up (main text)',
      type: 'portableText',
      description: 'Write the article here.',
    },
    {
      name: 'link',
      title: 'External link (optional)',
      type: 'url',
      hidden: true,
    },
    {
      name: 'publishedAt',
      title: 'Published date',
      type: 'datetime',
    },
  ],
  orderings: [
    {
      name: 'publishedAtDesc',
      title: 'Newest first',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', media: 'thumbnail', subtitle: 'publishedAt'},
  },
}
