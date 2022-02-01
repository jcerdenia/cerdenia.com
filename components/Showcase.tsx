import { Row, Col } from "react-bootstrap";
import HtmlSection from "./HtmlSection";
import media, { MediaDataItem } from "../data/media";

const Showcase = ({ id }: ShowcaseProps): React.ReactElement => {
  return (
    <div id={id} className="showcase-container">
      <Row xs={1} lg={2} xl={3} className="g-1">
        {media.map(({ widget, center, note }: MediaDataItem, idx: number) => (
          <Col key={idx}>
            <div
              className="widget-container"
              style={{ alignItems: center ? "center" : null }}
            >
              <HtmlSection className="widget" html={widget} />
              {note && <div className="small text-muted">{note}</div>}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

interface ShowcaseProps {
  id?: string;
}

export default Showcase;
