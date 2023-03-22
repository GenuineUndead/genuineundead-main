import React from "react";
import MainButton from "../../MainButton";
import TekoHeading from "../../TekoHeading";
import Image from "next/image";

const MobileGallery = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:gap-[2.5rem] border-b border-black dark:border-white overflow-hidden lg:hidden">
      <div className="w-full h-[40%] lg:min-h-[50%] lg:w-[50%] lg:min-h-full flex flex-col justify-center gap-[2rem] lg:my-[50px] text-container relative px-[1.6rem] pb-[100px] mt-[50px]">
        <h2
          className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col`}
        >
          <span className="whitespace-nowrap z-10">
            GALLERY <i>QUALITY</i>
          </span>
          <span>
            PIXEL <TekoHeading>ART</TekoHeading>
          </span>
        </h2>
        <p className="text-[1rem] lg:w-[50%] leading-6 ">
          Astonishing in its presence both on a screen or on a wall. GU art
          exercises meticulous and interesting use of colours, layers and depth.
          GU Art is both abstract and minimalism at its peak.
        </p>
        <MainButton
          page={true}
          ariaLabel="Gallery Coming Soon"
          styles="min-w-[250px] mb-0"
        >
          GALLERY (COMING-SOON)
        </MainButton>
      </div>
      <div
        className={`w-full lg:w-[50%] lg:min-h-[50%] flex items-center justify-center pb-[50px]`}
      >
        <div className="w-[75%] lg:w-[60%] aspect-square relative">
          <Image
            src="/images/carousel/cowboy.png"
            alt="GALLERY QUALITY GU"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default MobileGallery;
