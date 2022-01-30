import { Container, Row, Col } from "react-bootstrap";
import media, { MediaDataItem } from "../data/media";

const Showcase = (): React.ReactElement => {
  return (
    <Container className="py-4">
      <Row xs={1} lg={2} xl={3} className="g-4">
        {media.map(({ widget, center, note }: MediaDataItem, idx: number) => (
          <Col key={idx}>
            <div
              className="widget-container"
              style={{ alignItems: center ? "center" : null }}
            >
              <section
                className="widget"
                dangerouslySetInnerHTML={{ __html: widget }}
              />
              {note && <div className="small text-muted">{note}</div>}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Showcase;
