import { Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import MediaWidget from "../components/MediaWidget";
import media, { MediaDataItem } from "../data/showcase";

const HomePage = (): React.ReactElement => {
  return (
    <PageWrapper
      exact
      title="Joshua Cerdenia, Composer"
      description="The online home of the music of Joshua Cerdenia"
    >
      <Row xs={1} lg={2} xl={3} className="g-1">
        {media.map(({ url, type }: MediaDataItem, idx: number) => (
          <Col key={idx} className="showcase">
            <MediaWidget url={url} type={type} />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default HomePage;
