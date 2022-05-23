import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import useBreakpoint from "../hooks/useBreakpoint";
import meta from "../data/meta";

interface PageLayoutProps {
  title: string;
  exact?: boolean;
  description?: string;
  navBar?: boolean;
  footer?: boolean;
  children: any;
}

const PageLayout = ({
  title,
  exact,
  description = meta.description,
  navBar = true,
  footer = true,
  children,
}: PageLayoutProps): JSX.Element => {
  const breakpoint = useBreakpoint();
  const [heightOffset, setHeightOffset] = useState(0);

  if (!exact) {
    title += ` - ${meta.title}`;
  }

  useEffect(() => {
    if (navBar && footer) {
      // Get combined height of navbar and footer to offset against viewport height.
      const nHeight = document.getElementById("nav-bar")?.clientHeight || 0;
      const fHeight = document.getElementById("footer")?.clientHeight || 0;

      setHeightOffset(nHeight + fHeight);
    }
  }, [breakpoint, navBar, footer]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://music.cerdenia.com/images/headshot-wide-bw.jpeg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://music.cerdenia.com/images/headshot-wide-bw.jpeg"
        />

        <title>{title}</title>
      </Head>

      {navBar ? <NavBar /> : null}

      <Container
        className="pb-4"
        style={{ minHeight: `calc(100vh - ${heightOffset}px)` }}
      >
        {children}
      </Container>

      {footer ? <Footer /> : null}
    </>
  );
};

export default PageLayout;
