export const excerpt = (text: string): string => {
  // Get text up to first period and without HTML tags.
  return text.slice(0, text.indexOf(". ") + 1).replace(/(<([^>]+)>)/gi, "");
};
