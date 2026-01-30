// studio/schemas/faq.js
export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {list: ['Maternity', 'Newborn', '6 months & Above', 'Family', 'Misc']},
    },
    {name: 'question', title: 'Question', type: 'string', validation: (r) => r.required()},
    {name: 'answer', title: 'Answer', type: 'text', validation: (r) => r.required()},
  ],
}
