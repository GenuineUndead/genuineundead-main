import React from "react";
import MainButton from "../../MainButton";
import Image from "next/image";

const Discord = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-t border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1 mt-[100px] mb-[50px] lg:my-0">
        <div className="w-[75%] lg:w-[60%] aspect-square relative">
          <Image src="/images/carousel/human.png" alt="Join Discord GU" fill />
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center mb-[100px] mt-[50px] lg:my-0 flex-1 relative community-txt-container overflow-y-hidden">
        <div className="flex flex-col gap-[1.2rem] w-full lg:w-[70%] mb-[3rem] justify-center">
          <p className="text-[1rem]">
            Our utility is access to a collective of passionate and motivated
            creators, developers, investors, academics, collectors, innovators,
            thinkers, and leaders in the future of Web3.
          </p>
          <p className="text-[1rem]">
            As a community-led project, the value flows in the opposite
            direction of a typical “utility” NFT project. Individuals in the
            community are providing time, energy, skills and passion to enhance
            and propel the project forward. Instead of waiting for the next
            announcement, asking “wen?” Genuine Undead members are constantly
            creating, brainstorming and executing on innovative and genuine ways
            to add value to the original art collection.
          </p>
          <p className="text-[1rem]">The community is the team.</p>
        </div>
        <div className="w-full lg:w-[70%]">
          <MainButton page={false} ariaLabel="Join Discord">
            JOIN DISCORD
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default Discord;
