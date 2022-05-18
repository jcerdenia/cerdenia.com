import HtmlWrapper from "./HtmlWrapper";
import LinkedIcon from "./LinkedIcon";
import { NewsItem } from "../data/interfaces";

interface LatestNewsProps {
  news: NewsItem[];
}

const LatestNews = ({ news }: LatestNewsProps) => {
  return (
    <section className="my-3">
      <h5>Latest News</h5>
      <div>
        {news.map((item: NewsItem, idx: number) => {
          return (
            <div key={idx} className="my-2">
              <a href={item.url}>{item.title}</a>
              {item.blurb && (
                <HtmlWrapper className="small text-muted" parent="aside">
                  {item.blurb}
                </HtmlWrapper>
              )}
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
