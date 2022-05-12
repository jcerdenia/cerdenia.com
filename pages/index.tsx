import PageLayout from "../components/PageLayout";
import Showcase from "../components/Showcase";
import { parseMarkdownInline } from "../utils/markdown";
import { NewsItem } from "../data/interfaces";
import announcements from "../data/news/announcements.json";
import LatestNews from "../components/LatestNews";

interface HomePageProps {
  latestNews: NewsItem[];
}

const HomePage = ({ latestNews }: HomePageProps): JSX.Element => {
  return (
    <PageLayout exact title="Joshua Cerdenia, Composer">
      <Showcase />
      <LatestNews news={latestNews} />
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<{ props: HomePageProps }> => {
  const latestNews = announcements
    .slice(announcements.length - 3, announcements.length)
    .reverse()
    .map((announcement: NewsItem) => {
      announcement.blurb = announcement.blurb
        ? parseMarkdownInline(announcement.blurb)
        : null;

      return announcement;
    });

  return {
    props: { latestNews },
  };
};

export default HomePage;
