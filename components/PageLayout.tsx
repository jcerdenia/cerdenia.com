import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import meta from "../data/meta";
import useResizeAware from "react-resize-aware";

interface PageLayoutProps {
  title: string;
  exact?: boolean;
  description?: string;
  children: any;
  wide?: boolean;
}

const PageLayout = ({
  title,
  exact,
  description = meta.description,
  wide = false,
  children,
}: PageLayoutProps): JSX.Element => {
  const [resizeListener, size] = useResizeAware();
  const [heightOffset, setHeightOffset] = useState(0);

  if (!exact) {
    title += ` - ${meta.title}`;
  }

  useEffect(() => {
    // Get combined height of navbar and footer to offset against viewport height.
    const navBarHeight = document.getElementById("nav-bar")?.clientHeight || 0;
    const footerHeight = document.getElementById("footer")?.clientHeight || 0;

    setHeightOffset(navBarHeight + footerHeight);
  }, [size.width]);

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

      {resizeListener}

      <NavBar />
      <Container
        className="pb-4"
        style={{ minHeight: `calc(100vh - ${heightOffset}px)` }}
        fluid={wide}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default PageLayout;
