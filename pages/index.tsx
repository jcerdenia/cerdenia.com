import Head from "next/head";
import Showcase from "../components/Showcase";
import HtmlSection from "../components/HtmlSection";
import { markdownToHtml } from "../lib/markdown";

const Home = ({ bio }: HomePageProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Joshua Cerdenia Music</title>
      </Head>
      <Showcase id="media" />
      <div id="about" className="about-container">
        <h3 className="my-3">About</h3>
        <HtmlSection html={bio} />
      </div>
    </>
  );
};

export const getStaticProps = async (): Promise<{ props: HomePageProps }> => {
  return {
    props: {
      bio: markdownToHtml("data/bio-full.md"),
    },
  };
};

interface HomePageProps {
  bio: string;
}

export default Home;
