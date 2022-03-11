import { useEffect } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  useEffect(() => {
    if (typeof window != undefined) {
      const theme = window.localStorage.getItem("KDV_THEME");
      window.localStorage.setItem("KDV_THEME", theme ?? "dark");
      if (theme === "light") {
        document.body.classList.remove("darkTheme");
      }
    }
  });
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
