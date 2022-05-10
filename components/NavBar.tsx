import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import navs, { NavItem } from "../data/nav";
import { Icon } from "@iconify/react";

const NavBar = (): JSX.Element => {
  const { asPath } = useRouter();
  const basePath = "/" + asPath.split("/")[1];

  return (
    <Navbar className="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <header className="brand">Joshua Cerdenia</header>
          <aside>
            <Navbar.Text className="brand-sub">Composer</Navbar.Text>
          </aside>
        </Navbar.Brand>
        <Navbar.Toggle>
          <Icon icon="bi:list" />
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={basePath}>
            {navs.map((nav: NavItem) => (
              <Link key={nav.path} href={nav.path} passHref>
                <Nav.Link className="nav-item">{nav.title}</Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
