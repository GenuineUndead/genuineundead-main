import React from "react";
import MainButton from "../../MainButton";
import MainParagraphWrapper from "../../MainParagraphWrapper";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const Ethos = ({ t }) => {
  return (
    <section className="min-h-[115vh] lg:min-h-screen  w-full flex flex-col lg:flex-row lg:gap-[2.5rem] border-b border-t border-black dark:border-white overflow-hidden">
      <div
        className={`w-full lg:w-[50%] lg:min-h-[50%] bg-[url('/images/background/zombie-light.png')] dark:bg-[url('/images/background/zombie.png')] bg-cover bg-center flex items-center justify-center flex-1`}
      >
        <Parallax
          speed={-20}
          className="w-full hidden lg:flex justify-center w-[60%]  aspect-square"
        >
          <Image src="/images/gu/zombie.png" fill alt="Zombie" />{" "}
        </Parallax>
        <div className="w-[70%] md:w-[55%] aspect-square lg:hidden relative">
          <Image src="/images/gu/zombie.png" fill alt="Zombied" />
        </div>
      </div>
      <div className="w-full min-h-[50%] lg:w-[50%] lg:min-h-full mt-[50px] mb-[100px] lg:my-[50px] flex flex-col justify-center z-10 relative text-container  px-[1.6rem]">
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
        <MainButton
          ariaLabel="Link to Ethos page"
          internalLink={true}
          link="/ethos"
        >
          {t("ourEthos")}
        </MainButton>
      </div>
    </section>
  );
};

export default withTranslation("home")(Ethos);
