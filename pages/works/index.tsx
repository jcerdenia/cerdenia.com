import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../../components/PageLayout";
import { parseMarkdown } from "../../utils/markdown";
import categories from "../../data/work-categories";

export interface Work {
  title: string;
  subtitle?: string;
  for: string;
  year: number;
  description?: string;
  category: string;
  slug: string;
}

interface WorkHomePageProps {
  works: Work[];
}

const WorkHomePage = ({ works }: WorkHomePageProps): JSX.Element => {
  return (
    <PageLayout title="Works">
      <h4>Selected Works</h4>
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
                      <Link href={`/works/${work.slug}`}>{work.title}</Link>{" "}
                      {work.subtitle && `(${work.subtitle})`}{" "}
                      <span className="small text-muted">
                        for {work.for} ({work.year})
                      </span>
                    </div>
                  );
                })}
            </Col>
          );
        })}
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<{
  props: WorkHomePageProps;
}> => {
  const fs = require("fs");
  const works: Work[] = fs
    .readdirSync(`${process.cwd()}/data/works`)
    .filter((fileName: string): boolean => fileName.endsWith(".md"))
    .map(
      (fileName: string): {} | null =>
        parseMarkdown(`data/works/${fileName}`, ["metadata"]).metadata
    );

  return {
    props: { works },
  };
};

export default WorkHomePage;
