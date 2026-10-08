/** Rich text. Links are hidden so site paths cannot be broken. */
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
        annotations: [],
      },
    },
  ],
}

export default portableText
