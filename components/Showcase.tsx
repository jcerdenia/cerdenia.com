import { Row, Col } from "react-bootstrap";
import HtmlSection from "./HtmlSection";
import media, { MediaDataItem } from "../data/media";

const Showcase = (): React.ReactElement => {
  return (
    <Row xs={1} lg={2} xl={3} className="g-1">
      {media.map(({ widget }: MediaDataItem, idx: number) => (
        <Col key={idx}>
          <HtmlSection className="widget" html={widget} />
        </Col>
      ))}
    </Row>
  );
};

export default Showcase;
