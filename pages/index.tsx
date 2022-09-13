import { Container } from "react-bootstrap";

import Footer from "../components/Footer";
import HtmlWrapper from "../components/HtmlWrapper";
import LatestNews from "../components/LatestNews";
import PageLayout from "../components/PageLayout";
import Showcase from "../components/Showcase";
import Transition from "../components/Transition";
import meta from "../data/meta";
import useAppState from "../hooks/useAppState";
import { parseMarkdown } from "../lib/helpers";
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
    <PageLayout title={meta.title} exact>
      <Showcase limit={6} />
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
