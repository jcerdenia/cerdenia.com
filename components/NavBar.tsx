import { useRouter } from "next/router"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

export default function NavBar(): React.ReactElement {
  const { route } = useRouter()

  return (
    <Navbar className="navbar" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="brand" href="#home">Joshua Cerdenia Music</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={route}>
            <Nav.Link className="nav-item" key="/" href="/">Home</Nav.Link>
            <Nav.Link className="nav-item" key="/work" href="/work">Work</Nav.Link>
            <Nav.Link className="nav-item" key="/about" href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}