import React from "react";
import MainButton from "../MainButton";
import { withTranslation } from "next-i18next";

const heading1a = `A 10K`;
const heading1b = `PIXEL`;
const heading1c = `ART`;
const heading1d = `COLLECTION`;
const heading2 = `LIKE NO OTHER. 5995 CLASSIC,`;
const heading3 = `3996 CYBERPUNK & 8 LEGENDARIES`;

const Collection = ({ t }) => {
  return (
    <section className="min-h-screen w-full flex border-b border-black dark:border-white">
      <div className="w-full md:w-[90%] min-h-full mt-[50px] flex flex-col justify-center gap-[3rem]">
        <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none font-didot flex flex-col">
          <span>
            {t("cHeading1a")} <i>{t("cHeading1b")} </i>
            <span className="font-teko font-extrabold text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem]">
              {t("cHeading1c")}{" "}
            </span>
            {t("cHeading1d")}
          </span>
          <span>{t("cHeading2")}</span>
          <span>{t("cHeading3")}</span>
        </h2>

        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("viewCollection")}
        </MainButton>
      </div>
    </section>
  );
};

export default withTranslation("home")(Collection);
