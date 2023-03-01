import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
import Link from "next/link";

//CHANGE -- THESE i18n NEED TO BE IN ALL CAPITALS
const pageLinks = [
  {
    title: "PORTAL",
    path: "https://portal.genuineundead.io/collections/0x209e639a0ec166ac7a1a4ba41968fa967db30221",
    i18n: "portal",
  },
  { title: "ART", path: "/art", i18n: "art" },
  { title: "STORY", path: "/story", i18n: "story" },
  { title: "COMMUNITY", path: "/community", i18n: "community" },
  { title: "ETHOS", path: "/ethos", i18n: "ethos" },
  { title: "HOME", path: "/", i18n: "home" },
];

const socialLinks = [
  {
    title: "Twitter",
    link: "https://twitter.com/GenuineUndead",
    i18n: "twitter",
  },
  { title: "Discord", link: "https://discord.gg/Z5dqQ4NCk3", i18n: "discord" },
  {
    title: "Medium",
    link: "https://medium.com/@GenuineUndead/genuine-undead-f627c448f501",
    i18n: "medium",
  },
  {
    title: "Opensea",
    link: "https://opensea.io/collection/genuine-undead",
    i18n: "opensea",
  },
];

const NavigationMenu = ({ menuOpen, toggleMenu, t }) => {
  const router = useRouter();
  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className={`min-full-height fixed bg-black dark:bg-white absolute w-screen top-0 lg:w-[500px] lg:pr-[20%] md:right-0 overflow-hidden`}
          >
            <div className="flex flex-col items-center h-full p-0 md:pl-[3rem] md:pt-[2rem]">
              <div className="h-[60vh] w-screen md:w-full flex items-center justify-center md:justify-start">
                <ul className="h-full flex flex-col justify-around">
                  {pageLinks.map((link, i) => (
                    <Link key={i} href={link.path}>
                      <li
                        i={i}
                        className={`text-[5.3vh] text-center md:text-left text-white dark:text-black cursor-pointer font-didot hover:italic transform transition-all duration-500 ${
                          router.pathname === link.path ? "underline" : ""
                        }`}
                        onClick={toggleMenu}
                      >
                        {t(`${link.title}`)}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>

              <div className="h-[35vh] w-screen md:w-full flex items-center justify-center md:justify-start">
                <ul>
                  {socialLinks.map((link, i) => (
                    <li
                      i={i}
                      key={i}
                      className="text-[2vh] text-center md:text-left text-white dark:text-black cursor-pointer text-center md:text-left hover:text-[#ff5277] hover:dark:text-[#ff5277]"
                    >
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {t(`${link.title}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default withTranslation("navigation")(NavigationMenu);
