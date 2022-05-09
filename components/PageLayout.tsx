import Head from "next/head";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import meta from "../data/meta";

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
  if (!exact) {
    title += ` - ${meta.title}`;
  }

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
        <link rel="icon" href="music-note.svg" />
        <title>{title}</title>
      </Head>
      <NavBar />
      <Container className="pb-4" fluid={wide}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default PageLayout;
