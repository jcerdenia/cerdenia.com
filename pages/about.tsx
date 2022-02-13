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
        <Col md={12} lg={5}>
          <div className="mb-4">
            <Image
              fluid
              className="headshot"
              src="/images/headshot-2.jpeg"
              alt="headshot"
            />
            <figcaption className="small text-muted">
              Photo by Rashidah De Vore
            </figcaption>
          </div>
        </Col>
        <Col md={12} lg={7}>
          <h3 className="mb-4">Biography</h3>
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
