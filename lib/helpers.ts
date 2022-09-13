export const getWorkFilePaths = (fileNamesOnly?: boolean) => {
  const fs = require("fs");
  const dir = "/data/works";

  return fs
    .readdirSync(process.cwd() + dir)
    .filter((fileName: string) => fileName.endsWith(".md"))
    .map((fileName: string) =>
      fileNamesOnly ? fileName : `${dir}/${fileName}`
    );
};

type ParseOption = "metadata" | "content";

export const parseMarkdown = (
  filePath: string,
  options: ParseOption[] = ["metadata", "content"],
  // eslint-disable-next-line no-unused-vars
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
