import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { config } from "../../public/data/MintConfig";
import Mint from "../../components/sections/Mint/Mint";

const MintPage = () => {
  // let { title, contractAddress, abi, image, imageAlt } =
  //   JSON.parse(contractData);
  const router = useRouter();
  const { contractAddress } = router.query;
  let contractData = config.find(
    (c) => c.contractAddress.toLowerCase() === contractAddress.toLowerCase()
  );

  return (
    <>
      <Mint contractData={contractData} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { contractAddress } = params;
  // fetch page content based on the contractAddress parameter
  let contractData = config.find(
    (c) => c.contractAddress.toLowerCase() === contractAddress.toLowerCase()
  );

  return {
    props: {
      contractData: JSON.stringify(contractData),
      // page content
    },
  };
}

export default MintPage;
