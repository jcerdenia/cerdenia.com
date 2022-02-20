import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import HtmlSection from "../../components/HtmlSection";
import { parseMarkdown } from "../../utils/markdown";
import categories from "../../data/work-categories";

interface WorkPageProps {
  metadata: any;
  content: string;
  selections: any[];
}

const WorkPage = ({
  metadata,
  content,
  selections,
}: WorkPageProps): React.ReactElement => {
  return (
    <PageWrapper title={metadata.title} description={metadata.title}>
      <Row>
        <Col md={12} lg={3} className="work-sidebar">
          <h6>{categories[metadata.category].display}</h6>
          {selections.map((work) => (
            <div key={work.slug} className="my-3">
              <Link href={`/work/${work.slug}`}>{work.title}</Link>{" "}
              {work.subtitle && `(${work.subtitle})`}{" "}
              <div className="small text-muted">for {work.for}</div>
            </div>
          ))}
          <Link href="/work" passHref>
            <a className="link-muted">
              <i className="bi bi-arrow-return-left" /> More Work
            </a>
          </Link>
        </Col>
        <Col md={12} lg={9}>
          <h4 className="page-content-header">
            {metadata.title} {metadata.subtitle && `(${metadata.subtitle})`}
          </h4>
          <p className="small text-muted">{metadata.description}</p>
          <HtmlSection className="content">{content}</HtmlSection>
        </Col>
      </Row>
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
  const { metadata, content }: any = parseMarkdown(
    `/data/work/${slug}.md`,
    ["metadata", "content"],
    (content) => {
      return content
        .replace("hide_related=false", "hide_related=true")
        .replace("show_teaser=true", "show_teaser=false")
        .replace("show_comments=true", "show_comments=false");
    }
  );

  const fs = require("fs");
  const selections = fs
    .readdirSync(`${process.cwd()}/data/work`)
    .filter((fileName: string): boolean => fileName.endsWith(".md"))
    .map(
      (fileName: string): {} =>
        parseMarkdown(`data/work/${fileName}`, ["metadata"]).metadata
    )
    .filter((work) => work.category === metadata.category);

  return {
    props: { metadata, content, selections },
  };
};

export default WorkPage;
