import React from "react";
import TekoHeading from "../../TekoHeading";

const Utility = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1 mt-[100px] mb-[50px] lg:my-0 lg:py-[150px]">
        <div className="w-full h-full flex flex-col justify-center items-center lg:items-start lg:pl-[10%]">
          <h1 className="font-didot text-[17vw] lg:text-[8.5vw]">UTILITY</h1>
          <h4 className="font-didot text-[10vw] lg:text-[4vw]">
            <i>NOUN</i>
          </h4>
          <h4 className="text-[10vw] lg:text-[4vw]">
            /JU:'T<span className="text-[6vw] lg:text-[3vw]">I</span>L.
            <span className="text-[11vw] lg:text-[5vw]">ə</span>.TI/
          </h4>{" "}
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center mb-[100px] mt-[50px] lg:my-0 flex-1 relative community-txt-container overflow-y-hidden">
        <div className="w-full h-full flex flex-col justify-center items-center lg:pl-[10%]">
          <div>
            <h2
              className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col justify-center`}
            >
              <span>
                THE STATE OF <i>BEING</i> <TekoHeading>USEFUL,</TekoHeading>
              </span>
              PROFITABLE,{" "}
              <span>
                OR <i>BENEFICIAL</i>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Utility;
