import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

import "../styles/globals.css";
import "../styles/Home.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <>
        <Script src="/index.js" strategy="beforeInteractive" />
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
            integrity="sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
      </>

      <Component {...pageProps} />
    </>
  );
}
