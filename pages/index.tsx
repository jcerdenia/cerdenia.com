import LinkedIcon from "../components/LinkedIcon";
import PageLayout from "../components/PageLayout";
import Showcase from "../components/Showcase";
import announcements from "../data/news/announcements.json";

interface NewsItem {
  title: string;
  url: string;
}

const HomePage = (): JSX.Element => {
  return (
    <PageLayout exact title="Joshua Cerdenia, Composer">
      <Showcase />
      <section className="my-3">
        <h4>Latest News</h4>
        <ul>
          {announcements
            .slice(announcements.length - 3, announcements.length)
            .reverse()
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
