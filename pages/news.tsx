import NewsListItem from "../components/NewsListItem";
import PageLayout from "../components/PageLayout";
import announcements from "../data/news/announcements.json";
import articles from "../data/news/articles.json";
import events from "../data/news/events.json";
import { NewsItem, NewsItemGroup } from "../lib/interfaces";
import { compareBy } from "../lib/utils";

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
    <PageLayout title="News & Events">
      {news.map((group) => {
        return (
          <section key={group.title} className="mb-4">
            <h5>{group.title}</h5>

            {group.items.map((item, idx) => {
              return (
                <NewsListItem key={idx} item={item} blurbs={!!group.blurbs} />
              );
            })}
          </section>
        );
      })}
    </PageLayout>
  );
};

export default NewsPage;
