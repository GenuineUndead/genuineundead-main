import React from "react";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";

const Utility = () => {
  return (
    // <section className="min-h-screen w-full flex flex-col lg:flex-row lg:gap-[2.5rem] border-b border-black dark:border-white overflow-hidden ">
    //   <div
    //     className={`w-full lg:w-[50%] min-h-full lg:min-h-[50%] flex items-center justify-center flex-1`}
    //   >
    //     <div className="flex flex-col gap-[1rem] h-full justify-center">
    //       <h1 className="font-didot text-[8.5vw]">UTILITY</h1>
    //       <h4 className="font-didot text-[4vw]">
    //         <i>NOUN</i>
    //       </h4>
    //       <h4 className="text-[4vw]">/JU:'TiL.e.tv</h4>
    //     </div>
    //   </div>
    //   <div className="w-full h-[50%] lg:min-h-[50%] lg:w-[50%] lg:min-h-full flex flex-col justify-center lg:my-[50px] text-container relative px-[1.6rem] pb-[100px] mt-[20px] flex-1">
    //     <h2
    //       className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col justify-center mb-[150px]`}
    //     >
    //       <span>
    //         THE STATE OF <i>BEING</i> <TekoHeading>USEFUL,</TekoHeading>
    //       </span>
    //       PROFITABLE, OR <i>BENEFICIAL</i>
    //     </h2>
    //   </div>
    // </section>
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-t border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1 mt-[100px] mb-[50px] lg:my-0">
        <div className="flex flex-col gap-[1rem] h-full justify-center">
          <h1 className="font-didot text-[8.5vw]">UTILITY</h1>
          <h4 className="font-didot text-[4vw]">
            <i>NOUN</i>
          </h4>
          <h4 className="text-[4vw]">/JU:'TiL.e.tv</h4>
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center mb-[100px] mt-[50px] lg:my-0 flex-1 relative community-txt-container overflow-y-hidden">
        <div className="flex flex-col gap-[1.2rem] w-full lg:w-full mb-[3rem] justify-center items-center lg:mt-[25px]">
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
    </section>
  );
};

export default Utility;
