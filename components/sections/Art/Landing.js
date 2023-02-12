import React from "react";

const Landing = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center border-b border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem] relative">
      {" "}
      <h1 className="font-didot z-10 positionCenter w-full text-center text-[8.5vw] after:content-none after:inline-block after:w-[100%] ">
        <span className="font-teko font-bold text-[9.1vw]">FINE</span>
        <i>PIXEL</i>
        <span className="font-teko font-bold text-[9.1vw]">ART</span>
      </h1>
      <img
        src="/images/carousel/rose.png"
        alt="GENUINE GU"
        className="positionCenter w-[40%] aspect-square z-1"
      />
    </section>
  );
};

export default Landing;
