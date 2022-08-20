import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import meta from "../data/meta";
import navs from "../data/nav";
import Socials from "./Socials";

const Footer = (): JSX.Element => {
  return (
    <div id="footer" className="footer-container pt-4">
      <Container>
        <Row>
          <Col className="mb-3 text-bold">
            <div className="mb-2">
              For scores and parts, commissions, and all other inquiries, please{" "}
              <a href={meta.mailto}>email directly</a>.
            </div>

            <div>
              <a href={meta.newsletter}>Join my newsletter</a> for occasional
              updates on life and music on a personal scale.
            </div>
          </Col>

          <Col xl="auto" className="mb-3 d-flex align-items-center">
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
