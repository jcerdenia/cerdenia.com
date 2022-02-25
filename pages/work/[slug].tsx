import Link from "next/link";
import { Button, Row, Col } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import HtmlSection from "../../components/HtmlSection";
import { parseMarkdown } from "../../utils/markdown";
import categories from "../../data/work-categories";
import { Work } from "./index";

interface WorkSideBarProps {
  activeKey: string;
  header: string;
  works: Work[];
}

interface WorkContentProps {
  work: Work;
  note: string;
}

interface WorkPageProps {
  work: Work;
  note: string;
  relatedWorks: Work[];
}

const WorkSideBar = ({
  activeKey,
  header,
  works,
}: WorkSideBarProps): React.ReactElement => {
  return (
    <>
      <h6>{header}</h6>
      {works.map((work: Work) => (
        <div key={work.slug} className="my-3">
          {work.slug !== activeKey ? (
            <Link href={`/work/${work.slug}`}>{work.title}</Link>
          ) : (
            <strong>{work.title}</strong>
          )}{" "}
          {work.subtitle && `(${work.subtitle})`}{" "}
          <div className="small text-muted">for {work.for}</div>
        </div>
      ))}
      <Link href="/work" passHref>
        <a className="link-muted link-more-work">
          <i className="bi bi-arrow-return-left" /> More Work
        </a>
      </Link>
    </>
  );
};

const WorkContent = ({ work, note }: WorkContentProps): React.ReactElement => {
  return (
    <>
      <h4 className="page-content-header">
        {work.title} {work.subtitle && `(${work.subtitle})`}
      </h4>
      <p className="small text-muted">{work.description}</p>
      <HtmlSection className="my-2">{note}</HtmlSection>
      <Link href="/work" passHref>
        <a className="link-muted link-more-work">
          <i className="bi bi-arrow-return-left" /> More Work
        </a>
      </Link>
    </>
  );
};

const WorkPage = ({
  work,
  note,
  relatedWorks,
}: WorkPageProps): React.ReactElement => {
  return (
    <PageWrapper title={work.title}>
      <Row>
        <Col md={12} lg={3} className="work-sidebar-container">
          <WorkSideBar
            activeKey={work.slug}
            header={categories[work.category].display}
            works={relatedWorks}
          />
        </Col>
        <Col md={12} lg={9} className="work-content-container">
          <WorkContent work={work} note={note} />
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
  const { metadata: work, content: note }: any = parseMarkdown(
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
  const relatedWorks: Work[] = fs
    .readdirSync(`${process.cwd()}/data/work`)
    .filter((fileName: string) => fileName.endsWith(".md"))
    .map((fileName: string) => {
      return parseMarkdown(`data/work/${fileName}`, ["metadata"]).metadata;
    })
    .filter(({ category }: Work) => category === work.category);

  return {
    props: { work, note, relatedWorks },
  };
};

export default WorkPage;
