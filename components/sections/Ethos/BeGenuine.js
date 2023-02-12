import React from "react";

const BeGenuine = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center border-b border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem] relative">
      {" "}
      <h1 className="font-didot z-10 positionCenter w-full text-center text-[15vw]">
        <span className="font-teko font-bold">BE</span> <i>GENUINE</i>
      </h1>
      <img
        src="/images/community/community-landing.png"
        alt="GENUINE GU"
        className="positionCenter w-[40%] aspect-square z-1"
      />
    </section>
  );
};

export default BeGenuine;
