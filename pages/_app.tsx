import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Script
      src="/css/bootstrap.min.css"
      strategy="afterInteractive"
      noModule
    />
    <Script
      src="/css/animate.min.css"
      strategy="afterInteractive"
      noModule
    />
    <Script
      src="/css/owl.carousel.css"
      strategy="afterInteractive"
      noModule
    />
    <link rel="stylesheet" type="text/css" href="/css/product.min.css" />
    <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
    <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
    <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive" />
    <Script src="/js/wow.min.js" type="text/javascript" strategy="beforeInteractive" />
    <Script src="/js/lazyload.min.js" type="text/javascript" strategy="beforeInteractive" />
    <Script src="/js/product.min.js" type="text/javascript" strategy="beforeInteractive" />

    <Component {...pageProps} />
  </>
}
