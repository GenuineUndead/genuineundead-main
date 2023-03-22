import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";
import Landing from "../components/sections/Art/Landing";
import Gallery from "../components/sections/Art/Gallery";
import PFP from "../components/sections/Art/PFP";
import Curation from "../components/sections/Art/Curation";
import SEO from "../components/SEO";
import MobileGallery from "../components/sections/Art/MobileGallery";

const seoDesc =
  "Genuine Undead is fine Pixel Art. Find out here why we think it is the best pfp and the best 24 x 24 pixel art collection to date. Genuine Undead in gallery, as a PFP for digital identity, token gating, NFT technology. Anonymous artist.";

const art = () => {
  const router = useRouter();

  useEffect(() => {
    logPageView({ page: router.pathname, title: "Art" });
  }, []);
  return (
    <>
      <SEO title="Art | Genuine Undead" description={seoDesc} path="art" />
      <Landing />
      <MobileGallery />
      <Gallery />
      <PFP />
      <Curation />
    </>
  );
};

export default art;
