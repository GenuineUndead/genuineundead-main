import React from "react";
import MainButton from "../MainButton";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../MainHeaderWrapper";
import MainParagraphWrapper from "../MainParagraphWrapper";
import TekoHeading from "../TekoHeading";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Section from "../Section";

const Ethos = ({ t }) => {
  return (
    <Section>
      {" "}
      <div
        className={`w-full lg:w-[55%] min-h-[50%] bg-[url('/images/background/zombie-light.png')] dark:bg-[url('/images/background/zombie.png')] bg-cover bg-center flex items-center justify-center relative`}
      >
        <Parallax speed={-20} className="w-full flex justify-center">
          <img
            src="/images/gu/zombie.png"
            className="w-[60%] aspect-square"
            alt="Viking"
          />{" "}
        </Parallax>
      </div>{" "}
      <div className="w-full lg:w-[45%] min-h-full mt-[50px] flex flex-col justify-center my-[50px] relative text-container">
        <MainHeaderWrapper>
          {" "}
          <span>
            {t("eHeading1a")} <i>{t("eHeading1b")}</i>
          </span>
          <span>
            {t("eHeading2a")} <TekoHeading>{t("eHeading2b")}</TekoHeading>{" "}
          </span>
        </MainHeaderWrapper>{" "}
        <MainParagraphWrapper width="w-[90%] lg:w-[80%]">
          {t("eContent")}
        </MainParagraphWrapper>
        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("ourEthos")}
        </MainButton>
      </div>
    </Section>
  );
};

export default withTranslation("home")(Ethos);
