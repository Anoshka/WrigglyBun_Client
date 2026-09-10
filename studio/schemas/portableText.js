/** Rich text with links to pages on this site or the web. */
const portableText = {
  name: 'portableText',
  title: 'Write-up',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading', value: 'h3'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'string',
                title: 'Page or URL',
                description:
                  'Another page on this site: /maternity  /about  /blog  /contact — or a full web address starting with https://',
                validation: (r) => r.required(),
              },
            ],
          },
        ],
      },
    },
  ],
}

export default portableText
