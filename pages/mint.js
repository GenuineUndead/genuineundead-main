import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import gsap from "gsap";
import ConnectWalletBtn from "../components/ConnectWalletBtn";
import Slider from "../components/Slider";
import SEO from "../components/SEO";

const images = [1, 2, 3, 4, 5, 6, 7];
const seoDesc = "Description of the mint page";

const mint = () => {
  const { isConnected, address } = useAccount();
  const handleMint = () => {
    console.log("clicked handle mint");
  };

  return (
    <>
      <SEO title="Mint | Genuine Undead" description={seoDesc} path="mint" />
      <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem]  lg:px-0 relative">
        <div className="w-full min-h-full flex flex-col items-center justify-center gap-[1rem] positionCenter">
          <h1 className="text-[2rem] font-teko">Mint Page</h1>
          <Slider items={images} />
          <div className="">
            <ConnectWalletBtn />
          </div>
        </div>
      </section>
    </>
  );
};

export default mint;
