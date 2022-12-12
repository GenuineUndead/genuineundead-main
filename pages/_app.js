import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/sections/Layout";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
