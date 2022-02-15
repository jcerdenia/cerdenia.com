import PageWrapper from "../components/PageWrapper";
import Showcase from "../components/Showcase";

const Home = (): React.ReactElement => {
  return (
    <PageWrapper
      title="Joshua Cerdenia, Composer"
      description="The online home of the music of Joshua Cerdenia"
    >
      <Showcase />
    </PageWrapper>
  );
};

export default Home;
