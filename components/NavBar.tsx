import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

export default function NavBar(): React.ReactElement {
  return (
    <Navbar variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="brand" href="#home">Joshua Cerdenia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}