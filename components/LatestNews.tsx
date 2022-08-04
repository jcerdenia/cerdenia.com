import LinkedIcon from "./LinkedIcon";
import { compareBy } from "../lib/utils";
import announcements from "../data/news/announcements.json";
import NewsListItem from "./NewsListItem";

const LatestNews = () => {
  return (
    <section className="my-3">
      <h5>Latest</h5>
      <div>
        {announcements
          .sort(compareBy("date"))
          .reverse()
          .slice(0, 3)
          .map((item, idx) => {
            return (
              <NewsListItem
                key={idx}
                item={item}
                columnSpans={[12, 12]}
                noSources
              />
            );
          })}
      </div>

      <LinkedIcon
        className="link-muted"
        iconId="bi:arrow-return-right"
        href="/news"
      >
        More News & Events
      </LinkedIcon>
    </section>
  );
};

export default LatestNews;
