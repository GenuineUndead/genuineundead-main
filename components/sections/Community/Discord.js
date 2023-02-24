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
        <div className="flex flex-col gap-[1.2rem] w-full lg:w-[60%] mb-[3rem] justify-center">
          <p className="text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing.
          </p>
          <p className="text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing vitae proin. Imperdiet
            nulla malesuada pellentesque elit eget gravida. Mauris nunc congue
            nisi vitae suscipit tellus. Ac odio tempor orci dapibus ultrices in
            iaculis. Rhoncus aenean vel elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant. Ac auctor augue mauris augue.
          </p>
          <p className="text-[1rem]">The community is the team.</p>
        </div>
        <div className="w-full lg:w-[60%]">
          <MainButton page={false} ariaLabel="Join Discord">
            JOIN DISCORD
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default Discord;
