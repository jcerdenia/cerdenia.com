import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import MediaWidget from "../components/MediaWidget";
import media from "../data/showcase";

const HomePage = (): React.ReactElement => {
  const [hoveredWidgetId, setHoveredWidgetId] = useState<number | null>(null);

  const decideWidgetStyle = (widgetId: number): {} => ({
    filter:
      !hoveredWidgetId || hoveredWidgetId === widgetId
        ? "brightness(100%)"
        : "brightness(50%)",
  });

  return (
    <PageLayout exact title="Joshua Cerdenia, Composer">
      <Row xs={1} lg={2} xl={3} className="g-1">
        {media.map((src: string, idx: number) => (
          <Col className="showcase-container" key={idx}>
            <MediaWidget
              className="showcase"
              src={src}
              onMouseEnter={() => setHoveredWidgetId(idx)}
              onMouseLeave={() => setHoveredWidgetId(null)}
              style={decideWidgetStyle(idx)}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export default HomePage;
