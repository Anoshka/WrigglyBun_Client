export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Groups FAQs. “Misc” items appear on the home/FAQ section.',
      options: {
        list: [
          {title: 'Maternity', value: 'Maternity'},
          {title: 'Newborn', value: 'Newborn'},
          {title: '6 months & Above', value: '6 months & Above'},
          {title: 'Family', value: 'Family'},
          {title: 'Misc (home & FAQ page)', value: 'Misc'},
        ],
      },
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (r) => r.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 5,
      validation: (r) => r.required(),
    },
    {
      name: 'showOnFaqPage',
      title: 'Show on home / FAQ section',
      type: 'boolean',
      description: 'Turn on to show this Q&A on the website FAQ list',
      initialValue: false,
    },
  ],
  preview: {
    select: {title: 'question', subtitle: 'category'},
  },
}
