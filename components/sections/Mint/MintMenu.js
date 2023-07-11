import React from "react";
import { config } from "../../../public/data/MintConfig";
import Slider from "../../Slider";
import TekoHeading from "../../TekoHeading";

const MintMenu = () => {
  return (
    <section className="h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem] lg:px-0 relative">
      <div className="w-full min-h-full flex flex-col items-center justify-center gap-[1rem] positionCenter">
        <h2
          className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col mt-[20px]`}
        >
          {" "}
          <span className="whitespace-nowrap z-10">
            <TekoHeading>MINT</TekoHeading>
            <i> MENU</i>
          </span>
        </h2>
        <Slider items={config} />
      </div>
    </section>
  );
};

export default MintMenu;
