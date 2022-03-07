interface ParsedMarkdown {
  metadata: object | null;
  content: string | null;
}

type ParseOption = "metadata" | "content";

export const parseMarkdown = (
  filePath: string,
  options: ParseOption[] = ["metadata", "content"],
  onBeforeRender: (content: string) => string = (content) => content
): ParsedMarkdown => {
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
    result.content = md
      .render(onBeforeRender(content))
      .replace(/<a /g, '<a target="_blank" rel="noreferrer" ');
  }

  return result;
};
