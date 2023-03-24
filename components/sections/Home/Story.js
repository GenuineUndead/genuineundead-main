import React from "react";
import MainButton from "../../MainButton";
import MainParagraphWrapper from "../../MainParagraphWrapper";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const Story = ({ t }) => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white overflow-hidden relative px-[3.2rem] hidden lg:flex">
      <div className="w-full min-h-[50%] lg:ml-[10%] lg:w-[70%] lg:min-h-full my-[50px] flex flex-col justify-center z-10 relative text-container">
        <MainHeaderWrapper>
          <span>
            {t("sHeading1")} <i>{t("sHeading1a")}</i>{" "}
          </span>
          <span>
            {t("sHeading2a")} <TekoHeading> {t("sHeading2b")}</TekoHeading>3
          </span>
        </MainHeaderWrapper>{" "}
        <MainParagraphWrapper>{t("sContent")}</MainParagraphWrapper>
        <MainButton
          ariaLabel="Link to Story page"
          internalLink={false}
          link="https://medium.com/@GenuineUndead/genuine-undead-f627c448f501"
        >
          {t("ourStory")}
        </MainButton>
      </div>
      <div
        className={`w-full lg:w-[50%] min-h-[50%] absolute top-0 right-0 h-full z-1 bg-[url('/images/background/boney-light.png')] dark:bg-[url('/images/background/boney.png')] bg-cover bg-center flex items-center justify-center`}
      >
        <Parallax
          speed={-20}
          className="w-full flex justify-center w-[55%] aspect-square relative"
        >
          <Image
            src="/images/gu/watchcap.png"
            fill
            alt="Watchcap"
            quality={100}
          />
        </Parallax>
      </div>
    </div>
  );
};

export default withTranslation("home")(Story);
