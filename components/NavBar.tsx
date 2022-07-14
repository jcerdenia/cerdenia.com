import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import NavOffcanvas from "./NavOffcanvas";
import useAppState from "../hooks/useAppState";
import useInnerWidth from "../hooks/useInnerWidth";
import navs from "../data/nav";
import breakpoints from "../lib/breakpoints";

const NavBar = (): JSX.Element => {
  const { asPath } = useRouter();
  const { enableHomeBackground } = useAppState();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const innerWidth = useInnerWidth();

  const basePath = asPath.split("/")[1];
  const background = !basePath.length && enableHomeBackground;

  useEffect(() => {
    if (innerWidth >= breakpoints.XL) {
      setShowOffcanvas(false);
    }
  }, [innerWidth]);

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
          size={innerWidth >= breakpoints.MD ? "lg" : undefined}
          onClick={() => setShowOffcanvas(true)}
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

      <NavOffcanvas
        show={showOffcanvas}
        setShow={setShowOffcanvas}
        activeKey={basePath}
      />
    </Navbar>
  );
};

export default NavBar;
