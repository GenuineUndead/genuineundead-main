import Image from "next/image";
import React from "react";
import MainButton from "../../MainButton";
import TekoHeading from "../../TekoHeading";

const Gallery = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white overflow-hidden relative px-[3.2rem] hidden lg:flex">
      <div className="w-full min-h-[50%] lg:ml-[10%] lg:w-[70%] lg:min-h-full my-[50px] flex flex-col justify-center gap-[2rem] z-10 relative gallery-container">
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
        <p className="text-[1rem] lg:w-[50%]">
          Astonishing in its presence both on a screen or on a wall. GU art
          exercises meticluous and interesting use of colours, layers and depth.
          GU Art is both abstract and minimalism at its peak.
        </p>
        <MainButton
          page={false}
          ariaLabel="Gallery Coming Soon"
          styles="min-w-[250px] mb-0"
        >
          GALLERY (COMING-SOON)
        </MainButton>
      </div>
      <div
        className={`w-full lg:w-[50%] min-h-[50%] absolute top-0 right-0 h-full z-1 flex items-center justify-center`}
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

export default Gallery;
