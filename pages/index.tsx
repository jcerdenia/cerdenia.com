import { Container } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import useAppState from "../hooks/useAppState";
import meta from "../data/meta";
import styles from "../styles/Home.module.css";

const HomePageWithBackground = (): JSX.Element => {
  return (
    <>
      <Container className={styles.background} fluid>
        <PageLayout
          bodyClassName={styles.inside}
          title={meta.title}
          footer={false}
          exact
        >
          <LatestNews />
        </PageLayout>
      </Container>

      <Container className="my-5">
        <h6 className="text-bold mb-3">Watch</h6>
        <Showcase limit={3} />
      </Container>

      <Footer />
    </>
  );
};

const HomePage = (): JSX.Element => {
  const { enableHomeBackground } = useAppState();

  // This is currently set to false.
  if (enableHomeBackground) {
    return <HomePageWithBackground />;
  }

  return (
    <PageLayout bodyClassName={styles.default} title={meta.title} exact>
      <Showcase limit={6} />
      <LatestNews />
    </PageLayout>
  );
};

export default HomePage;
