import { Row, Col } from "react-bootstrap";
import HtmlWrapper from "../components/HtmlWrapper";
import PageLayout from "../components/PageLayout";
import { parseMarkdownInline } from "../utils/markdown";
import announcements from "../data/news/announcements.json";
import articles from "../data/news/articles.json";
import events from "../data/news/events.json";

interface NewsPageProps {
  news: NewsItemGroup[];
}

interface NewsItem {
  title: string;
  url: string;
  source: string;
  date: string;
  location?: string;
  blurb?: string;
}

interface NewsItemGroup {
  title: string;
  items: NewsItem[];
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
                <Col className="d-flex" lg={12} xl={3}>
                  <div className="small news-item-line news-item-meta">
                    <span>
                      <strong>{item.source}</strong>
                    </span>
                    <span className="text-muted text-right news-item-date">
                      {item.date}
                    </span>
                  </div>
                </Col>
                <Col lg={12} xl={9}>
                  <a className="news-item-line" href={item.url}>
                    {item.title}
                  </a>
                  {item.blurb && (
                    <HtmlWrapper
                      className="small news-item-line"
                      parent="aside"
                    >
                      {item.blurb}
                    </HtmlWrapper>
                  )}
                  {item.location && (
                    <aside className="small text-muted">{item.location}</aside>
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
  const isRecent = (event: NewsItem) => {
    return event.date.split(" ").reverse()[0] >= "2021";
  };

  const news: NewsItemGroup[] = [
    {
      title: "Recent & Upcoming Events",
      items: events
        .filter(isRecent)
        .map((event: NewsItem) => {
          event.blurb = event.blurb
            ? parseMarkdownInline(event.blurb)
            : undefined;
          return event;
        })
        .reverse(),
    },
    {
      title: "Recent Announcements",
      items: announcements.filter(isRecent).reverse(),
    },
    {
      title: "Articles, Reviews & Interviews",
      items: articles.reverse(),
    },
  ];

  return {
    props: { news },
  };
};

export default NewsPage;
