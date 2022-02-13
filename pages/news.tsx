import { Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import news, { NewsItem, NewsItemGroup } from "../data/news";

const News = (): React.ReactElement => {
  return (
    <PageWrapper title="News • Joshua Cerdenia Music">
      {news.map((group: NewsItemGroup) => {
        return (
          <div key={group.title} className="mb-4">
            <h3>{group.title}</h3>
            {group.items.map((item: NewsItem, idx: number) => (
              <Row key={idx} className="my-3">
                <Col xs={12} md={4}>
                  <span className="text-muted small">
                    <strong>{item.source}</strong> • {item.date}
                  </span>
                </Col>
                <Col xs={12} md={8}>
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
