import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";

const InitCard = ({ data, currentTheme }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFront, setShowFront] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      setShowFront(!showFront);
    }, 150);
  };

  return (
    <div className="min-w-[330px] h-full aspect-w-16 aspect-h-9 lg:w-2/3 perspective-1000 bg-transparent">
      <IconContext.Provider
        value={{
          style: { color: currentTheme === "dark" ? "white " : "black" },
        }}
      >
        <div
          className={`flip-card-inner ${isFlipped ? "flip-card-flipped" : ""}`}
        >
          <div className="flip-card-front flex flex-col border border-black dark:border-white px-[15px] rounded-md">
            <div className="min-h-[13%] flex justify-center items-center text-[2rem] font-teko">
              {data?.title}
            </div>
            <div className="min-h-[60%] h-full relative">
              {" "}
              <Image
                src={data?.image}
                alt={data?.imageAlt}
                fill
                quality={100}
                priority
              />
            </div>
            <div className="flex items-center w-full h-[150px] border-t border-gray-700/75">
              <div className="w-full flex justify-center items-center">
                <h2
                  onClick={handleFlip}
                  className="cursor-pointer hover:text-[#ff5277] transition-all duration-300"
                >
                  VIEW DETAILS
                </h2>
              </div>
            </div>
          </div>
          <div
            className={`flip-card-back flex flex-col items-center border border-black dark:border-white transform rotate-y-180 ${
              !showFront && "hidden"
            }`}
          >
            <div className="min-h-[40px] flex items-center relative">
              <h1 className="positionCenter font-teko mt-[3px] text-[1.7rem]">
                DETAILS
              </h1>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center gap-[.5rem] justify-center">
              <p className="text-center w-full">{data?.desc}</p>
              <p className="text-center">Contact Info Section...</p>
            </div>
            <div className="flex justify-evenly items-center my-2 w-[70%]">
              <Link href={data?.discord || ""}>
                <FaDiscord size={25} className="hover:text-[#ff5277]" />
              </Link>{" "}
              <Link href={data?.discord || ""}>
                <FaTwitter size={25} />
              </Link>
            </div>
            <div className="min-h-[40px] flex justify-center item-center">
              <h2
                onClick={handleFlip}
                className="cursor-pointer mr-2 font-teko text-[1.5rem] hover:text-[#ff5277] transition-all duration-300"
              >
                SEE FRONT
              </h2>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default InitCard;
