import { Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import news, { NewsItem, NewsItemGroup } from "../data/news";

const NewsPage = (): React.ReactElement => {
  return (
    <PageWrapper title="News">
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

export default NewsPage;
