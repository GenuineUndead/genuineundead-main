import React from "react";
import MainButton from "../../MainButton";
import Image from "next/image";
import TekoHeading from "../../TekoHeading";

const ReadMore = () => {
  return (
    <section className="min-h-screen lg:min-h-[110vh] w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center flex-1 community-txt-container relative overflow-y-hidden mt-[100px] mb-[50px] lg:my-0">
        <div className="flex flex-col gap-[1.2rem] w-full lg:w-[70%] mb-[3rem]">
          <h2 className="text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col">
            CHANGING{" "}
            <span>
              <i>THE</i> <TekoHeading>META</TekoHeading>
            </span>
          </h2>
          <p className="text-[1rem] leading-6">
            Genuine Undead has 9 councils, or departments, designed to organise
            and deploy an army of literally thousands. Deviating from a
            traditional DAO model, where the community operates under strict
            decentralised protocol, Genuine Undead implements a hybrid model of
            decentralised organisation. GU acknowledges the proven models of
            Web2 and has used those models in combination with the innovations
            and principle ethos of Web 3 to form a proprietary Hybrid Web 2.5
            structure as documented in the Genuine Undead Governance Policies.
          </p>
          <p className="text-[1rem] leading-6">
            By investing in, and continually improving the tools and resources
            available to contributors, Genuine Undead provides a launchpad to
            elevate ideas and initiatives of community members to build
            alongside the Genuine Undead Art, Brand and Ethos.
          </p>
        </div>
        <div className="w-full lg:w-[70%]">
          <MainButton page={true} link="/files/GU_GUIDELINES.pdf">
            GUIDELINES
          </MainButton>
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1 mb-[100px] mt-[50px] lg:my-0">
        <div className="w-[75%] lg:w-[60%] aspect-square relative">
          <Image
            src="/images/animation/holo.gif"
            alt="Read More GU"
            fill
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
