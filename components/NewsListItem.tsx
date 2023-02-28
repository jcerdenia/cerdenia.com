import { Col, Row } from "react-bootstrap";

import type { NewsItem } from "../lib/interfaces";
import { formatDate, truncate } from "../lib/utils";
import HtmlWrapper from "./HtmlWrapper";

interface NewsListItemProps {
  item: NewsItem;
  columnSpans?: [number, number];
  blurb?: boolean;
  blurbAsTitle?: boolean;
  sources?: boolean;
  dates?: boolean;
  truncated?: boolean;
}

const NewsListItem = ({
  item,
  columnSpans = [4, 8],
  blurb = true,
  sources = true,
  dates = true,
  truncated = false,
  blurbAsTitle = false,
}: NewsListItemProps): JSX.Element => {
  const getTitle = (): JSX.Element | string => {
    if (blurbAsTitle) {
      return (
        <HtmlWrapper>
          {item.blurb || '<span class="text-danger">No blurb</span>'}
        </HtmlWrapper>
      );
    }

    return truncated ? truncate(item.title) : item.title;
  };

  return (
    <Row className="news-item my-3">
      <Col lg={12} xl={columnSpans[0]}>
        <div className="small text-height-1 news-item-meta">
          {sources ? <span className="text-bold">{item.source}</span> : null}

          {dates ? (
            <span className="text-muted text-right news-item-date">
              {formatDate(item.date)}
            </span>
          ) : null}
        </div>
      </Col>

      <Col lg={12} xl={columnSpans[1]}>
        <a className="text-height-1" href={item.url}>
          {getTitle()}
        </a>
        {!blurbAsTitle && item.language && ` (${item.language})`}

        {blurb && !blurbAsTitle && item.blurb && (
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
