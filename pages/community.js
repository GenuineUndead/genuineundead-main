import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";
import Community from "../components/sections/Community/Community";
import Utility from "../components/sections/Community/Utility";
import Marketplace from "../components/sections/Community/Marketplace";
import Discord from "../components/sections/Community/Discord";
import ReadMore from "../components/sections/Community/ReadMore";
import SEO from "../components/SEO";

const seoDesc = "Still Needed";
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
      <Discord />
      <ReadMore />
    </>
  );
};

export default community;
