import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import MediaWidget from "../components/MediaWidget";
import media from "../data/showcase";

const HomePage = (): React.ReactElement => {
  const [hoveredWidgetId, setHoveredWidgetId] = useState(null);

  useEffect(() => {
    for (let i = 0; i < media.length; i++) {
      const widgetId = `widget-${i}`;
      const widgetEl = document.getElementById(widgetId);
      widgetEl.style.transition = "300ms";

      if (hoveredWidgetId && widgetId !== hoveredWidgetId) {
        widgetEl.style.filter = "brightness(50%)";
      } else {
        widgetEl.style.filter = "brightness(100%)";
      }
    }
  }, [hoveredWidgetId]);

  return (
    <PageWrapper exact title="Joshua Cerdenia, Composer">
      <Row xs={1} lg={2} xl={3} className="g-1">
        {media.map((src: string, idx: number) => (
          <Col className="showcase-container" key={idx}>
            <MediaWidget
              className="showcase"
              id={`widget-${idx}`}
              src={src}
              onMouseEnter={() => setHoveredWidgetId(`widget-${idx}`)}
              onMouseLeave={() => setHoveredWidgetId(null)}
            />
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
};

export default HomePage;
