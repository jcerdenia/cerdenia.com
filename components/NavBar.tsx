import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";
import navs, { NavItem } from "../data/nav";

export default function NavBar(): React.ReactElement {
  const { asPath } = useRouter();

  return (
    <Navbar className="navbar" variant="light" expand="md">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <span className="brand">Joshua Cerdenia</span>
          <span>
            <Navbar.Text className="sub-brand">Composer</Navbar.Text>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={asPath}>
            {navs.map(({ title, url, disabled }: NavItem) => (
              <Nav.Link
                key={url}
                className="nav-item"
                href={url}
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
}
