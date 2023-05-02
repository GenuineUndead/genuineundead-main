import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import TekoHeading from "../../TekoHeading";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useContractReads } from "wagmi";
import { ethers } from "ethers";
import Countdown from "./Countdown";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dynamic from "next/dynamic";
const ConnectWalletBtn = dynamic(() => import("../../ConnectWalletBtn"), {
  ssr: false,
});

dayjs.extend(utc);
dayjs.extend(timezone);

const Mint = ({ contractData }) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [totalMinted, setTotalMinted] = useState();
  const [maxSupply, setMaxSupply] = useState();
  const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // get the browser's time zone

  const handleMint = async () => {
    alert("This will trigger mint eventually!");
  };

  const config = {
    address: contractData?.contractAddress,
    abi: contractData?.abi,
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
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted, theme]);

  useEffect(() => {
    console.log({ readData });
    if (readData && readData.length > 0) {
      setTotalMinted(ethers.utils.formatUnits(readData[0], 0));
      setMaxSupply(ethers.utils.formatUnits(readData[1], 0));
    }
  }, [readData]);

  return (
    <section className="min-h-screen w-full flex flex-col border-b border-black dark:border-white px-[1.6rem] lg:px-0 relative">
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <TekoHeading>MINT</TekoHeading>
      </div>
      <div className="min-h-full flex-1 w-full flex flex-col-reverse lg:flex-row mb-[100px]">
        <div className="w-full lg:w-[50%] flex-1 flex  justify-center">
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="flex justify-between items-center w-full">
              <span className="font-teko text-[2rem] flex justify-center items-center">
                <span className="h-full flex justify-center items-center mr-[3px] mt-[-5px]">
                  {" "}
                  <IconContext.Provider
                    value={{
                      style: {
                        color: currentTheme === "dark" ? "white " : "black",
                      },
                    }}
                  >
                    <Link href="/mint">
                      <FaChevronLeft size={20} />{" "}
                    </Link>
                  </IconContext.Provider>
                </span>
                <span>TITLE</span>
              </span>
              <div className="flex items-center justify-center gap-[.2rem] text-sm">
                <div
                  className={`w-2 h-2 ${
                    totalMinted === maxSupply ? "bg-red-500" : "bg-green-500"
                  } rounded-full animate-pulse flex items-center justify-center`}
                ></div>
                {totalMinted === maxSupply ? "Ended" : "Active"}
              </div>
            </div>
            {contractData?.mintDateTime && (
              <div className="pt-4">
                <Countdown toTime={contractData?.mintDateTime} />{" "}
              </div>
            )}
            <div className="flex flex-col divide-y divide-gray-700/75">
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
              <div className="flex flex-col lg:flex-row lg:gap-[2rem]">
                <div className="flex gap-[2rem]">
                  <div className="flex flex-col py-4">
                    <span className="text-sm">Edition</span>
                    <span className="font-bold">{maxSupply || "TBD"}</span>
                  </div>
                  <div className="flex flex-col py-4">
                    <span className="text-sm">Minted</span>
                    <span className="font-bold">{totalMinted || 0}</span>
                  </div>
                </div>
                <div className="flex gap-[2rem]">
                  <div className="flex flex-col py-4">
                    <span className="text-sm">GU Holder Price</span>
                    <span className="font-bold">
                      {contractData?.holderPrice}
                    </span>
                  </div>
                  <div className="flex flex-col py-4">
                    <span className="text-sm">Price</span>
                    <span className="font-bold">{contractData?.price}</span>
                  </div>
                </div>
              </div>
              <div className="py-4 flex justify-center items-center">
                <div className="w-[90%]">
                  <ConnectWalletBtn onMint={handleMint} />
                </div>
              </div>
              <div className="flex flex-col justify-center py-2">
                <div className="flex justify-between text-sm">
                  Contract Address
                </div>
                <span className="font-bold text-sm">
                  {contractData?.contractAddress}
                </span>
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
              {contractData?.mintDateTime && (
                <div className="flex flex-col justify-center py-2">
                  <div className="flex justify-between text-sm">Mint Date</div>
                  <span className="font-bold text-sm">
                    {dayjs
                      .utc(contractData?.mintDateTime)
                      .tz(browserTimeZone)
                      .format("DD MMMM YYYY h:mm A")}
                  </span>
                </div>
              )}
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
