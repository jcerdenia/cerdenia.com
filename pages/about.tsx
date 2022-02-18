import { Row, Col, Image } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import HtmlSection from "../components/HtmlSection";
import { parseMarkdown } from "../utils/markdown";

interface AboutPageProps {
  bio: string;
}

const About = ({ bio }: AboutPageProps): React.ReactElement => {
  return (
    <PageWrapper
      title="About"
      description={bio.slice(0, bio.indexOf(". ") + 1).replace(/<(.*?)>/g, "")}
    >
      <Row xs={1} lg={2}>
        <Col md={12} lg={5}>
          <div className="mb-4">
            <Image
              fluid
              className="grayscale"
              src="/images/headshot-tall.jpeg"
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
    </PageWrapper>
  );
};

export const getStaticProps = async (): Promise<{ props: AboutPageProps }> => {
  return {
    props: {
      bio: parseMarkdown("data/bio-full.md", ["content"]).content,
    },
  };
};

export default About;
