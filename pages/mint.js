import React, { useEffect } from "react";
import MintMenu from "../components/sections/Mint/MintMenu";
import SEO from "../components/SEO";

const seoDesc = "Description of the mint page";

const mint = () => {
  return (
    <>
      <SEO title="Mint | Genuine Undead" description={seoDesc} path="mint" />
      <MintMenu />
    </>
  );
};

export default mint;
