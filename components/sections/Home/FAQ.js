import React, { useEffect, useState } from "react";
import TekoHeading from "../../TekoHeading";
import Accordion from "../../Accordian";
import { homeFAQ } from "../../../public/data/HomeFAQ";
import { useTheme } from "next-themes";

const FAQ = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted]);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  return (
    <section
      id="faqs"
      className="flex flex-col h-full w-full border-b border-black dark:border-white lg:px-[3.2rem]"
    >
      <div className="flex flex-col items-center w-full my-24">
        {currentTheme === "dark" ? (
          <img
            src="/images/title/FAQS-dark.svg"
            alt="FAQS Dark"
            className="w-[30%] md:w-[20%] xl:w-[17%] mb-[24px]"
          />
        ) : (
          <img
            src="/images/title/FAQS-light.svg"
            alt="FAQS Light"
            className="w-[30%] md:w-[20%] xl:w-[17%] mb-[24px]"
          />
        )}
        <div className="flex justify-center w-full">
          <Accordion faqQuestions={homeFAQ} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
