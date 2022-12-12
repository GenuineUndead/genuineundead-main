import React from "react";
import MainButton from "../MainButton";
import { withTranslation } from "next-i18next";

let heading1 = `A PIVOTAL `;
let heading2a = `MOMENT IN`;
const heading2b = `WEB`;

let content2 = `Created by an anonymous artist and gifted to the people, GU was born in the bear and raised by the community.
Communicating through three green papers 'The Founder' empowered a collective of like-minded, passionate and willing individuals,
all sharing the same ethos of creativity, decentralization, sustainability, inclusivity and safety.`;

const Story = ({ t }) => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white">
      <div className="w-full min-h-[50%] lg:w-[55%] lg:min-h-full mt-[50px] flex flex-col justify-center gap-[3rem]">
        <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none font-didot flex flex-col">
          <span>{t("sHeading1")}</span>
          <span>
            {t("sHeading2a")}{" "}
            <span className="font-teko font-extrabold text-[2.7rem] md:text-[3.7rem] lg:text-[4.7rem]">
              {t("sHeading2b")}
            </span>
            3
          </span>
        </h2>
        <p className="text-[.9rem] w-[90%] lg:w-[60%]">{t("sContent")}</p>
        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("ourStory")}
        </MainButton>
      </div>
      <div className="w-full md:w-[45%]"></div>
    </div>
  );
};

export default withTranslation("home")(Story);
