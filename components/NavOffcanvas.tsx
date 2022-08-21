import Link from "next/link";
import { Button, Offcanvas } from "react-bootstrap";

import navs from "../data/nav";

interface NavOffcanvasProps {
  show: boolean;
  // eslint-disable-next-line no-unused-vars
  setShow: (show: boolean) => void;
  activeKey: string;
}

const NavOffcanvas = ({ show, setShow, activeKey }: NavOffcanvasProps) => {
  const active = (path: string) => path.split("/")[1] === activeKey;

  return (
    <Offcanvas
      className="nav-offcanvas"
      placement="top"
      scroll={false}
      show={show}
      onHide={() => setShow(false)}
    >
      <Offcanvas.Header closeButton />
      <Offcanvas.Body className="d-flex flex-column">
        {navs
          .filter((nav) => !nav.hidden)
          .map((nav) => {
            if (nav.special) {
              return (
                <Button
                  key={nav.path}
                  className="nav-button"
                  variant="outline-success"
                  href={nav.path}
                >
                  {nav.title}
                </Button>
              );
            }

            return (
              <Link key={nav.path} href={nav.path} passHref>
                <a
                  className={`nav-item ${active(nav.path) && "active"}`}
                  onClick={() => active(nav.path) && setShow(false)}
                >
                  {nav.title}
                </a>
              </Link>
            );
          })}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavOffcanvas;
