import React from "react";
import MainHeaderWrapper from "../../MainHeaderWrapper";

const MissionStatement = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center gap-[2.5rem] border-b border-black dark:border-white px-[1.6rem] lg:px-[3.2rem]">
      <div className="w-full min-h-full flex flex-col justify-center gap-[1.5rem] lg:gap-[3rem] relative overflow-y-hidden mission-container my-[50px] lg:my-0">
        <h1 className="text-center w-full text-[2.5rem] md:text-[3.5rem] font-didot ">
          MISSION <i>STATEMENT</i>
        </h1>
        <div className="w-full min-h-full flex flex-col justify-center gap-[1.5rem] lg:gap-[3rem] relative overflow-y-hidden">
          <h2 className="font-teko font-extrabold text-[2.1rem] md:text-[3.75rem] lg:text-[4.75rem] xxl:text-[4.75rem] text-center leading-none">
            GENUINE UNDEAD AIMS TO SPEARHEAD A WEB3 RENAISSANCE BY
            <i>CULTIVATING</i> CREATIVE POTENTIAL, SUSTAINABILITY, SAFETY AND
            INCLUSIVENESS. IGNITING THE COLLECTIVE THROUGH ARTISTIC EXPRESSION
            AND EMBRACING A <i>DECENTRALISED </i>
            FUTURE.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
