import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContractReads } from "wagmi";

import { ethers } from "ethers";

const FlipCard = ({ data }) => {
  const [totalMinted, setTotalMinted] = useState();
  const [maxSupply, setMaxSupply] = useState();
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFront, setShowFront] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      setShowFront(!showFront);
    }, 150);
  };

  const config = {
    address: data?.contractAddress,
    abi: data?.abi,
  };

  const { data: readData } = useContractReads({
    contracts: [
      {
        ...config,
        functionName: "totalSupply",
        watch: true,
      },
      {
        ...config,
        functionName: "maxSupply",
      },
    ],
  });

  useEffect(() => {
    console.log({ readData });
    if (readData && readData.length > 0) {
      setTotalMinted(ethers.utils.formatUnits(readData[0], 0));
      setMaxSupply(ethers.utils.formatUnits(readData[1], 0));
    }
  }, [readData]);

  return (
    <div className="w-[90%] md:min-w-[150%] lg:min-w-[375px] xl:w-[350px] h-full perspective-1000 bg-transparent">
      <div
        className={`flip-card-inner ${isFlipped ? "flip-card-flipped" : ""}`}
      >
        <div className="flip-card-front flex flex-col border border-black dark:border-white px-[15px] rounded-md">
          <div className="min-h-[13%] flex justify-center items-center text-[2rem] font-teko">
            TITLE
          </div>
          <div className="min-h-[60%] relative">
            {" "}
            <Image
              src={data?.image}
              alt={data?.imageAlt}
              fill
              quality={100}
              priority
            />
          </div>
          <div
            className={`min-h-[50px] flex items-center relative justify-between ${
              showFront && "hidden"
            }`}
          >
            <div className=" flex items-center gap-[.2rem] text-sm">
              <div
                className={`w-2 h-2 ${
                  totalMinted === maxSupply ? "bg-red-500" : "bg-green-500"
                } rounded-full animate-pulse flex items-center justify-center`}
              ></div>
              {totalMinted === maxSupply ? "Ended" : "Active"}
            </div>
            <span className="text-sm">
              Mint Status: {totalMinted}/{maxSupply}
            </span>
          </div>
          <div className="flex items-center w-full h-full border-t border-gray-700/75">
            <div className="w-[50%] flex justify-center items-center">
              {" "}
              <Link
                href={`/mint/${data?.contractAddress}`}
                className="hover:text-[#ff5277]"
              >
                <h2>MINT</h2>
              </Link>
            </div>
            <div className="w-[50%] flex justify-center items-center border-l border-gray-700/75 h-[80%]">
              {" "}
              <h2
                onClick={handleFlip}
                className="cursor-pointer hover:text-[#ff5277]"
              >
                VIEW STATS
              </h2>
            </div>
          </div>
        </div>
        <div className="flip-card-back flex flex-col border border-black dark:border-white transform rotate-y-180">
          <div className="min-h-[40px] flex items-center relative">
            <div className="px-2 flex items-center gap-[.2rem]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex items-center justify-center"></div>
              Active
            </div>
            <h1 className="positionCenter font-teko mt-[3px] text-[1.7rem]">
              STATISTICS
            </h1>
          </div>
          <div className="flex-grow relative">
            <div className="grid grid-cols-1 grid-rows-6 h-full">
              <div className="border-t border-b border-gray-300 flex items-center justify-between px-2">
                <span>STAT TITLE</span>
                <span>VALUE</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <span>STAT TITLE</span>
                <span>VALUE</span>
              </div>
              <div className="border-t border-b border-gray-300 flex items-center justify-between px-2">
                <span>STAT TITLE</span>
                <span>VALUE</span>
              </div>{" "}
              <div className="flex items-center justify-between px-2">
                <span>STAT TITLE</span>
                <span>VALUE</span>
              </div>
              <div className="border-t border-b border-gray-300 flex items-center justify-between px-2">
                <span>STAT TITLE</span>
                <span>VALUE</span>
              </div>{" "}
              <div className="flex items-center border-b border-gray-300 justify-between px-2">
                <span>STAT TITLE</span>
                <span>VALUE</span>
              </div>{" "}
            </div>
          </div>
          <div className="min-h-[40px] flex justify-center item-center">
            <h2
              onClick={handleFlip}
              className="cursor-pointer mr-2 font-teko text-[1.5rem]"
            >
              VIEW MINT INFORMATION
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
