import { Row, Col } from "react-bootstrap";
import HtmlWrapper from "../components/HtmlWrapper";
import PageLayout from "../components/PageLayout";
import news, { NewsItem, NewsItemGroup } from "../data/news";
import { parseMarkdownInline } from "../utils/markdown";

interface NewsPageProps {
  news: NewsItemGroup[];
}

const NewsPage = ({ news }: NewsPageProps): JSX.Element => {
  return (
    <PageLayout title="News">
      {news.map((group: NewsItemGroup) => {
        return (
          <main key={group.title} className="mb-5">
            <h4>{group.title}</h4>
            {group.items.map((item: NewsItem, idx: number) => (
              <Row key={idx} className="news-item my-3">
                <Col className="d-flex" lg={12} xl={4}>
                  <div className="small news-item-line news-item-meta">
                    <span>
                      <strong>{item.source}</strong>
                    </span>
                    <span className="text-muted">{item.date}</span>
                  </div>
                </Col>
                <Col lg={12} xl={8}>
                  <a className="news-item-line" href={item.url}>
                    {item.title}
                  </a>
                  {item.blurb && (
                    <HtmlWrapper className="small" parent="aside">
                      {item.blurb}
                    </HtmlWrapper>
                  )}
                </Col>
              </Row>
            ))}
          </main>
        );
      })}
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<{ props: NewsPageProps }> => {
  news.forEach((group: NewsItemGroup) => {
    group.items.forEach((item: NewsItem) => {
      if (item.blurb) {
        item.blurb = parseMarkdownInline(item.blurb);
      }
    });
  });

  return {
    props: { news },
  };
};

export default NewsPage;
