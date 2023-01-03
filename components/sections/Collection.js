import React, { useEffect } from "react";
import MainButton from "../MainButton";
import { withTranslation } from "next-i18next";

const Collection = ({ t }) => {
  return (
    <section className="min-h-screen w-full flex border-b border-t border-black dark:border-white">
      <div className="w-full md:w-[90%] min-h-full mt-[50px] flex flex-col justify-center gap-[3rem]">
        <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none font-didot flex flex-col">
          <span>
            {t("cHeading1a")} <i>{t("cHeading1b")} </i>
            <span className="font-teko font-extrabold text-[2.7rem] md:text-[3.7rem] lg:text-[4.7rem]">
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
