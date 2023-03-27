import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";
import ComingSoon from "../components/sections/Story/ComingSoon";
import SEO from "../components/SEO";
import ComingSoonAnim from "../components/sections/Story/ComingSoonAnim";

const seoDesc =
  "At Genuine Undead (GU) we are a collective who believe the world is in need of a relevant and fresh IP. An IP to inspire change, imagination, thought, critical thinking. An IP developed from the ground up relevant to today's youth and times which people can relate with. No longer are the pervasive black and white narratives necessary. We understand that there is no binary nature to life but rather shades of grey. The G Universe is a story of people having to make mountainous choices which tug of the veils of existence. G Universe will be an IP relevant for the next thousand years. Grass roots. Relevant. Community derived, owned and art above art. ";

const story = () => {
  const router = useRouter();

  useEffect(() => {
    logPageView({ page: router.pathname, title: "Story" });
  }, []);
  return (
    <>
      <SEO title="Story | Genuine Undead" description={seoDesc} path="story" />
      <ComingSoon />
      {/* <ComingSoonAnim /> */}
    </>
  );
};

export default story;
