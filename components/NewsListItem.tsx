import { Col, Row } from "react-bootstrap";

import type { NewsItem } from "../lib/interfaces";
import { formatDate, truncate } from "../lib/utils";
import HtmlWrapper from "./HtmlWrapper";

interface NewsListItemProps {
  className?: string;
  item: NewsItem;
  columnSpans?: [number, number];
  blurb?: boolean;
  blurbAsTitle?: boolean;
  source?: boolean;
  date?: boolean;
  truncated?: boolean;
}

const NewsListItem = ({
  className,
  item,
  columnSpans = [4, 8],
  blurb = true,
  source = true,
  date = true,
  truncated = false,
  blurbAsTitle = false,
}: NewsListItemProps): JSX.Element => {
  return (
    <Row className={`news-item my-3 ${className}`}>
      <Col lg={12} xl={columnSpans[0]}>
        <div className="small text-height-1 news-item-meta">
          {source ? <span className="text-bold">{item.source}</span> : null}

          {date ? (
            <span className="text-muted text-right news-item-date">
              {formatDate(item.date)}
            </span>
          ) : null}
        </div>
      </Col>

      <Col lg={12} xl={columnSpans[1]}>
        <a className="text-height-1" href={item.url}>
          {blurbAsTitle && item.blurb ? (
            <HtmlWrapper>{item.blurb}</HtmlWrapper>
          ) : truncated ? (
            truncate(item.title)
          ) : (
            item.title
          )}
        </a>
        {!blurbAsTitle && item.language && ` (${item.language})`}

        {blurb && !blurbAsTitle && item.blurb && (
          <HtmlWrapper className="small text-height-1" parent="aside">
            {item.blurb || '<div class="text-danger">Missing blurb</div>'}
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
