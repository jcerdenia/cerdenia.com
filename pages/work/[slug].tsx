import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import HtmlSection from "../../components/HtmlSection";
import { parseMarkdown } from "../../utils/markdown";

interface WorkPageProps {
  metadata: any;
  content: string;
}

const WorkPage = ({ metadata, content }: WorkPageProps): React.ReactElement => {
  return (
    <PageWrapper title={metadata.title} description={metadata.title}>
      <div className="work-container">
        <h4>
          <Link href="/work">Work</Link> / {metadata.title}{" "}
          {metadata.subtitle && `(${metadata.subtitle})`}
        </h4>
        <p className="small text-muted">{metadata.description}</p>
        <HtmlSection>{content}</HtmlSection>
      </div>
    </PageWrapper>
  );
};

export const getStaticPaths = async () => {
  const fs = require("fs");
  const slugs: string[] = fs
    .readdirSync(`${process.cwd()}/data/work`)
    .filter((fileName: string): boolean => fileName.endsWith(".md"))
    .map((fileName: string): string => fileName.replace(".md", ""));

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (
  context: any
): Promise<{ props: WorkPageProps }> => {
  const slug = context.params.slug;
  const { metadata, content } = parseMarkdown(`/data/work/${slug}.md`);

  return {
    props: { metadata, content },
  };
};

export default WorkPage;
