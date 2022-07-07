import { Row, Col, Container } from "react-bootstrap";
import LinkedIcon from "./LinkedIcon";
import socials, { Social } from "../data/socials";
import meta from "../data/meta";

const Footer = (): JSX.Element => {
  return (
    <div id="footer" className="footer-container pt-4">
      <Container>
        <Row>
          <Col className="mb-3 text-bold">
            <div>
              For scores and parts, commissions, teaching, and all other
              inquiries, please <a href={meta.mailto}>email directly</a>.
            </div>

            <div className="mt-2">
              Join my <a href={meta.newsletter}>newsletter</a> for occasional
              updates on life and music on a personal scale.
            </div>
          </Col>
          <Col xl="auto" className="d-flex align-items-center mb-3">
            <span className="socials-row">
              {socials.map((social: Social) => {
                return (
                  <LinkedIcon
                    key={social.name}
                    iconId={social.iconId}
                    iconClassName="icon"
                    iconStyle={social.iconStyle}
                    href={social.url}
                  />
                );
              })}
            </span>
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
