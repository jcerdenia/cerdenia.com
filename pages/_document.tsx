import Document, { Head, Html, Main, NextScript } from "next/document";

import BootstrapCDN from "../components/tags/BootstrapCDN";
import GoogleAnalytics from "../components/tags/GoogleAnalytics";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <GoogleAnalytics />
          <BootstrapCDN />

          <link rel="icon" href="music-note.svg" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
