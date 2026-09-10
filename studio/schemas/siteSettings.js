import {fontField} from './fontField'

// Contact details, WhatsApp, socials, and simple brand colors
export default {
  name: 'siteSettings',
  title: 'Contact & Business Info',
  type: 'document',
  groups: [
    {name: 'header', title: 'Top bar (header)'},
    {name: 'contact', title: 'Contact'},
    {name: 'colors', title: 'Brand colors'},
  ],
  fields: [
    {
      name: 'logo',
      title: 'Header logo',
      type: 'image',
      group: 'header',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
      description: 'Small camera / brand mark next to the site name. Leave empty to keep the current icon.',
    },
    {
      name: 'headerLine1',
      title: 'Header — first line',
      type: 'string',
      group: 'header',
      initialValue: 'WrigglyBun',
    },
    {
      name: 'headerLine2',
      title: 'Header — second line',
      type: 'string',
      group: 'header',
      initialValue: 'Photography',
    },
    fontField({group: 'header', name: 'headerFont', title: 'Font for the header name'}),
    {
      name: 'navLinks',
      title: 'Header menu links',
      type: 'array',
      group: 'header',
      description:
        'This is the top bar. Add, rename, reorder, or delete links. Use paths like /about or /maternity.',
      of: [
        {
          type: 'object',
          name: 'navLink',
          fields: [
            {name: 'label', type: 'string', title: 'Label', validation: (r) => r.required()},
            {
              name: 'href',
              type: 'string',
              title: 'Link',
              description: 'e.g. /  /about  /contact  /maternity',
              validation: (r) => r.required(),
            },
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
      initialValue: [
        { _type: 'navLink', label: 'Home', href: '/' },
        { _type: 'navLink', label: 'About', href: '/about' },
        { _type: 'navLink', label: 'Maternity', href: '/maternity' },
        { _type: 'navLink', label: 'Newborn', href: '/newborn' },
        { _type: 'navLink', label: '6 Months & Above', href: '/6months' },
        { _type: 'navLink', label: 'Family', href: '/family' },
        { _type: 'navLink', label: 'Special Occasions', href: '/special-events' },
        { _type: 'navLink', label: 'Blog', href: '/blog' },
        { _type: 'navLink', label: 'Contact', href: '/contact' },
      ],
    },
    {
      name: 'businessName',
      title: 'Business name',
      type: 'string',
      group: 'contact',
      description: 'Shown in the footer copyright and About button',
      initialValue: 'WrigglyBun Photography',
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
      group: 'contact',
      description: 'With country code, e.g. +919820591096',
    },
    {
      name: 'phoneDisplay',
      title: 'Phone (how it looks on the site)',
      type: 'string',
      group: 'contact',
      description: 'e.g. +91 982 059 1096',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp number',
      type: 'string',
      group: 'contact',
      description: 'Digits only with country code, e.g. 919820591096 (no + or spaces)',
    },
    {
      name: 'whatsappMessage',
      title: 'Default WhatsApp message',
      type: 'text',
      rows: 2,
      group: 'contact',
      description: 'Pre-filled when someone taps Get a Quote / WhatsApp',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'contact',
    },
    {
      name: 'instagramHandle',
      title: 'Instagram handle (display)',
      type: 'string',
      group: 'contact',
      description: 'e.g. wrigglybunphotography',
    },
    {
      name: 'mapsUrl',
      title: 'Google Maps link',
      type: 'url',
      group: 'contact',
    },
    {
      name: 'addressLines',
      title: 'Studio address (each line separate)',
      type: 'array',
      of: [{type: 'string'}],
      group: 'contact',
      description: 'Add one line per row — shown on the Contact page',
    },
    {
      name: 'contactPageTitle',
      title: 'Contact page title',
      type: 'string',
      group: 'contact',
      initialValue: 'Contact Us',
    },
    {
      name: 'sessionOptions',
      title: 'Contact form — session types',
      type: 'array',
      of: [{type: 'string'}],
      group: 'contact',
      description: 'Dropdown options on the Contact form. Add, edit, or remove anytime.',
    },
    {
      name: 'colorBrown',
      title: 'Main brown (buttons, borders, dark sections)',
      type: 'string',
      group: 'colors',
      description: 'Hex color like #26110d — paste from any color picker',
      initialValue: '#26110d',
      validation: (r) =>
        r.regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
          name: 'hex',
          invert: false,
        }).warning('Use a hex color, e.g. #26110d'),
    },
    {
      name: 'colorAccent',
      title: 'Accent / highlight (hover yellow)',
      type: 'string',
      group: 'colors',
      description: 'Hex like #fac532',
      initialValue: '#fac532',
      validation: (r) =>
        r.regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
          name: 'hex',
          invert: false,
        }).warning('Use a hex color, e.g. #fac532'),
    },
    {
      name: 'colorBackground',
      title: 'Page background',
      type: 'string',
      group: 'colors',
      description: 'Hex like #ffffff',
      initialValue: '#ffffff',
      validation: (r) =>
        r.regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
          name: 'hex',
          invert: false,
        }).warning('Use a hex color, e.g. #ffffff'),
    },
    {
      name: 'colorText',
      title: 'Main text color',
      type: 'string',
      group: 'colors',
      description: 'Hex like #26110d',
      initialValue: '#26110d',
      validation: (r) =>
        r.regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
          name: 'hex',
          invert: false,
        }).warning('Use a hex color, e.g. #26110d'),
    },
  ],
  preview: {
    prepare: () => ({title: 'Contact & Business Info'}),
  },
}
