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
    {
      name: 'landingText',
      title: 'Home — short paragraph',
      type: 'text',
      rows: 4,
      group: 'landing',
      description: 'The blurb under About Us on the home page',
    },
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
      name: 'paragraphs',
      title: 'About page paragraphs',
      type: 'array',
      group: 'page',
      of: [{type: 'text', rows: 5}],
      description: 'Add, reorder, edit, or delete paragraphs. Each item = one paragraph on the page.',
    },
  ],
  preview: {
    prepare: () => ({title: 'About Page'}),
  },
}
