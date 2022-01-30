import Head from "next/head";
import { markdownToHtml } from "../lib/markdown";

interface AboutPageProps {
  bio: string;
}

const About = ({ bio }: AboutPageProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>About: Joshua Cerdenia Music</title>
      </Head>
      <div className="about-container">
        <section dangerouslySetInnerHTML={{ __html: bio }} />
      </div>
    </>
  );
};

export const getStaticProps = async (): Promise<{ props: AboutPageProps }> => {
  return {
    props: {
      bio: markdownToHtml("data/bio-full.md"),
    },
  };
};

export default About;
