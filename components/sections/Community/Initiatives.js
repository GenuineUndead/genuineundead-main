import React from "react";
import { config } from "../../../public/data/IntiativesData";
import TekoHeading from "../../TekoHeading";
import Slider from "./Slider";

const Initiatives = () => {
  return (
    <section className="min-h-[110vh] md:min-h-[100vh] lg:min-h-[125vh] w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem] lg:px-0 relative overflow-y-hidden inits-container">
      <div className="w-full min-h-full flex flex-col items-center justify-center gap-[1rem] positionCenter lg:my-[50px]">
        <h2
          className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col mt-[20px] mb-[50px]`}
        >
          {" "}
          <span className="text-center md:whitespace-nowrap z-10">
            <TekoHeading>COMMUNITY</TekoHeading>
            <i> INITIATIVES</i>
          </span>
        </h2>
        <Slider />
      </div>
    </section>
  );
};

export default Initiatives;
