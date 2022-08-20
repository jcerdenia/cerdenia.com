import PageLayout from "../../../components/PageLayout";
import WorkListItem from "../../../components/WorkListItem";
import type { Work } from "../../../lib/interfaces";
import { parseMarkdown } from "../../../lib/markdown";
import { capitalize, slugify, unslugify } from "../../../lib/utils";

interface TagProps {
  tag: string;
  works: Partial<Work>[];
}

const TagPage = ({ tag, works }: TagProps) => {
  const title = `Tagged Works: ${capitalize(tag)}`;

  return (
    <PageLayout title={title} transition={false}>
      <h5 className="mb-3">{title}</h5>

      {works.map((work) => {
        return (
          <WorkListItem
            key={work.slug}
            className="my-3"
            work={work}
            active={false}
          />
        );
      })}
    </PageLayout>
  );
};

export const getStaticPaths = async () => {
  const fs = require("fs");
  const dir = "/data/works";
  const slugs: string[] = [];

  fs.readdirSync(process.cwd() + dir)
    .filter((fileName: string): boolean => fileName.endsWith(".md"))
    .forEach((fileName: string) => {
      const metadata = parseMarkdown(`${dir}/${fileName}`, ["metadata"]);

      metadata.tags.forEach((tag: string) => {
        const slug = slugify(tag);

        if (!slugs.includes(slug)) {
          slugs.push(slug);
        }
      });
    });

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (
  context: any
): Promise<{ props: TagProps }> => {
  const fs = require("fs");
  const slug = context.params.slug;
  const dir = "/data/works";
  const works: Partial<Work>[] = [];

  fs.readdirSync(process.cwd() + dir)
    .filter((fileName: string): boolean => fileName.endsWith(".md"))
    .forEach((fileName: string) => {
      const metadata = parseMarkdown(`${dir}/${fileName}`, ["metadata"]);
      const slugs = metadata.tags.map((tag: string) => slugify(tag));

      if (slugs.includes(slug)) {
        works.push({
          title: metadata.title,
          subtitle: metadata.subtitle || null,
          instrumentation: metadata.instrumentation || null,
          year: metadata.year,
          slug: metadata.slug,
        });
      }
    });

  return {
    props: { tag: unslugify(slug), works },
  };
};

export default TagPage;
