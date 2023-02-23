import { Button, Col, Row } from "react-bootstrap";

import HtmlWrapper from "../components/HtmlWrapper";
import PageLayout from "../components/PageLayout";
import { parseMarkdown } from "../lib/helpers";
import styles from "../styles/About.module.css";

interface AboutPageProps {
  bio: string;
}

const AboutPage = ({ bio }: AboutPageProps): React.ReactElement => {
  return (
    <PageLayout title="About">
      <Row xs={1} lg={2}>
        <Col md={12} lg={5} className="mb-4">
          <div className={styles.imageContainer} />

          <div className="d-flex justify-content-center mt-3">
            <Button
              className="media-button px-5 py-2"
              variant="outline-success"
              href="https://drive.google.com/drive/folders/1DGzXOmAL-m-obzNBZD5iO6Oa1rpBXG7E?usp=sharing"
              target="_blank"
            >
              Photos & Bios for Press
            </Button>
          </div>
        </Col>

        <Col md={12} lg={7}>
          <h5>Biography</h5>
          <HtmlWrapper>{bio}</HtmlWrapper>
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<{ props: AboutPageProps }> => {
  return {
    props: {
      bio: parseMarkdown("data/bio-full.md", ["content"]),
    },
  };
};

export default AboutPage;
