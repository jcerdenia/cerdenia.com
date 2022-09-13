import LinkedIcon from "../../../components/LinkedIcon";
import PageLayout from "../../../components/PageLayout";
import WorkListItem from "../../../components/WorkListItem";
import { getWorkFilePaths, parseMarkdown } from "../../../lib/helpers";
import type { Work } from "../../../lib/interfaces";
import { capitalize, slugify, unslugify } from "../../../lib/utils";

interface TagProps {
  tag: string;
  works: Partial<Work>[];
}

const TagPage = ({ tag, works }: TagProps): JSX.Element => {
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

      <div className="mt-3">
        <LinkedIcon
          className="link-muted"
          iconId="bi:arrow-return-left"
          href="/works"
        >
          More Works
        </LinkedIcon>
      </div>
    </PageLayout>
  );
};

export const getStaticPaths = async () => {
  const slugs: string[] = [];

  getWorkFilePaths().forEach((path: string) => {
    const metadata = parseMarkdown(path, ["metadata"]);

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
  const slug = context.params.slug;
  const works: Partial<Work>[] = [];

  getWorkFilePaths().forEach((path: string) => {
    const metadata = parseMarkdown(path, ["metadata"]);
    const slugs = metadata.tags.map((tag: string) => slugify(tag));

    if (slugs.includes(slug)) {
      works.push({
        title: metadata.title,
        subtitle: metadata.subtitle || null,
        instrumentation: metadata.instrumentation || null,
        description: metadata.description || null,
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
