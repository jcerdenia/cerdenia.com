import { Row, Col } from "react-bootstrap";
import PageLayout from "../../components/PageLayout";
import MediaWidget from "../../components/MediaWidget";
import WorksList from "../../components/WorksList";
import { parseMarkdown } from "../../utils/markdown";
import { Work } from "../../data/interfaces";

interface WorkHomePageProps {
  works: Work[];
}

const WorkHomePage = ({ works }: WorkHomePageProps): JSX.Element => {
  return (
    <PageLayout title="Works">
      <Row xs={1} lg={2}>
        <Col md={12} lg={4}>
          <WorksList works={works} />
        </Col>
        <Col md={12} lg={8}>
          <MediaWidget
            className="my-2"
            height={350}
            visual={false}
            src="https://api.soundcloud.com/playlists/690884643"
          />
          <MediaWidget
            className="my-2"
            height={350}
            visual={false}
            src="https://api.soundcloud.com/playlists/690843903"
          />
          <MediaWidget
            className="my-2"
            height={350}
            visual={false}
            src="https://api.soundcloud.com/playlists/690944991"
          />
        </Col>
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
    .map((fileName: string): {} | null => {
      return parseMarkdown(`data/works/${fileName}`, ["metadata"]).metadata;
    });

  return {
    props: { works },
  };
};

export default WorkHomePage;
