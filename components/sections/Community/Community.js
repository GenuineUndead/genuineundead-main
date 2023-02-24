import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const Community = () => {
  return (
    <section className="min-h-screen w-full flex  justify-center items-center border-b border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem] relative overflow-y-hidden ">
      <h1 className="font-didot z-10 positionCenter w-full text-center text-[8.5vw] after:content-none after:inline-block after:w-[100%] ">
        COMMUNITY <i>IS</i>{" "}
        <span className="font-teko font-bold text-[9.7vw]">UTILITY</span>
      </h1>
      <Parallax className="w-[80%] lg:w-[50%] aspect-square" speed={-10}>
        <Image fill src="/images/animation/faceless.png" alt="Image" priority />
      </Parallax>
    </section>
  );
};

export default Community;
