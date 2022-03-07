import { Row, Col } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import news, { NewsItem, NewsItemGroup } from "../data/news";

const NewsPage = (): JSX.Element => {
  return (
    <PageLayout title="News">
      {news.map((group: NewsItemGroup) => {
        return (
          <div key={group.title} className="mb-4">
            <h4>{group.title}</h4>
            {group.items.map((item: NewsItem, idx: number) => (
              <Row key={idx} className="news-item my-3">
                <Col className="d-flex align-items-center" md={12} lg={4}>
                  <div className="small news-item-meta">
                    <span>
                      <strong>{item.source}</strong>
                    </span>
                    <span className="text-muted">{item.date}</span>
                  </div>
                </Col>
                <Col className="d-flex align-items-center" md={12} lg={8}>
                  <a href={item.url}>{item.title}</a>
                </Col>
              </Row>
            ))}
          </div>
        );
      })}
    </PageLayout>
  );
};

export default NewsPage;
