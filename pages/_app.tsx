import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"
import NavBar from "../components/NavBar"

function MyApp({ Component, pageProps }): React.ReactElement {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp