export const parseContent = (filePath) => {
  const fs = require("fs")
  const matter = require("gray-matter")
  const md = require("markdown-it")()

  const rawContent = fs.readFileSync(`${process.cwd()}/${filePath}`)
  const { content } = matter(rawContent)
  return md.render(content)
}