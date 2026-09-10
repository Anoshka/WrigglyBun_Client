export const FONT_LIST = [
  {title: 'Site default', value: ''},
  {title: 'Forum (header)', value: 'Forum, Arial, sans-serif'},
  {title: 'Grandstander', value: 'Grandstander, Arial, sans-serif'},
  {title: 'Montserrat', value: 'Montserrat, Arial, sans-serif'},
  {title: 'League Spartan', value: '"New Day", Arial, sans-serif'},
  {title: 'Rubik', value: 'Rubik, Arial, sans-serif'},
]

/** Drop this on the same object / right under the text field you are editing. */
export function fontField({group, name = 'font', title = 'Font'} = {}) {
  return {
    name,
    title,
    type: 'string',
    group,
    description: 'Font for this text only',
    options: {list: FONT_LIST},
    initialValue: '',
  }
}
