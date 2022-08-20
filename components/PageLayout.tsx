import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import meta from "../data/meta";
import useInnerWidth from "../hooks/useInnerWidth";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Transition from "./Transition";

interface PageLayoutProps {
  title: string;
  exact?: boolean;
  description?: string;
  bodyClassName?: string;
  navBar?: boolean;
  footer?: boolean;
  transition?: boolean;
  children: any;
}

const PageLayout = ({
  title,
  exact,
  description = meta.description,
  bodyClassName,
  navBar = true,
  footer = true,
  transition = true,
  children,
}: PageLayoutProps): JSX.Element => {
  const innerWidth = useInnerWidth();
  const [heightOffset, setHeightOffset] = useState(0);

  if (!exact) {
    title += ` - ${meta.title}`;
  }

  useEffect(() => {
    const getElementHeight = (id: string) => {
      return document.getElementById(id)?.clientHeight || 0;
    };

    const nHeight = navBar ? getElementHeight("nav-bar") : 0;
    const fHeight = footer ? getElementHeight("footer") : 0;

    setHeightOffset(nHeight + fHeight);
  }, [innerWidth, navBar, footer]);

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

      <div className={bodyClassName}>
        {navBar ? <NavBar /> : null}

        <Transition disabled={!transition}>
          <Container
            className="main pb-4"
            style={{ minHeight: `calc(100vh - ${heightOffset}px)` }}
          >
            {children}
          </Container>

          {footer ? <Footer /> : null}
        </Transition>
      </div>
    </>
  );
};

export default PageLayout;
