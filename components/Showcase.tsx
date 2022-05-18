import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import MediaWidget from "../components/MediaWidget";
import media, { MediaItem } from "../data/showcase";

const Showcase = (): JSX.Element => {
  const [hoveredWidgetId, setHoveredWidgetId] = useState<number | null>(null);

  const getWidgetStyle = (widgetId: number): {} => ({
    filter:
      hoveredWidgetId === null || hoveredWidgetId === widgetId
        ? "brightness(100%)"
        : "brightness(50%)",
  });

  const getShowcaseLinkClass = (widgetId: number): string => {
    return hoveredWidgetId !== widgetId ? "link-muted" : "showcase-link";
  };

  return (
    <Row xs={1} lg={2} xl={3} className="g-2 mb-4">
      {media.map((item: MediaItem, idx: number) => {
        return (
          <Col key={idx}>
            <MediaWidget
              className="showcase"
              src={item.src}
              onMouseEnter={() => setHoveredWidgetId(idx)}
              onMouseLeave={() => setHoveredWidgetId(null)}
              style={getWidgetStyle(idx)}
            />

            <aside className="small">
              <a className={getShowcaseLinkClass(idx)} href={item.path}>
                {item.title}
              </a>{" "}
              <span className="text-muted">({item.artist})</span>
            </aside>
          </Col>
        );
      })}
    </Row>
  );
};

export default Showcase;
