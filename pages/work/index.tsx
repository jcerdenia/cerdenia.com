import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import { parseMarkdown } from "../../utils/markdown";

interface Work {
  title: string;
  subtitle: string;
  for: string;
  category: string;
  slug: string;
}

interface WorkHomePageProps {
  works: Work[];
}

const WorkHomePage = ({ works }: WorkHomePageProps): React.ReactElement => {
  const sections = {
    ORCHESTRA: "Orchestra & Large Ensemble",
    CHAMBER: "Chamber",
    VOCAL: "Art Song, Vocal Chamber & Choral",
    SOLO: "Solo Instrument with/without Piano",
  };

  return (
    <PageWrapper title="Work" description="List of compositions">
      <Row xs={1} lg={2}>
        {Object.entries(sections).map(([key, value]) => {
          return (
            <Col key={key} className="my-2">
              <h4>{value}</h4>
              {works
                .filter((work: Work) => work.category === key)
                .map((work: Work) => {
                  return (
                    <div key={work.slug} className="my-3">
                      <Link href={`/work/#under-construction`} passHref>
                        <a>
                          <strong>{work.title}</strong>
                        </a>
                      </Link>{" "}
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
