import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";

import announcements from "../data/news/announcements.json";
import { compareBy } from "../lib/utils";
import NewsListItem from "./NewsListItem";

const LatestNews = (): JSX.Element => {
  return (
    <Row className="my-3">
      <Col lg={12}>
        <h5>Latest</h5>

        <div className="my-4">
          {announcements
            .filter((item) => !item.skipPreview)
            .sort(compareBy("date"))
            .reverse()
            .slice(0, 3)
            .map((item) => {
              return (
                <NewsListItem
                  key={item.url}
                  item={item}
                  columnSpans={[12, 12]}
                  date={true}
                  source={false}
                  blurbAsTitle
                />
              );
            })}
        </div>

        <Link passHref href="/news">
          <Button className="media-button" variant="outline-secondary">
            More News & Events
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default LatestNews;
