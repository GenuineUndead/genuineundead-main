import React from "react";
import MainButton from "../MainButton";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../MainHeaderWrapper";
import MainParagraphWrapper from "../MainParagraphWrapper";

const heading1a = "HERE TO";
const heading1b = "MAKE";
const heading2a = "WEB3";
const heading2b = "BETTER";

let content2 = `Inspired by The Founder's green papers, the art and each other. GU has thought 
long and hard about what it stands for in Web3, as an art project / organisation and in the world 
as a whole.`;

const Ethos = ({ t }) => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white">
      <div className="w-full lg:w-[55%]"></div>
      <div className="w-full lg:w-[45%] min-h-fu5ll mt-[50px] flex flex-col justify-center">
        <MainHeaderWrapper>
          {" "}
          <span>
            {t("eHeading1a")} <i>{t("eHeading1b")}</i>
          </span>
          <span>
            {t("eHeading2a")}{" "}
            <span className="font-teko font-extrabold text-[2.7rem] md:text-[3.7rem] lg:text-[4.7rem]">
              {t("eHeading2b")}
            </span>
          </span>
        </MainHeaderWrapper>{" "}
        <MainParagraphWrapper>{t("eContent")}</MainParagraphWrapper>
        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("ourEthos")}
        </MainButton>
      </div>
    </section>
  );
};

export default withTranslation("home")(Ethos);
