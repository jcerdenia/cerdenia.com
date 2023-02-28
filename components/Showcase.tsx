import Link from "next/link";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import MediaWidget, { heights } from "../components/MediaWidget";
import { MediaItem } from "../data/featured-media";

interface ShowcaseProps {
  media: MediaItem[];
  columns?: number;
  limit?: number;
  itemHeight?: number;
}

const Showcase = ({
  media,
  columns = 3,
  limit = 6,
  itemHeight = heights.NORMAL,
}: ShowcaseProps): JSX.Element => {
  const [hoveredWidgetId, setHoveredWidgetId] = useState<number | null>(null);

  if (media.slice(0, limit + 1).find((m) => m.src.includes("soundcloud.com"))) {
    itemHeight = heights.SHORT;
  }

  const getWidgetStyle = (widgetId: number): {} => ({
    filter:
      hoveredWidgetId === null || hoveredWidgetId === widgetId
        ? "brightness(100%)"
        : "brightness(50%)",
  });

  return (
    <Row xs={1} lg={columns} className="g-2 mb-4">
      {media.slice(0, limit).map((item: MediaItem, idx: number) => {
        return (
          <Col key={idx}>
            <MediaWidget
              className="showcase"
              src={item.src}
              height={itemHeight}
              onMouseEnter={() => setHoveredWidgetId(idx)}
              onMouseLeave={() => setHoveredWidgetId(null)}
              style={getWidgetStyle(idx)}
            />

            <div className="mt-2 small">
              <Link href={item.path} passHref>
                <a className="showcase-link">{item.title}</a>
              </Link>{" "}
              {item.subtitle && <span>({item.subtitle})</span>}
            </div>

            {item.description && (
              <p className="small text-muted">{item.description}</p>
            )}
          </Col>
        );
      })}
    </Row>
  );
};

export { heights };

export default Showcase;
