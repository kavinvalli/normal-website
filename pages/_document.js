import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/kavin.jpeg" type="image/x-icon" />
      </Head>
      <body className="darkTheme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
