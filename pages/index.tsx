import PageLayout from "../components/PageLayout";
import Showcase from "../components/Showcase";
import LatestNews from "../components/LatestNews";
import meta from "../data/meta";

const HomePage = (): JSX.Element => {
  return (
    <PageLayout title={meta.title} exact>
      <Showcase />
      <LatestNews />
    </PageLayout>
  );
};

export default HomePage;
