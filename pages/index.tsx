import { Container } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import Transition from "../components/Transition";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import HtmlWrapper from "../components/HtmlWrapper";
import useAppState from "../hooks/useAppState";
import { parseMarkdown } from "../lib/markdown";
import meta from "../data/meta";
import styles from "../styles/Home.module.css";

interface HomePageProps {
  featuredText: string;
}

const HomePageWithBackground = ({
  featuredText,
}: HomePageProps): JSX.Element => {
  return (
    <Transition>
      <Container className={styles.background} fluid>
        <PageLayout
          bodyClassName={styles.inside}
          title={meta.title}
          footer={false}
          transition={false}
          exact
        >
          <LatestNews />
        </PageLayout>
      </Container>

      <Container className="my-5">
        <HtmlWrapper className={styles.featuredText}>
          {featuredText}
        </HtmlWrapper>

        <Showcase limit={3} />
      </Container>

      <Footer />
    </Transition>
  );
};

const HomePage = (props: HomePageProps): JSX.Element => {
  const { enableHomeBackground } = useAppState();

  if (enableHomeBackground) {
    return <HomePageWithBackground {...props} />;
  }

  return (
    <PageLayout bodyClassName={styles.default} title={meta.title} exact>
      <Showcase limit={6} noMoreWorksLink />
      <LatestNews />
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<{ props: HomePageProps }> => {
  return {
    props: {
      featuredText: parseMarkdown("data/featured-text.md", ["content"]),
    },
  };
};

export default HomePage;
