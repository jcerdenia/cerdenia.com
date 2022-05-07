import PageLayout from "../components/PageLayout";
import Showcase from "../components/Showcase";

const HomePage = (): JSX.Element => {
  return (
    <PageLayout exact title="Joshua Cerdenia, Composer">
      <Showcase />
    </PageLayout>
  );
};

export default HomePage;
