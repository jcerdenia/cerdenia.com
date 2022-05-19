import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import navs, { NavItem } from "../data/nav";

const NavBar = (): JSX.Element => {
  const { asPath: path } = useRouter();

  return (
    <Navbar id="nav-bar" className="navbar" variant="light" expand="lg">
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
          <Nav activeKey={"/" + path.split("/")[1]}>
            {navs.map((nav: NavItem) => {
              return (
                <Link key={nav.path} href={nav.path} passHref>
                  <Nav.Link className="nav-item">{nav.title}</Nav.Link>
                </Link>
              );
            })}

            <Button
              className="nav-item"
              variant="outline-success"
              href="mailto:joshua@cerdenia.com?subject=General Inquiry"
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
