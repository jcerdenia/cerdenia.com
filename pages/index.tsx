import { Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import HtmlSection from "../components/HtmlSection";
import media, { MediaDataItem } from "../data/media";

const Home = (): React.ReactElement => {
  return (
    <PageWrapper
      exact
      title="Joshua Cerdenia, Composer"
      description="The online home of the music of Joshua Cerdenia"
    >
      <Row xs={1} lg={2} xl={3} className="g-1">
        {media.map(({ widget }: MediaDataItem, idx: number) => (
          <Col key={idx}>
            <HtmlSection className="widget">{widget}</HtmlSection>
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default Home;
