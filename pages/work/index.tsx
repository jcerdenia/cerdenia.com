import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import { parseMarkdown } from "../../utils/markdown";
import categories from "../../data/work-categories";

export interface Work {
  title: string;
  subtitle?: string;
  for: string;
  description?: string;
  category: string;
  slug: string;
}

interface WorkHomePageProps {
  works: Work[];
}

const WorkHomePage = ({ works }: WorkHomePageProps): React.ReactElement => {
  return (
    <PageWrapper title="Work">
      <h4>Selected Work</h4>
      <Row xs={1} lg={2}>
        {Object.keys(categories).map((key: string) => {
          return (
            <Col key={key} className="my-2">
              <h6 className="d-flex align-items-center">
                {categories[key].display}
              </h6>
              {works
                .filter((work: Work) => work.category === key)
                .map((work: Work) => {
                  return (
                    <div key={work.slug} className="my-3">
                      <Link href={`/work/${work.slug}`}>{work.title}</Link>{" "}
                      {work.subtitle && `(${work.subtitle})`}{" "}
                      <span className="small text-muted">for {work.for}</span>
                    </div>
                  );
                })}
            </Col>
          );
        })}
      </Row>
    </PageWrapper>
  );
};

export const getStaticProps = async (): Promise<{
  props: WorkHomePageProps;
}> => {
  const fs = require("fs");
  const works: Work[] = fs
    .readdirSync(`${process.cwd()}/data/work`)
    .filter((fileName: string): boolean => fileName.endsWith(".md"))
    .map(
      (fileName: string): {} =>
        parseMarkdown(`data/work/${fileName}`, ["metadata"]).metadata
    );

  return {
    props: { works },
  };
};

export default WorkHomePage;
