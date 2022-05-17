import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppStateProvider from "../context/AppStateProvider";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
};

export default MyApp;
