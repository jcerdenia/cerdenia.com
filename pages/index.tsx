import { Container } from "react-bootstrap";

import Footer from "../components/Footer";
import HtmlWrapper from "../components/HtmlWrapper";
import LatestNews from "../components/LatestNews";
import PageLayout from "../components/PageLayout";
import Showcase from "../components/Showcase";
import Transition from "../components/Transition";
import featuredWorks from "../data/featured-works";
import meta from "../data/meta";
import { parseMarkdown } from "../lib/helpers";
import styles from "../styles/Home.module.css";

interface HomePageProps {
  featuredText: string;
}

const HomePage = ({ featuredText }: HomePageProps): JSX.Element => {
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

          <div className={styles.imageCredit}>
            Photo courtesy of The Florida Orchestra
          </div>
        </PageLayout>
      </Container>

      <Container className="my-5">
        <HtmlWrapper className={styles.featuredText}>
          {featuredText}
        </HtmlWrapper>

        <Showcase media={featuredWorks} limit={3} />
      </Container>

      <Footer />
    </Transition>
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
