import LinkedIcon from "../components/LinkedIcon";
import PageLayout from "../components/PageLayout";
import Showcase from "../components/Showcase";
import { announcements, NewsItem } from "../data/news";

const HomePage = (): JSX.Element => {
  return (
    <PageLayout exact title="Joshua Cerdenia, Composer">
      <Showcase />
      <section className="my-3">
        <h4>Latest News</h4>
        <ul>
          {announcements.items
            .slice(0, 3)
            .map((item: NewsItem, idx: number) => {
              return (
                <li className="my-1" key={idx}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
        </ul>
        <LinkedIcon
          className="link-muted"
          iconId="bi:arrow-return-right"
          href="/news"
        >
          More News & Events
        </LinkedIcon>
      </section>
    </PageLayout>
  );
};

export default HomePage;
