import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

const MyApp = ({ Component, pageProps }): React.ReactElement => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Container>
        <footer>© 2011-22 Joshua Cerdenia.</footer>
      </Container>
    </>
  );
};

export default MyApp;
