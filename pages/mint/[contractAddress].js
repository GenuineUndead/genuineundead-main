import React from "react";
import { config } from "../../public/data/MintConfig";
import { useAccount } from "wagmi";
import ConnectWalletBtn from "../../components/ConnectWalletBtn";

const MintPage = ({ contractData }) => {
  let { title, contractAddress, abi, image, imageAlt } =
    JSON.parse(contractData);
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem]  lg:px-0 relative">
      <div className="min-h-screen w-full flex flex-col justify-center items-center gap-[1rem]">
        ContractAddress: {contractAddress} {title}
        <div className="">
          <ConnectWalletBtn />
        </div>
      </div>
    </section>
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
