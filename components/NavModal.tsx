import Link from "next/link";
import { Modal, Button } from "react-bootstrap";
import navs, { NavItem } from "../data/nav";

interface NavModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  activeKey: string;
}

const NavModal = ({ show, setShow, activeKey }: NavModalProps) => {
  const active = (path: string) => path.split("/")[1] === activeKey;

  return (
    <Modal className="nav-modal" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton />
      <Modal.Body className="d-flex flex-column">
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
      </Modal.Body>
    </Modal>
  );
};

export default NavModal;
