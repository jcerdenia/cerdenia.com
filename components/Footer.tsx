import { Row, Col, Container } from "react-bootstrap";
import LinkedIcon from "./LinkedIcon";
import socials, { Social } from "../data/socials";

const Footer = (): JSX.Element => {
  const mailto = "mailto:joshua@cerdenia.com?subject=General Inquiry";
  const repo = "https://github.com/joshuacerdenia/music.cerdenia.com";

  return (
    <div id="footer" className="footer-container pt-4">
      <Container>
        <Row>
          <Col className="mb-3 text-bold">
            For scores and parts, commissions, teaching, and all other
            inquiries, please <a href={mailto}>email directly</a>.
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
            <a href={repo}>open-source</a>.
          </footer>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
