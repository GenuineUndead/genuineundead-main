import React, { useState, useEffect } from "react";
import TekoHeading from "../../TekoHeading";
import Accordion from "../../Accordian";
import { coreValues } from "../../../public/data/CoreValues";
import { useTheme } from "next-themes";

const Values = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted]);

  return (
    <section
      id="faqs"
      className="flex flex-col h-full w-full border-b border-black dark:border-white lg:px-[3.2rem]"
    >
      <div className="flex flex-col items-center w-full  ">
        {currentTheme === "dark" ? (
          <img
            src="/images/title/values-dark.svg"
            alt="Core Values Dark"
            className="w-[37%] md:w-[36%] lg:w-[40%] xl:w-[23%] my-24"
          />
        ) : (
          <img
            src="/images/title/values-light.svg"
            alt="Core Values Light"
            className="w-[37%] md:w-[36%] lg:w-[40%] xl:w-[23%] my-24"
          />
        )}
        <div className="flex justify-center w-full">
          <Accordion faqQuestions={coreValues} />
        </div>
      </div>
    </section>
  );
};

export default Values;
