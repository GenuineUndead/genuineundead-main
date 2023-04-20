import React from "react";
import { useAccount } from "wagmi";
import ConnectWalletBtn from "../../ConnectWalletBtn";
import TekoHeading from "../../TekoHeading";
import Image from "next/image";

const Mint = ({ contractAddress, title }) => {
  const totalMinted = 9998;
  const maxSupply = 9999;
  return (
    <section className="min-h-screen w-full flex flex-col border-b border-black dark:border-white px-[1.6rem] lg:px-0 relative">
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <TekoHeading>MINT</TekoHeading>
      </div>
      <div className="min-h-full flex-1 w-full flex flex-col-reverse lg:flex-row mb-[100px]">
        <div className="w-full lg:w-[50%] flex-1 flex  justify-center">
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="flex justify-between items-center w-full">
              <span className="font-teko text-[2rem]">TITLE</span>
              <div className=" flex items-center gap-[.2rem] text-sm">
                <div
                  className={`w-2 h-2 ${
                    totalMinted === maxSupply ? "bg-red-500" : "bg-green-500"
                  } rounded-full animate-pulse flex items-center justify-center`}
                ></div>
                {totalMinted === maxSupply ? "Ended" : "Active"}
              </div>
            </div>
            <div className="flex flex-col divide-y divide-gray-700/75">
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
              <div className="flex gap-[1rem]">
                <div className="flex flex-col py-4 w-1/3">
                  <span className="text-sm">Edition</span>
                  <span className="font-bold">10,000</span>
                </div>
                <div className="flex flex-col py-4 w-1/3">
                  <span className="text-sm">Minted</span>
                  <span className="font-bold">10,000</span>
                </div>
                <div className="flex flex-col py-4 w-1/3">
                  <span className="text-sm">Price</span>
                  <span className="font-bold">0.069 ETH</span>
                </div>
              </div>
              <div className="py-4 flex justify-center items-center">
                <div className="w-[90%]">
                  <ConnectWalletBtn />
                </div>
              </div>
              <div className="flex flex-col justify-center py-2">
                <div className="flex justify-between text-sm">
                  Contract Address
                </div>
                <span className="font-bold text-sm">{contractAddress}</span>
              </div>
              <div className="flex flex-col justify-center py-2">
                <div className="flex justify-between text-sm">
                  Token Standard
                </div>
                <span className="font-bold text-sm">ERC-1511</span>
              </div>
              <div className="flex flex-col justify-center py-2">
                <div className="flex justify-between text-sm">Blockchain</div>
                <span className="font-bold text-sm">Ethereum</span>
              </div>
              <div className="flex flex-col justify-center py-2">
                <div className="flex justify-between text-sm">Mint Date</div>
                <span className="font-bold text-sm">17 April 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] my-[50px] lg:my-0 lg:flex-1 lg:min-h-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-[80%] aspect-square relative">
            <Image
              src={`/images/mint/NTR-stub.png`}
              alt={`NTR stub`}
              fill
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
