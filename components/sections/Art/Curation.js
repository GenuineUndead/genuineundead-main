import React from "react";
import TekoHeading from "../../TekoHeading";
import MainButton from "../../MainButton";
import Image from "next/image";

const Curation = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-t border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center flex-1 community-txt-container relative overflow-y-hidden">
        <div className="flex flex-col gap-[2.5rem] w-full lg:w-[60%] ">
          <h2
            className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col `}
          >
            {" "}
            <i>METICULOUS</i>
            <TekoHeading>CURATION</TekoHeading>
          </h2>
          <p className="text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing vitae proin. Imperdiet
            nulla malesuada pellentesque elit eget gravida. Mauris nunc congue
            nisi vitae suscipit tellus. Ac odio tempor orci dapibus ultrices in
            iaculis.
          </p>
          <MainButton
            ariaLabel="Explore Traits Coming Soon"
            page={false}
            styles="min-w-[300px] mb-0"
          >
            EXPLORE TRAITS (COMING-SOON)
          </MainButton>
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1">
        <div className="w-[75%] lg:w-[60%] aspect-square relative">
          <Image
            src="/images/carousel/captain.png"
            alt="GALLERY QUALITY GU"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Curation;
