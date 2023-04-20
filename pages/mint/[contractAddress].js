import React from "react";
import { config } from "../../public/data/MintConfig";
import Mint from "../../components/sections/Mint/Mint";

const MintPage = ({ contractData }) => {
  let { title, contractAddress, abi, image, imageAlt } =
    JSON.parse(contractData);
  return (
    <>
      <Mint contractAddress={contractAddress} title={title} />
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
