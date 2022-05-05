import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../../components/PageLayout";
import HtmlWrapper from "../../components/HtmlWrapper";
import LinkedIcon from "../../components/LinkedIcon";
import { parseMarkdown } from "../../utils/markdown";
import { excerpt } from "../../utils/excerpt";
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
}: WorkSideBarProps): JSX.Element => {
  return (
    <>
      <h6>{header}</h6>
      {works.map((work: Work) => (
        <nav key={work.slug} className="my-3">
          {work.slug !== activeKey ? (
            <Link href={`/work/${work.slug}`}>{work.title}</Link>
          ) : (
            <strong>{work.title}</strong>
          )}{" "}
          {work.subtitle && `(${work.subtitle})`}{" "}
          <aside className="small text-muted">for {work.for}</aside>
        </nav>
      ))}
      <Link href="/work" passHref>
        <LinkedIcon
          className="link-muted link-more-work"
          iconId="bi:arrow-return-left"
        >
          More Work
        </LinkedIcon>
      </Link>
    </>
  );
};

const WorkContent = ({ work, note }: WorkContentProps): JSX.Element => {
  return (
    <>
      <h4 className="page-content-header">
        {work.title} {work.subtitle && `(${work.subtitle})`}
      </h4>
      <aside className="small text-muted mb-3">{work.description}</aside>
      <HtmlWrapper className="my-2">{note}</HtmlWrapper>
      <Link href="/work" passHref>
        <LinkedIcon
          className="link-muted link-more-work"
          iconId="bi:arrow-return-left"
        >
          More Work
        </LinkedIcon>
      </Link>
    </>
  );
};

const WorkPage = ({ work, note, relatedWorks }: WorkPageProps): JSX.Element => {
  return (
    <PageLayout title={work.title} description={excerpt(note)}>
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
    </PageLayout>
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
