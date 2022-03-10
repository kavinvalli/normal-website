import Script from "next/script";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Kavin Valli</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
