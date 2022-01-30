import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar(): React.ReactElement {
  const { route } = useRouter();

  return (
    <Navbar className="navbar" variant="light" expand="md">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          Joshua Cerdenia{" "}
          <span className="mx-1 sub-brand text-muted">Composer</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="nav-item" key="/" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item" key="/work" href="/work" disabled>
              Work
            </Nav.Link>
            <Nav.Link className="nav-item" key="/about" href="/about" disabled>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
