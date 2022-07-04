import { Row, Col } from "react-bootstrap";
import PageLayout from "../../components/PageLayout";
import WorksList from "../../components/WorksList";
import WorkDetail from "../../components/WorkDetail";
import { parseMarkdown } from "../../lib/markdown";
import { excerpt } from "../../lib/utils";
import { Work } from "../../data/interfaces";

interface WorkPageProps {
  works: Work[];
  work: Work;
  note: string;
}

const WorkPage = ({ works, work, note }: WorkPageProps): JSX.Element => {
  return (
    <PageLayout title={work.title} description={excerpt(note)}>
      <Row>
        <Col md={12} lg={4} className="mb-4 lg-up">
          <WorksList
            works={works}
            activeKey={work.slug}
            activeGroupKey={work.category}
          />
        </Col>

        <Col md={12} lg={8} className="mb-4 work-content-container">
          <WorkDetail work={work} note={note} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticPaths = async () => {
  const fs = require("fs");

  const slugs: string[] = fs
    .readdirSync(`${process.cwd()}/data/works`)
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
  const fs = require("fs");
  const slug = context.params.slug;
  const dir = "/data/works";

  const { metadata: work, content: note }: any = parseMarkdown(
    `${dir}/${slug}.md`,
    ["metadata", "content"],
    (content) => {
      return content
        .replace("hide_related=false", "hide_related=true")
        .replace("show_teaser=true", "show_teaser=false")
        .replace("show_comments=true", "show_comments=false");
    }
  );

  const works: Work[] = fs
    .readdirSync(`${process.cwd()}/${dir}`)
    .filter((name: string) => name.endsWith(".md"))
    .map((name: string) => parseMarkdown(`${dir}/${name}`, ["metadata"]));

  return {
    props: { works, work, note },
  };
};

export default WorkPage;
