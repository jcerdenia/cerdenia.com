import { Col, Row } from "react-bootstrap";

import PageLayout from "../../components/PageLayout";
import WorkDetail from "../../components/WorkDetail";
import WorksList from "../../components/WorksList";
import { getWorkFilePaths, parseMarkdown } from "../../lib/helpers";
import type { Work } from "../../lib/interfaces";
import { excerpt } from "../../lib/utils";

interface WorkPageProps {
  works: Work[];
  work: Work;
  note: string;
}

const WorkPage = ({ works, work, note }: WorkPageProps): JSX.Element => {
  return (
    <PageLayout
      title={work.title}
      description={excerpt(note)}
      transition={false}
    >
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
  const slugs: string[] = getWorkFilePaths(true).map((fileName: string) =>
    fileName.replace(".md", "")
  );

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
  const works: Work[] = getWorkFilePaths().map((path: string) =>
    parseMarkdown(path, ["metadata"])
  );

  const { metadata: work, content: note }: any = parseMarkdown(
    `/data/works/${context.params.slug}.md`,
    ["metadata", "content"],
    (content) => {
      return content
        .replace("hide_related=false", "hide_related=true")
        .replace("show_teaser=true", "show_teaser=false")
        .replace("show_comments=true", "show_comments=false")
        .replace("show_user=true", "show_user=false");
    }
  );

  return {
    props: { works, work, note },
  };
};

export default WorkPage;
