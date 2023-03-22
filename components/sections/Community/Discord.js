import React from "react";
import MainButton from "../../MainButton";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import Image from "next/image";
import TekoHeading from "../../TekoHeading";

const Discord = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1 mt-[100px] mb-[50px] lg:my-0">
        <div className="w-[75%] lg:w-[60%] aspect-square relative">
          <Image src="/images/carousel/human.png" alt="Join Discord GU" fill />
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center mb-[100px] mt-[50px] lg:my-0 flex-1 relative community-txt-container overflow-y-hidden">
        <div className="flex flex-col gap-[1.2rem] w-full lg:w-[70%] mb-[3rem] justify-center">
          <h2 className="text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col">
            COMMUNITY{" "}
            <span>
              <i>IS</i> <TekoHeading>UTILITY</TekoHeading>
            </span>
          </h2>
          <p className="text-[1rem] leading-6 ">
            Our utility is access to a collective of passionate and motivated
            creators, developers, investors, academics, collectors, innovators,
            thinkers, and leaders in the future of Web3.
          </p>
          <p className="text-[1rem] leading-6 ">
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
          <MainButton
            page={true}
            ariaLabel="Read More"
            link="https://medium.com/@GenuineUndead/genuine-undead-f627c448f501"
          >
            READ MORE
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default Discord;
