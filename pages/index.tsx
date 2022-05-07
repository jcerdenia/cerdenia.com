import Link from "next/link";
import LinkedIcon from "../components/LinkedIcon";
import PageLayout from "../components/PageLayout";
import Showcase from "../components/Showcase";
import { announcements, NewsItem } from "../data/news";

const HomePage = (): JSX.Element => {
  return (
    <PageLayout exact title="Joshua Cerdenia, Composer">
      <Showcase />
      <section className="mt-3">
        <h5>Latest News</h5>
        <ul>
          {announcements.items
            .slice(0, 3)
            .map((item: NewsItem, idx: number) => {
              return (
                <li key={idx}>
                  <a href={item.url}>{item.title}</a>{" "}
                </li>
              );
            })}
        </ul>
        <Link href="/news" passHref>
          <LinkedIcon
            className="link-muted link-more-work"
            iconId="bi:arrow-return-right"
          >
            More News & Events
          </LinkedIcon>
        </Link>
      </section>
    </PageLayout>
  );
};

export default HomePage;
