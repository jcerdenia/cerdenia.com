import Head from "next/head";
import { useRouter } from "next/router";
import { Row, Col, Image } from "react-bootstrap";
import { markdownToHtml } from "../lib/markdown";

interface AboutPageProps {
  bio: string;
}

const About = ({ bio }: AboutPageProps): React.ReactElement => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About: Joshua Cerdenia Music</title>
      </Head>
      <div className="about-container">
        <Row xs={1} xl={2}>
          <Col xl={5}>
            <div className="mb-4">
              <Image
                className="headshot shadowed"
                src="images/headshot.jpg"
                onClick={() => router.push("/images/headshot.jpg")}
                alt="headshot"
                rounded
                fluid
              />
              <figcaption className="small text-muted">
                Photo by Rashidah De Vore
              </figcaption>
            </div>
          </Col>
          <Col xl={7}>
            <section dangerouslySetInnerHTML={{ __html: bio }} />
          </Col>
        </Row>
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
