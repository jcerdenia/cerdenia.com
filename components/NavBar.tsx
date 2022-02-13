import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";

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
            <Nav.Link className="nav-item" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item" href="/about">
              About
            </Nav.Link>
            <Nav.Link disabled className="nav-item" href="/news">
              News
            </Nav.Link>
            <Nav.Link disabled className="nav-item" href="/work">
              Work
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
