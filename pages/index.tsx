import Head from "next/head";
import Showcase from "../components/Showcase";

const Home = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Joshua Cerdenia Music</title>
      </Head>
      <Showcase />
    </>
  );
};

export default Home;
