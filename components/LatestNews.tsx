import Link from "next/link";
import { Button } from "react-bootstrap";

import announcements from "../data/news/announcements.json";
import { compareBy } from "../lib/utils";
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

      <Link passHref href="/news">
        <Button className="media-button" variant="outline-secondary" size="sm">
          More News & Events
        </Button>
      </Link>
    </section>
  );
};

export default LatestNews;
