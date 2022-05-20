type ParseOption = "metadata" | "content";

export const parseMarkdown = (
  filePath: string,
  options: ParseOption[] = ["metadata", "content"],
  onBeforeRender: (content: string) => string = (content) => content
): any => {
  const fs = require("fs");
  const matter = require("gray-matter");
  const md = require("markdown-it")({ html: true });

  const rawContent = fs.readFileSync(`${process.cwd()}/${filePath}`);
  const { data: metadata, content } = matter(rawContent);
  const result: any = {};

  if (options.includes("metadata")) {
    metadata.slug = filePath.split("/").reverse()[0].replace(".md", "");
    result.metadata = metadata;
  }

  if (options.includes("content")) {
    result.content = md.render(onBeforeRender(content));
  }

  switch (true) {
    case options.length === 1 && options[0] === "metadata":
      return result.metadata;

    case options.length === 1 && options[0] === "content":
      return result.content;

    default:
      return result;
  }
};

export const parseMarkdownInline = (markdown: string): string => {
  return require("markdown-it")().renderInline(markdown);
};
