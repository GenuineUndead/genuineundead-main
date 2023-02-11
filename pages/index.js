import Landing from "../components/sections/Landing";
import { useRef, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Collection from "../components/sections/Collection";
import Art from "../components/sections/Art";
import Story from "../components/sections/Story";
import Ethos from "../components/sections/Ethos";
import FAQ from "../components/sections/FAQ";
import Carousel from "../components/sections/Carousel";
import Footer from "../components/sections/Footer";
import MobileStory from "../components/sections/MobileStory";

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

export default function Home(props) {
  const { t: translate } = useTranslation();
  const landingRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <div className="page-container">
      <Landing pageRefs={{ landingRef, titleRef }} />
      {/* <Carousel /> */}
      <Collection />
      <Art />
      <MobileStory />
      <Story />
      <Ethos />
      <FAQ />
    </div>
  );
}
