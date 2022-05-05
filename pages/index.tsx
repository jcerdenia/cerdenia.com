import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import MediaWidget from "../components/MediaWidget";
import media, { MediaItem } from "../data/showcase";

const HomePage = (): JSX.Element => {
  const [hoveredWidgetId, setHoveredWidgetId] = useState<number | null>(null);

  const decideWidgetStyle = (widgetId: number): {} => ({
    filter:
      hoveredWidgetId === null || hoveredWidgetId === widgetId
        ? "brightness(100%)"
        : "brightness(50%)",
  });

  const decideShowcaseLinkClass = (widgetId: number): string => {
    return hoveredWidgetId !== widgetId ? "link-muted" : "showcase-link";
  };

  return (
    <PageLayout exact title="Joshua Cerdenia, Composer">
      <Row xs={1} lg={2} xl={3} className="g-2">
        {media.map((item: MediaItem, idx: number) => (
          <Col className="showcase-container" key={idx}>
            <MediaWidget
              className="showcase"
              src={item.src}
              onMouseEnter={() => setHoveredWidgetId(idx)}
              onMouseLeave={() => setHoveredWidgetId(null)}
              style={decideWidgetStyle(idx)}
            />
            <p className="small">
              <a className={decideShowcaseLinkClass(idx)} href={item.path}>
                {item.title}
              </a>
            </p>
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export default HomePage;
