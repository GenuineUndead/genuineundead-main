import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/sections/Layout";
import { appWithTranslation } from "next-i18next";
import { ParallaxProvider } from "react-scroll-parallax";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../utils/analytics";
import { wagmiClient, chains } from "../utils/wallet/walletConfig";
import {
  RainbowKitProvider,
  midnightTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { chain, WagmiConfig } from "wagmi";
import { useTheme } from "next-themes";
import { useState } from "react";

// const darkTheme = {
//   blurs: {},
//   colors: {},
// };

// const lightTheme = {};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
    initGA();
    logPageView({ page: router.pathname, title: "Init" });
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme]);

  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={midnightTheme()}>
          <ParallaxProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ParallaxProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

const myCustomTheme = {
  blurs: {
    modalOverlay: "...",
  },
  colors: {
    accentColor: "...",
    accentColorForeground: "...",
    actionButtonBorder: "...",
    actionButtonBorderMobile: "...",
    actionButtonSecondaryBackground: "...",
    closeButton: "...",
    closeButtonBackground: "...",
    connectButtonBackground: "...",
    connectButtonBackgroundError: "...",
    connectButtonInnerBackground: "...",
    connectButtonText: "",
    connectButtonTextError: "...",
    connectionIndicator: "...",
    downloadBottomCardBackground: "...",
    downloadTopCardBackground: "...",
    error: "...",
    generalBorder: "...",
    generalBorderDim: "...",
    menuItemBackground: "...",
    modalBackdrop: "...",
    modalBackground: "...",
    modalBorder: "...",
    modalText: "...",
    modalTextDim: "...",
    modalTextSecondary: "...",
    profileAction: "...",
    profileActionHover: "...",
    profileForeground: "...",
    selectedOptionBorder: "...",
    standby: "...",
  },
  fonts: {
    body: "...",
  },
  radii: {
    actionButton: "...",
    connectButton: "...",
    menuButton: "...",
    modal: "...",
    modalMobile: "...",
  },
  shadows: {
    connectButton: "...",
    dialog: "...",
    profileDetailsAction: "...",
    selectedOption: "...",
    selectedWallet: "...",
    walletLogo: "...",
  },
};
