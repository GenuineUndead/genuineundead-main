import React from "react";
import MainButton from "../MainButton";
import { withTranslation } from "next-i18next";

//OVER 200 HAND DRAWN TRAITS
let content = `OVER 200 HAND \n DRAWN TRAITS`;
const heading1a = "OVER";
const heading1b = "200";
const heading1c = "HAND";
const heading2a = "DRAWN";
const heading2b = "TRAITS";

let content2 = `The principle of what can be achieved in a 24 x 24 pixel format. Unsurpassed detail, depth and fidelity 
makes GU the best pixel art collection to ever exist.`;

const Art = ({ t }) => {
  return (
    <div className="min-h-screen w-full flex flex-col  lg:flex-row border-b border-black dark:border-white ">
      <div className="w-full lg:w-[55%] min-h-[50%]"></div>
      <div className="w-full min-h-[50%] lg:w-[45%] lg:min-h-full mt-[50px] flex flex-col justify-center gap-[3rem]">
        <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none font-didot flex flex-col">
          <span>
            {t("aHeading1a")}{" "}
            <span className="font-teko font-extrabold text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem]">
              {t("aHeading1b")}{" "}
            </span>
            {t("aHeading1c")}
          </span>
          <span>
            <i>{t("aHeading2a")} </i>
            {t("aHeading2b")}
          </span>
        </h2>
        <p className="text-[.9rem] w-[90%] md:w-[75%]">{t("aContent")}</p>
        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("theArt")}
        </MainButton>
      </div>
    </div>
  );
};

export default withTranslation("home")(Art);
