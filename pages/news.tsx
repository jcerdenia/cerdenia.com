import { Row, Col } from "react-bootstrap";
import HtmlWrapper from "../components/HtmlWrapper";
import PageLayout from "../components/PageLayout";
import { NewsItem, NewsItemGroup } from "../data/interfaces";
import { compareBy, formatDate } from "../helpers/utils";
import announcements from "../data/news/announcements.json";
import articles from "../data/news/articles.json";
import events from "../data/news/events.json";

const NewsPage = (): JSX.Element => {
  const isRecent = (item: NewsItem) => {
    // Return true if the item is dated from at least the previous year:
    return parseInt(item.date.slice(0, 4)) >= new Date().getFullYear() - 1;
  };

  const news: NewsItemGroup[] = [
    {
      title: "Recent & Upcoming Events",
      items: events.filter(isRecent).sort(compareBy("date")).reverse(),
      blurbs: true,
    },
    {
      title: "Recent Announcements",
      items: announcements.filter(isRecent).sort(compareBy("date")).reverse(),
    },
    {
      title: "Articles, Reviews & Interviews",
      items: articles.sort(compareBy("date")).reverse(),
    },
  ];

  return (
    <PageLayout title="News">
      {news.map((group: NewsItemGroup) => {
        return (
          <section key={group.title} className="mb-4">
            <h5>{group.title}</h5>
            {group.items.map((item: NewsItem, idx: number) => (
              <Row key={idx} className="news-item my-3">
                <Col lg={12} xl={4}>
                  <div className="small text-height-1 news-item-meta">
                    <span className="text-bold">{item.source}</span>
                    <span className="text-muted text-right news-item-date">
                      {formatDate(item.date)}
                    </span>
                  </div>
                </Col>

                <Col lg={12} xl={8}>
                  <a className="text-height-1" href={item.url}>
                    {item.title}
                  </a>
                  {item.language && ` (${item.language})`}

                  {group.blurbs && item.blurb && (
                    <HtmlWrapper className="small text-height-1" parent="aside">
                      {item.blurb}
                    </HtmlWrapper>
                  )}

                  {item.location && (
                    <aside className="small text-muted">{item.location}</aside>
                  )}
                </Col>
              </Row>
            ))}
          </section>
        );
      })}
    </PageLayout>
  );
};

export default NewsPage;
