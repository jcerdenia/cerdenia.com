import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import NavModal from "./NavModal";
import useAppState from "../hooks/useAppState";
import useBreakpoint from "../hooks/useBreakpoint";
import navs from "../data/nav";

const NavBar = (): JSX.Element => {
  const { asPath } = useRouter();
  const { enableHomeBackground } = useAppState();
  const [showModal, setShowModal] = useState(false);
  const breakpoint = useBreakpoint();

  const basePath = asPath.split("/")[1];
  const background = !basePath.length && enableHomeBackground;

  useEffect(() => {
    if (breakpoint === "xl") {
      setShowModal(false);
    }
  }, [breakpoint]);

  return (
    <Navbar
      id="nav-bar"
      className="nav-bar"
      variant={background ? "dark" : "light"}
    >
      <Container>
        <Nav>
          <Navbar.Brand className="brand" href="/">
            Joshua Cerdenia
          </Navbar.Brand>

          <Navbar.Text className="brand-sub">Composer</Navbar.Text>
        </Nav>

        <Button
          className="xl-down"
          variant={background ? "outline-light" : "outline-secondary"}
          size={breakpoint === "md" || breakpoint === "lg" ? "lg" : undefined}
          onClick={() => setShowModal(true)}
        >
          <Icon icon="bi:list" />
        </Button>

        <Nav className="xl-up" activeKey={`/${basePath}`}>
          {navs
            .filter((nav) => !nav.hidden)
            .map((nav) => {
              if (nav.special) {
                return (
                  <Button
                    key={nav.path}
                    className="nav-item"
                    variant={background ? "outline-light" : "outline-success"}
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
