import React from "react";
import MainHeaderWrapper from "../../MainHeaderWrapper";

const MissionStatement = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center gap-[2.5rem] border-b border-black dark:border-white px-[1.6rem] lg:px-[3.2rem]">
      <h1 className="text-center w-full text-[1.5rem] md:text-[2.5rem]">
        MISSION STATEMENT
      </h1>
      <div className="w-full min-h-full flex flex-col justify-center gap-[1.5rem] lg:gap-[3rem] relative overflow-y-hidden">
        <MainHeaderWrapper styles="lg:my-[1rem] text-center text-[2.3rem] md:text-[1.5rem] lg:text-[2.5rem] xl:text-[3rem] xxl:text-[4rem] ">
          <span className="">
            GENUINE UNDEAD AIMS TO SPEARHEAD A WEB3{" "}
            <span className="font-teko font-extrabold text-[2.75rem] md:text-[2.25rem] lg:text-[3.25rem] xl:text-[3.75rem] xxl:text-[4.75rem]">
              RENAISSANCE
            </span>{" "}
            BY <i>CULTIVATING</i> CREATIVE POTENTIAL, SUSTAINABILITY, SAFETY AND
            INCLUSIVENESS. IGNITING THE COLLECTIVE THROUGH ARTISTIC EXPRESSION
            AND EMBRACING A <i>DECENTRALISED </i>
            FUTURE.
          </span>
        </MainHeaderWrapper>
      </div>
    </section>
  );
};

export default MissionStatement;
