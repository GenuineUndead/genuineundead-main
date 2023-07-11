import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";
import Community from "../components/sections/Community/Community";
import Utility from "../components/sections/Community/Utility";
import Marketplace from "../components/sections/Community/Marketplace";
import Discord from "../components/sections/Community/Discord";
import ReadMore from "../components/sections/Community/ReadMore";
import SEO from "../components/SEO";
import Initiatives from "../components/sections/Community/Initiatives";

const seoDesc =
  "Genuine Undead is powered by the community. At every level it is the community who have stepped up, innovated and helped to magnify and harness the collective energy of our highly talented, diverse, experienced and powerful family. The GU collective have self organised into a fully councillor system to allow for a novel web 2.5 organisational approach to help merge traditional markets with the Web3 ecosystem. Blurring the lines between physical and digital.";

const community = () => {
  const router = useRouter();

  useEffect(() => {
    logPageView({ page: router.pathname, title: "Community" });
  }, []);
  return (
    <>
      <SEO
        title="Community | Genuine Undead"
        description={seoDesc}
        path="community"
      />
      <Community />
      <Utility />
      <Marketplace />
      <Initiatives />
      <Discord />
      <ReadMore />
    </>
  );
};

export default community;
