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
    <div className="min-w-[150%] md:min-w-[170%] lg:min-w-[110%] xl:min-w-[85%] h-full perspective-1000 bg-transparent">
      <div
        className={`flip-card-inner ${isFlipped ? "flip-card-flipped" : ""}`}
      >
        <div className="flip-card-front flex flex-col border border-black dark:border-white ">
          <div
            className={`min-h-[40px] flex items-center relative ${
              showFront && "hidden"
            }`}
          >
            <div className="px-2 flex items-center gap-[.2rem]">
              <div
                className={`w-2 h-2 ${
                  totalMinted === maxSupply ? "bg-red-500" : "bg-green-500"
                } rounded-full animate-pulse flex items-center justify-center`}
              ></div>
              {totalMinted === maxSupply ? "Ended" : "Active"}
            </div>
            <h1 className="positionCenter font-teko mt-[3px] text-[1.7rem]">
              {data?.title}
            </h1>
          </div>
          <div className="min-h-[75%] relative">
            {" "}
            <Image
              src={data?.image}
              alt={data?.imageAlt}
              fill
              quality={100}
              priority
            />
          </div>
          <div className="h-full p-2">
            Mint Status: {totalMinted}/{maxSupply}
          </div>
          <div className="flex justify-between items-center px-2">
            <Link href={`/mint/${data?.contractAddress}`}>
              <h2>MINT</h2>
            </Link>
            <h2 onClick={handleFlip} className="cursor-pointer">
              VIEW STATISTICS
            </h2>
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
