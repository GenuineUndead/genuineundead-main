import React, { useEffect } from "react";
import MintMenu from "../components/sections/Mint/MintMenu";
import Mint from "../components/sections/Mint/Mint";
import SEO from "../components/SEO";

const seoDesc = "Description of the mint page";

const mint = () => {
  return (
    <>
      <SEO title="Mint | Genuine Undead" description={seoDesc} path="mint" />
      <MintMenu />
      <Mint />
    </>
  );
};

export default mint;
