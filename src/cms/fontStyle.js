/** Apply a CMS font only when one was chosen for that field. */
export function fontStyle(font) {
  if (!font) return undefined;
  return { fontFamily: font };
}
