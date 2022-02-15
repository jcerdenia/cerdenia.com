import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
