import { Container, Row, Col } from "react-bootstrap"
import media, { MediaDataItem } from "../data/media"

const MediaGrid = (): React.ReactElement => {
  return (
    <Container className="py-4">
      <Row xs={1} md={2} className="g-4">
        {media.map(({ title, widget, note }: MediaDataItem, idx) => (
          <Col key={idx}>
            <h5>{title}</h5>
            <section dangerouslySetInnerHTML={{ __html: widget }} />
            <div className="small text-muted">{note}</div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MediaGrid