import React from "react";
import InitSlider from "./InitSlider";
import { config } from "../../../public/data/IntiativesData";
import TekoHeading from "../../TekoHeading";

const Initiatives = () => {
  return (
    <section className="h-[110vh] w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem] lg:px-0 relative">
      <div className="w-full min-h-full flex flex-col items-center justify-center gap-[1rem] positionCenter">
        <h2
          className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col mt-[20px]`}
        >
          {" "}
          <span className="text-center md:whitespace-nowrap z-10">
            <TekoHeading>COMMUNITY</TekoHeading>
            <i> INITIATIVES</i>
          </span>
        </h2>
        <InitSlider items={config} />
      </div>
    </section>
  );
};

export default Initiatives;
