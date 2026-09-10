import {fontField} from './fontField'

// Landing “About Us” strip + full About page
export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    {name: 'landing', title: 'Home page About section'},
    {name: 'page', title: 'Full About page'},
  ],
  fields: [
    {
      name: 'landingTitle',
      title: 'Home — section title',
      type: 'string',
      group: 'landing',
      initialValue: 'ABOUT US',
    },
    fontField({group: 'landing', name: 'landingTitleFont', title: 'Font for this title'}),
    {
      name: 'landingText',
      title: 'Home — short paragraph',
      type: 'text',
      rows: 4,
      group: 'landing',
      description: 'The blurb under About Us on the home page',
    },
    fontField({group: 'landing', name: 'landingTextFont', title: 'Font for this paragraph'}),
    {
      name: 'landingButtonLabel',
      title: 'Home — button text',
      type: 'string',
      group: 'landing',
      initialValue: 'WRIGGLYBUN PHOTOGRAPHY',
    },
    {
      name: 'landingButtonLink',
      title: 'Home — button link',
      type: 'string',
      group: 'landing',
      description: 'Usually /about',
      initialValue: '/about',
    },
    {
      name: 'portrait',
      title: 'About page photo',
      type: 'image',
      options: {hotspot: true},
      group: 'page',
      fields: [{name: 'alt', type: 'string', title: 'Alt text (for accessibility)'}],
      description: 'Upload or replace Anandita’s photo here',
    },
    {
      name: 'blocks',
      title: 'About page content (headings & paragraphs)',
      type: 'array',
      group: 'page',
      description:
        'Add a Heading or Paragraph, drag to reorder, or delete an item. Example: add a Heading “Meet the photographer”, then paragraphs under it.',
      of: [
        {
          type: 'object',
          name: 'heading',
          title: 'Heading',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Heading text',
              validation: (r) => r.required(),
            },
            fontField(),
          ],
          preview: {
            select: {title: 'text'},
            prepare: ({title}) => ({title: title || 'Heading', subtitle: 'Heading'}),
          },
        },
        {
          type: 'object',
          name: 'paragraph',
          title: 'Paragraph',
          fields: [
            {
              name: 'text',
              type: 'text',
              title: 'Paragraph text',
              rows: 5,
              validation: (r) => r.required(),
            },
            fontField(),
          ],
          preview: {
            select: {title: 'text'},
            prepare: ({title}) => ({
              title: title ? title.slice(0, 80) : 'Paragraph',
              subtitle: 'Paragraph',
            }),
          },
        },
      ],
    },
    {
      name: 'paragraphs',
      title: 'Old paragraphs (used only if the content list above is empty)',
      type: 'array',
      group: 'page',
      hidden: true,
      of: [{type: 'text', rows: 5}],
    },
    {
      name: 'showTestimonials',
      title: 'Show testimonials at the bottom of the About page',
      type: 'boolean',
      group: 'page',
      initialValue: true,
    },
  ],
  preview: {
    prepare: () => ({title: 'About Page'}),
  },
}
