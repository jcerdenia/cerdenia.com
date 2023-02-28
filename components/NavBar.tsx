import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import navs from "../data/nav";
import useInnerWidth from "../hooks/useInnerWidth";
import breakpoints from "../lib/breakpoints";
import NavOffcanvas from "./NavOffcanvas";

const NavBar = (): JSX.Element => {
  const { asPath } = useRouter();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const innerWidth = useInnerWidth();

  const basePath = asPath.split("/")[1];
  const background = !basePath.length;

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
          variant="light"
          size={innerWidth >= breakpoints.MD ? "lg" : undefined}
          onClick={() => setShowOffcanvas(true)}
        >
          <Icon className="menu-icon" icon="bi:list" />
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
