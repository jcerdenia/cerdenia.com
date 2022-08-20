import { Col, Row } from "react-bootstrap";

import type { NewsItem } from "../lib/interfaces";
import { formatDate } from "../lib/utils";
import HtmlWrapper from "./HtmlWrapper";

interface NewsListItemProps {
  item: NewsItem;
  columnSpans?: [number, number];
  blurbs?: boolean;
  noSources?: boolean;
  noDates?: boolean;
}

const NewsListItem = ({
  item,
  columnSpans = [4, 8],
  blurbs = true,
  noSources = false,
  noDates = false,
}: NewsListItemProps): JSX.Element => {
  return (
    <Row className="news-item my-3">
      <Col lg={12} xl={columnSpans[0]}>
        <div className="small text-height-1 news-item-meta">
          {!noSources ? <span className="text-bold">{item.source}</span> : null}

          {!noDates ? (
            <span className="text-muted text-right news-item-date">
              {formatDate(item.date)}
            </span>
          ) : null}
        </div>
      </Col>

      <Col lg={12} xl={columnSpans[1]}>
        <a className="text-height-1" href={item.url}>
          {item.title}
        </a>
        {item.language && ` (${item.language})`}

        {blurbs && item.blurb && (
          <HtmlWrapper className="small text-height-1" parent="aside">
            {item.blurb}
          </HtmlWrapper>
        )}

        {item.location && (
          <aside className="small text-muted">{item.location}</aside>
        )}
      </Col>
    </Row>
  );
};

export default NewsListItem;
