import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }): React.ReactElement => {
  return (
    <>
      <Head>
        <link rel="icon" href="music-note.svg" />
      </Head>
      <NavBar />
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  );
};

export default MyApp;
