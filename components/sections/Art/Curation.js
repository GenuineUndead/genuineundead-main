import React from "react";
import TekoHeading from "../../TekoHeading";
import MainButton from "../../MainButton";
import Image from "next/image";

const Curation = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center flex-1 community-txt-container relative overflow-y-hidden">
        <div className="flex flex-col gap-[2.5rem] w-full lg:w-[60%] md:my-[50px] ">
          <h2
            className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col `}
          >
            {" "}
            <i>METICULOUS</i>
            <TekoHeading>CURATION</TekoHeading>
          </h2>
          <p className="text-[1rem] leading-6 ">
            Over 200 hand drawn traits ranging from classic to cyber with a
            diverse set of base traits. Trait combinations that have been
            curated to compliment one another providing context and a deep
            narrative within the collection. Nomenclature that invokes a sense
            of imagination and spontaneous storytelling. A magically inspiring
            collection. Art not limited to the pixels but rather, art above art.
          </p>
          <MainButton
            ariaLabel="Explore Traits Coming Soon"
            page={true}
            styles="min-w-[300px] mb-0"
          >
            EXPLORE TRAITS (COMING-SOON)
          </MainButton>
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1">
        <div className="w-[75%] lg:w-[60%] aspect-square relative md:mb-[50px]">
          <Image
            src="/images/art/GENUINE-UNDEAD-827.png"
            alt="GU 827"
            fill
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Curation;
