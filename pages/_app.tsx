import AppStateProvider from "../components/AppStateProvider";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
};

export default MyApp;
