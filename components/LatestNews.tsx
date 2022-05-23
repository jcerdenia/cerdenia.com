import HtmlWrapper from "./HtmlWrapper";
import LinkedIcon from "./LinkedIcon";
import { NewsItem } from "../data/interfaces";
import { compareBy } from "../helpers/utils";
import announcements from "../data/news/announcements.json";

const LatestNews = () => {
  return (
    <section className="my-3">
      <h5>Latest</h5>
      <div>
        {announcements
          .sort(compareBy("date"))
          .reverse()
          .slice(0, 3)
          .map((item: NewsItem, idx: number) => {
            return (
              <div key={idx} className="my-2">
                <a href={item.url}>{item.title}</a>
                {item.language ? ` (${item.language})` : null}

                {item.blurb ? (
                  <HtmlWrapper className="small text-muted" parent="aside">
                    {item.blurb}
                  </HtmlWrapper>
                ) : null}
              </div>
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
