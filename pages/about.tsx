import Head from "next/head";
import { Row, Col, Image } from "react-bootstrap";
import HtmlSection from "../components/HtmlSection";
import { markdownToHtml } from "../lib/markdown";

const About = ({ bio }: AboutPageProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>About • Joshua Cerdenia Music</title>
      </Head>
      <Row xs={1} lg={2}>
        <Col>
          <div className="mb-4">
            <Image fluid src="/images/headshot.jpg" alt="headshot" />
            <figcaption className="small text-muted">
              Photo by Rashidah De Vore
            </figcaption>
          </div>
        </Col>
        <Col>
          <HtmlSection html={bio} />
        </Col>
      </Row>
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

interface AboutPageProps {
  bio: string;
}

export default About;
