import React from "react";
import MainButton from "../../MainButton";
import Image from "next/image";

const ReadMore = () => {
  return (
    <section className="min-h-screen lg:min-h-[110vh] w-full flex flex-col lg:flex-row border-b border-t border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center flex-1 community-txt-container relative overflow-y-hidden mt-[100px] mb-[50px] lg:my-0">
        <div className="flex flex-col gap-[1.2rem] w-full lg:w-[70%] mb-[3rem]">
          <p className="text-[1rem] leading-6">
            There are 9 councils, or departments, designed to organize and
            deploy an army of literally thousands. Deviating from a traditional
            DAO model, where the community operates under strict decentralized
            protocol, Genuine Undead is implementing a hybrid model of
            decentralized organization. GU acknowledges the proven models of
            Web2 and has used those models in combination with the innovations
            and principle ethos of Web 3 to form a Hybrid-W3 structure. The
            Undead Council, composed of elected and appointed community members,
            acts as a “Board of Directors” to harness, curate and refine the
            unending creative passion of contributing members.
          </p>
          <p className="text-[1rem] leading-6">
            By investing in, and continually improving the tools available to
            contributors, the goal is to provide a platform to elevate creators.
            Which will in turn elevate the project through curated and
            sustainable ventures.
          </p>
        </div>
        <div className="w-full lg:w-[70%]">
          <MainButton
            page={true}
            link="https://medium.com/@GenuineUndead/genuine-undead-f627c448f501"
          >
            READ MORE
          </MainButton>
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1 mb-[100px] mt-[50px] lg:my-0">
        <div className="w-[75%] lg:w-[60%] aspect-square relative">
          <Image src="/images/animation/holo.gif" alt="Read More GU" fill />
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
