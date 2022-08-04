import { Row, Col, Container } from "react-bootstrap";
import Socials from "./Socials";
import meta from "../data/meta";

const Footer = (): JSX.Element => {
  return (
    <div id="footer" className="footer-container pt-4">
      <Container>
        <Row>
          <Col className="mb-3 text-bold">
            <div>
              For scores and parts, commissions, and all other inquiries, please{" "}
              <a href={meta.mailto}>email directly</a>.
            </div>

            <div className="mt-2">
              <a href={meta.newsletter}>Join my newsletter</a> for occasional
              updates on life and music on a personal scale.
            </div>
          </Col>
          <Col xl="auto" className="d-flex align-items-center mb-3">
            <Socials />
          </Col>

          <footer>
            © 2011-22 Joshua Cerdenia unless otherwise stated. This site is{" "}
            <a href={meta.repo}>open-source</a>.
          </footer>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
