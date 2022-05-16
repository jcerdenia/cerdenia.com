import { useRouter } from "next/router";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../../components/PageLayout";
import MediaWidget from "../../components/MediaWidget";
import WorksList from "../../components/WorksList";
import { parseMarkdown } from "../../utils/markdown";
import { Work } from "../../data/interfaces";
import playlists from "../../data/playlists";

interface WorksHomePageProps {
  works: Work[];
}

const WorksHomePage = ({ works }: WorksHomePageProps): JSX.Element => {
  const router = useRouter();
  const activeGroup = router.query.q as string;

  useEffect(() => {
    // Clean up URL query params after page loads.
    if (router.query.q?.length) {
      router.replace("/works", undefined, { shallow: true });
    }
  }, [router]);

  return (
    <PageLayout title="Works">
      <Row xs={1} lg={2}>
        <Col md={12} lg={4}>
          <WorksList works={works} activeGroupKey={activeGroup} />
        </Col>
        <Col md={12} lg={8}>
          <section className="playlist-container">
            <h6>Playlists</h6>
            <Row xs={1} xl={2}>
              {playlists.map((url: string, idx: number) => {
                return (
                  <Col key={idx}>
                    <MediaWidget className="my-2" height={315} src={url} />
                  </Col>
                );
              })}
            </Row>
          </section>
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<{
  props: WorksHomePageProps;
}> => {
  const fs = require("fs");

  const works: Work[] = fs
    .readdirSync(`${process.cwd()}/data/works`)
    .filter((fileName: string): boolean => fileName.endsWith(".md"))
    .map((fileName: string): {} | null => {
      return parseMarkdown(`data/works/${fileName}`, ["metadata"]).metadata;
    });

  return {
    props: { works },
  };
};

export default WorksHomePage;
