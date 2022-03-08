import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import socials, { Social } from "../data/socials";

const Footer = (): JSX.Element => {
  return (
    <div className="pt-4">
      <Row>
        <Col className="d-flex align-items-center mb-3">
          <strong>
            For scores and parts, commissions, teaching, and all other
            inquiries, please <a href="mailto:joshua@cerdenia.com">email</a>{" "}
            directly.
          </strong>
        </Col>
        <Col xl="auto" className="d-flex align-items-center mb-3">
          <span className="socials-row">
            {socials.map((social: Social) => {
              return (
                <a key={social.name} href={social.url}>
                  <Icon className="icon" icon={social.iconId} />
                </a>
              );
            })}
          </span>
        </Col>
        <footer>
          © 2011-22 Joshua Cerdenia unless otherwise stated. This site is{" "}
          <a href="https://github.com/joshuacerdenia/music.cerdenia.com">
            open-source
          </a>
          .
        </footer>
      </Row>
    </div>
  );
};

export default Footer;
