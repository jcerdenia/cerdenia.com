import { Row, Col, Image, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import PageLayout from "../components/PageLayout";
import HtmlWrapper from "../components/HtmlWrapper";
import { parseMarkdown } from "../utils/markdown";

interface AboutPageProps {
  bio: string;
}

const AboutPage = ({ bio }: AboutPageProps): React.ReactElement => {
  return (
    <PageLayout title="About">
      <Row xs={1} lg={2}>
        <Col md={12} lg={5} className="mb-4">
          <Image
            fluid
            className="grayscale"
            src="/images/headshot-tall.jpeg"
            alt="headshot"
          />
          <figcaption className="small text-muted">
            Photo by Rashidah De Vore
          </figcaption>
        </Col>
        <Col md={12} lg={7}>
          <h5 className="mb-4">Biography</h5>
          <HtmlWrapper>{bio}</HtmlWrapper>
          <span className="d-flex justify-content-center">
            <Button
              id="button-press-pack"
              className="px-5 py-2"
              variant="outline-secondary"
              href="https://drive.google.com/drive/folders/1DGzXOmAL-m-obzNBZD5iO6Oa1rpBXG7E?usp=sharing"
            >
              <Icon icon="bi:cloud-download" className="me-1" /> Download Photos
              & Bios
            </Button>
          </span>
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<{ props: AboutPageProps }> => {
  return {
    props: {
      bio: parseMarkdown("data/bio-full.md", ["content"]).content || "",
    },
  };
};

export default AboutPage;
