export const FONT_LIST = [
  {title: 'Site default', value: ''},
  {title: 'Forum (header)', value: 'Forum, Arial, sans-serif'},
  {title: 'Grandstander', value: 'Grandstander, Arial, sans-serif'},
  {title: 'Montserrat', value: 'Montserrat, Arial, sans-serif'},
  {title: 'League Spartan', value: '"New Day", Arial, sans-serif'},
  {title: 'Rubik', value: 'Rubik, Arial, sans-serif'},
]

export const COLOR_LIST = [
  {title: 'Site default', value: ''},
  {title: 'Dark brown', value: '#26110d'},
  {title: 'Accent yellow', value: '#fac532'},
  {title: 'Black', value: '#000000'},
  {title: 'White', value: '#ffffff'},
  {title: 'Grey-blue', value: '#0c1931'},
]

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

export function colorField({group, name = 'color', title = 'Color'} = {}) {
  return {
    name,
    title,
    type: 'string',
    group,
    description: 'Color for this text only',
    options: {list: COLOR_LIST},
    initialValue: '',
  }
}

/** Font + color, placed right under the text field you are editing. */
export function styleFields({group, prefix = ''} = {}) {
  const fontName = prefix ? `${prefix}Font` : 'font'
  const colorName = prefix ? `${prefix}Color` : 'color'
  return [
    fontField({group, name: fontName, title: 'Font'}),
    colorField({group, name: colorName, title: 'Color'}),
  ]
}
