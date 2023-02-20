import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";

import meta from "../data/meta";
import navs from "../data/nav";
import Socials from "./Socials";

const Footer = (): JSX.Element => {
  const { asPath } = useRouter();
  const basePath = asPath.split("/")[1];

  return (
    <div id="footer" className="footer-container pt-4">
      <Container>
        <Row>
          <Col className="mb-4 text-bold">
            <div className="mb-2">
              For scores and parts, commissions, and all other inquiries, please{" "}
              <a href={meta.mailto}>email directly</a>.
            </div>

            <div>
              <a href={meta.newsletter}>Join my newsletter</a> for occasional
              updates on life and music on a personal scale.
            </div>
          </Col>

          <Col xl="auto" className="mb-3 d-flex flex-column align-items-center">
            <div className="mb-2">
              {navs
                .filter((nav) => !nav.hidden && !nav.special)
                .map((nav) => (
                  <span key={nav.path} className="mx-2">
                    <Link href={nav.path} passHref>
                      <a
                        className={
                          `/${basePath}` == nav.path
                            ? "small link-muted-active"
                            : "small link-muted"
                        }
                      >
                        {nav.title}
                      </a>
                    </Link>
                  </span>
                ))}
            </div>

            <Socials />
          </Col>

          <footer>
            © 2011-{new Date().getFullYear()} Joshua Cerdenia unless otherwise
            stated. This site is <a href={meta.repo}>open-source</a>.
          </footer>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
