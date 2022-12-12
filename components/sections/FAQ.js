import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import styles from "../../styles/FAQ.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const heading1a = "FA";
const heading1b = "QS";

const FAQ = () => {
  const hiddenTexts = [
    {
      question: "What is Genuine Undead?",
      answer:
        "Genuine Undead is an NFT project focused on art, connection and community.",
    },
    {
      question: "What is the story behind Genuine Undead?",
      answer:
        "Genuine Undead was released in August 2022 as a free mint. The artist and developer of the project is anonymous. Shortly after the project was launched, the founder handed over control of the project to the community, unleashing the #UndeadArmy.",
    },
    {
      question: "What network/chain is this on?",
      answer: "Ethereum ERC-721A",
    },
    {
      question: "Where can I buy Genuine Undead?",
      answer: "OS, Looksrare, X2y2, Gem, Sudo",
    },
    {
      question: "What royalties are involved?",
      answer:
        "The founder takes a 2.5% royalty on all sales, plus any fees charged by exchange platforms.",
    },
  ];

  return (
    <section
      id="faqs"
      className="flex flex-col h-full w-full border-b border-black dark:border-white"
    >
      <div className="flex flex-col items-center w-full my-24 ">
        <header className="mb-[3rem] flex justify-center">
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none font-didot flex">
            <span className="font-teko font-extrabold text-[2.7rem] md:text-[3.7rem] lg:text-[4.5rem]">
              FA
            </span>
            QS
          </h2>
        </header>
        <div className="flex justify-center w-full">
          <Accordion faqQuestions={hiddenTexts} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const Accordion = ({ faqQuestions }) => {
  return (
    <div className={`${styles.accordion} w-full flex flex-col items-center`}>
      {faqQuestions.map((question, i) => (
        <AccordionItemMotion
          key={`${question}-${i}`}
          question={question.question}
          answer={question.answer}
          idx={i}
          questionsLength={faqQuestions?.length}
        />
      ))}
    </div>
  );
};

const AccordionItemMotion = ({ question, answer, idx, questionsLength }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted, theme]);
  return (
    <motion.div
      className={` w-[90%] md:w-[70%] border-t  ${
        currentTheme === "dark" ? "border-white" : "border-black"
      } ${idx == questionsLength - 1 ? "border-b" : ""} py-[1rem]`}
    >
      <AnimatePresence>
        <motion.div
          key="question"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex py-[1rem] text-[.9rem] md:text-[1rem]"
        >
          <span className="w-[10%] font-didot mr-[5px]">
            <i>0{idx + 1}</i>
          </span>
          <span className="w-full">{question}</span>
          <span className="w-[5%] ml-[5px] cursor-pointer flex my-auto h-full">
            {isOpen ? <FaMinus /> : <FaPlus />}
          </span>
        </motion.div>

        {isOpen && (
          <motion.div
            key="answer"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="py-[1rem] w-full flex"
          >
            <span className="w-[10%] mr-[5px]"></span>
            <span className="w-full text-[.95rem]">{answer}</span>
            <span className="w-[5%] ml-[5px]"></span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
