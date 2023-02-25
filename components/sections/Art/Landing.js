import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="min-h-screen w-full flex  justify-center items-center border-b border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem] relative overflow-hidden ">
      <h1 className="font-didot z-10 positionCenter w-screen text-center text-[13.5vw] after:content-none after:inline-block after:w-screen ">
        <span className="font-teko font-bold text-[14.7vw]">FINE </span>
        <i>PIXEL</i>
        <span className="font-teko font-bold text-[14.7vw]"> ART</span>
      </h1>
      <Parallax className="w-[80%] lg:w-[50%] aspect-square" speed={-10}>
        <Image fill src="/images/carousel/rose.png" alt="Image" priority />
      </Parallax>
    </section>
  );
};

export default Landing;
