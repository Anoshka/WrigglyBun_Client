// Contact details, WhatsApp, socials — used site-wide (footer, contact page, quote buttons)
export default {
  name: 'siteSettings',
  title: 'Contact & Business Info',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business name',
      type: 'string',
      description: 'Shown in the footer copyright and About button',
      initialValue: 'WrigglyBun Photography',
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
      description: 'With country code, e.g. +919820591096',
    },
    {
      name: 'phoneDisplay',
      title: 'Phone (how it looks on the site)',
      type: 'string',
      description: 'e.g. +91 982 059 1096',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp number',
      type: 'string',
      description: 'Digits only with country code, e.g. 919820591096 (no + or spaces)',
    },
    {
      name: 'whatsappMessage',
      title: 'Default WhatsApp message',
      type: 'text',
      rows: 2,
      description: 'Pre-filled when someone taps Get a Quote / WhatsApp',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'instagramHandle',
      title: 'Instagram handle (display)',
      type: 'string',
      description: 'e.g. wrigglybunphotography',
    },
    {
      name: 'mapsUrl',
      title: 'Google Maps link',
      type: 'url',
    },
    {
      name: 'addressLines',
      title: 'Studio address (each line separate)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add one line per row — shown on the Contact page',
    },
    {
      name: 'contactPageTitle',
      title: 'Contact page title',
      type: 'string',
      initialValue: 'Contact Us',
    },
    {
      name: 'sessionOptions',
      title: 'Contact form — session types',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Dropdown options on the Contact form. Add, edit, or remove anytime.',
    },
  ],
  preview: {
    prepare: () => ({title: 'Contact & Business Info'}),
  },
}
