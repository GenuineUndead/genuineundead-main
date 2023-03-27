import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";
import Landing from "../components/sections/Home/Landing";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Collection from "../components/sections/Home/Collection";
import Art from "../components/sections/Home/Art";
import Story from "../components/sections/Home/Story";
import Ethos from "../components/sections/Home/Ethos";
import FAQ from "../components/sections/Home/FAQ";
import MobileStory from "../components/sections/Home/MobileStory";
import SEO from "../components/SEO";
import SplashScreen from "../components/SplashScreen";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "home",
        "navigation",
        "common",
      ])),
      locale,
    },
  };
}

const seoDesc =
  "Home of the Genuine Undead (GU). Genuine Undead homepage. Find out about what Genuine Undead is all about, the art work, the history, the community that formed around this masterpiece Pixel Art Collection and why we think GU is the most significant NFT collection / collective to date.";

export default function Home(props) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { t: translate } = useTranslation();
  useEffect(() => {
    logPageView({ page: router.pathname, title: "Home" });
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  }, []);

  return (
    <>
      <SEO title="Home | Genuine Undead" description={seoDesc} />
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="page-container">
          <Landing loading={loading} />
          <Collection />
          <Art />
          <MobileStory />
          <Story />
          <Ethos />
          <FAQ />
        </div>
      )}
    </>
  );
}
