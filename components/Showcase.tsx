import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import MediaWidget, { heights } from "../components/MediaWidget";
import { MediaItem } from "../data/featured-media";
import useInnerWidth from "../hooks/useInnerWidth";
import breakpoints from "../lib/breakpoints";

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
  const [relativeColumns, setRelativeColumns] = useState<number>(columns);
  const [heightsArray, setHeightsArray] = useState<number[]>([]);
  const innerWidth = useInnerWidth();

  useEffect(() => {
    const _relativeColumns = innerWidth >= breakpoints.LG ? columns : 1;
    setRelativeColumns(_relativeColumns);
  }, [innerWidth, columns]);

  useEffect(() => {
    const _heightsArray: number[] = [];
    let i = 0;

    while (i < limit) {
      const indices = new Array(relativeColumns)
        .fill(i)
        .map((val, idx) => val + idx);
      const row = media.filter((_, idx) => indices.includes(idx));
      const hasSpotify = row.find((r) => r.src.includes("spotify.com"));

      indices.forEach((idx) => {
        _heightsArray[idx] = hasSpotify ? heights.SHORT : itemHeight;
      });

      i += relativeColumns;
    }

    setHeightsArray(_heightsArray);
  }, [relativeColumns, itemHeight, media, limit]);

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
              height={heightsArray[idx]}
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
