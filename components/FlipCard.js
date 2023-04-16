import React, { useState } from "react";
import Image from "next/image";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-w-[150%] md:min-w-[170%] lg:min-w-[110%] xl:min-w-[85%] h-full perspective-1000 bg-transparent">
      <div
        className={`flip-card-inner ${isFlipped ? "flip-card-flipped" : ""}`}
      >
        <div className="flip-card-front flex flex-col border border-black dark:border-white ">
          <div className="min-h-[40px] flex items-center relative">
            <div className="px-2 flex items-center gap-[.2rem]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex items-center justify-center"></div>
              Active
            </div>
            <h1 className="positionCenter font-teko mt-[3px] text-[1.7rem]">
              TITLE
            </h1>
          </div>
          <div className="min-h-[75%] relative">
            {" "}
            <Image
              src="/images/mint/stub-nature.jpg"
              alt="STUB NATURE"
              fill
              quality={100}
              priority
            />
          </div>
          <div className="h-full p-2">Info section</div>
          <div className="flex justify-end">
            <h2 onClick={handleFlip} className="cursor-pointer mr-2">
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
              <div className="flex items-center justify-between px-2">
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
