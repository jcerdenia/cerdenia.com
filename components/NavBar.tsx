import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";
import navs, { NavItem } from "../data/nav";

const NavBar = (): JSX.Element => {
  const { asPath } = useRouter();
  const basePath = "/" + asPath.split("/")[1];

  return (
    <Navbar className="navbar" variant="light" expand="md">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <header className="brand">Joshua Cerdenia</header>
          <aside>
            <Navbar.Text className="sub-brand">Composer</Navbar.Text>
          </aside>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={basePath}>
            {navs.map(({ title, path, disabled }: NavItem) => (
              <Nav.Link
                key={path}
                className="nav-item"
                href={path}
                disabled={disabled}
              >
                {title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
