import { Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import news, { NewsItem, NewsItemGroup } from "../data/news";

const News = (): React.ReactElement => {
  return (
    <PageWrapper title="News" description="Recent & Upcoming Events / Press">
      {news.map((group: NewsItemGroup) => {
        return (
          <div key={group.title} className="mb-4">
            <h3>{group.title}</h3>
            {group.items.map((item: NewsItem, idx: number) => (
              <Row key={idx} className="news-item my-3">
                <Col className="d-flex align-items-center" md={12} lg={4}>
                  <div className="text-muted small news-item-meta">
                    <span>
                      <strong>{item.source}</strong>
                    </span>
                    <span>{item.date}</span>
                  </div>
                </Col>
                <Col className="d-flex align-items-center" md={12} lg={8}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </Col>
              </Row>
            ))}
          </div>
        );
      })}
    </PageWrapper>
  );
};

export default News;
