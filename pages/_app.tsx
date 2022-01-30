import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

const MyApp = ({ Component, pageProps }): React.ReactElement => {
  return (
    <>
      <NavBar />
      <Container>
        <Component {...pageProps} />
        <footer className="pt-4">
          © 2011-22 Joshua Cerdenia. This site is under development.
        </footer>
      </Container>
    </>
  );
};

export default MyApp;
