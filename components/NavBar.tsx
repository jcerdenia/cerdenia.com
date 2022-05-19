import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import navs, { NavItem } from "../data/nav";
import NavModal from "./NavModal";

const NavBar = (): JSX.Element => {
  const { asPath } = useRouter();
  const [showModal, setShowModal] = useState(false);

  const basePath = asPath.split("/")[1];

  return (
    <Navbar id="nav-bar" className="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <header className="brand">Joshua Cerdenia</header>
          <aside>
            <Navbar.Text className="brand-sub">Composer</Navbar.Text>
          </aside>
        </Navbar.Brand>

        <Button
          className="xl-down"
          variant="outline-secondary"
          onClick={() => setShowModal(true)}
        >
          <Icon icon="bi:list" />
        </Button>

        <Nav className="xl-up" activeKey={`/${basePath}`}>
          {navs.map((nav: NavItem) => {
            if (nav.special) {
              return (
                <Button
                  key={nav.path}
                  className="nav-item"
                  variant="outline-success"
                  href={nav.path}
                >
                  {nav.title}
                </Button>
              );
            }

            return (
              <Link key={nav.path} href={nav.path} passHref>
                <Nav.Link className="nav-item">{nav.title}</Nav.Link>
              </Link>
            );
          })}
        </Nav>
      </Container>

      <NavModal show={showModal} setShow={setShowModal} activeKey={basePath} />
    </Navbar>
  );
};

export default NavBar;
