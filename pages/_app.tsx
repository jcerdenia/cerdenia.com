import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"
import { Container } from "react-bootstrap"
import NavBar from "../components/NavBar"

const MyApp = ({ Component, pageProps }): React.ReactElement => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Container>
        <footer>
          All content © 2021 Joshua Cerdenia. This site is currently in development.
        </footer>
      </Container>
    </>
  )
}

export default MyApp