import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/sections/Layout";
import { appWithTranslation } from "next-i18next";
import { ParallaxProvider } from "react-scroll-parallax";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../utils/analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
    initGA();
    logPageView({ page: router.pathname, title: "Init" });
  }, []);
  return (
    <ParallaxProvider>
      <ThemeProvider enableSystem={false} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default appWithTranslation(MyApp);
