import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const BeGenuine = () => {
  return (
    <section className="min-h-screen w-full flex  justify-center items-center border-b border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem] relative overflow-y-hidden ">
      <h1 className="font-didot z-10 positionCenter w-full text-center text-[15vw]">
        <span className="font-teko font-bold text-[16.2vw]">BE</span>{" "}
        <i>GENUINE</i>
      </h1>
      <Parallax className="w-[80%] lg:w-[50%] aspect-square" speed={-10}>
        <Image
          fill
          src="/images/community/community-landing.png"
          alt="Image"
          priority
        />
      </Parallax>
    </section>
  );
};

export default BeGenuine;
