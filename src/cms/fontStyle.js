/** Apply CMS font and/or color when set for that field. */
export function textStyle(font, color) {
  const style = {};
  if (font) style.fontFamily = font;
  if (color) style.color = color;
  return Object.keys(style).length ? style : undefined;
}

export function fontStyle(font, color) {
  return textStyle(font, color);
}
