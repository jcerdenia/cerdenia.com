import { useRouter } from "next/router";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import MediaWidget from "../../components/MediaWidget";
import PageLayout from "../../components/PageLayout";
import WorksList from "../../components/WorksList";
import playlists from "../../data/playlists";
import type { Work } from "../../lib/interfaces";
import { parseMarkdown } from "../../lib/markdown";

interface WorksHomePageProps {
  works: Work[];
}

const WorksHomePage = ({ works }: WorksHomePageProps): JSX.Element => {
  const router = useRouter();
  const activeGroup = router.query.category as string;

  useEffect(() => {
    // Clean up URL query params after page loads.
    if (router.query.category?.length) {
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
            <h6 className="text-bold">Playlists</h6>

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
  const dir = "/data/works";

  const works: Work[] = fs
    .readdirSync(`${process.cwd()}/${dir}`)
    .filter((name: string) => name.endsWith(".md"))
    .map((name: string) => parseMarkdown(`${dir}/${name}`, ["metadata"]));

  return {
    props: { works },
  };
};

export default WorksHomePage;
