import Head from "next/head";
import { Container, Image } from "react-bootstrap";
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
        <Container className="headshot-container">
          <Image
            className="shadowed"
            src="images/headshot.jpg"
            alt="headshot"
            rounded
            fluid
          />
          <figcaption className="small text-muted">
            Photo by Rashidah De Vore
          </figcaption>
        </Container>
        <section className="mt-4" dangerouslySetInnerHTML={{ __html: bio }} />
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
