export const markdownToHtml = (filePath: string): string => {
  const fs = require("fs");
  const matter = require("gray-matter");
  const md = require("markdown-it")({ html: true });
  const rawContent = fs.readFileSync(`${process.cwd()}/${filePath}`);
  const { content } = matter(rawContent);
  return md.render(content);
};
