import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const pageLinks = [
  { title: "Portal", path: "" },
  { title: "Community", path: "/community" },
  { title: "Gallery", path: "/gallery" },
  { title: "Comic", path: "/comic" },
  { title: "Home", path: "/" },
];

const socialLinks = [
  { title: "Twitter", link: "https://twitter.com/GenuineUndead" },
  { title: "Discord", link: "/community" },
  { title: "Medium", link: "/gallery" },
  { title: "Opensea", link: "/comic" },
];

const NavigationMenu = ({ menuOpen }) => {
  const router = useRouter();
  return (
    <div
      className={`min-full-height fixed bg-black dark:bg-white transition ease-in-out duration-700 absolute w-screen top-0 md:w-auto md:pr-[20%] md:right-0 ${
        menuOpen ? "opacity-100" : "opacity-0"
      } mt-[50px] overflow-hidden`}
    >
      <div className="flex flex-col h-full p-0 md:pl-[1rem] md:pt-[2rem]">
        <div className="h-[60vh] w-screen md:w-full flex items-center justify-center md:justify-start">
          <motion.ul
            variants={variants}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            className="h-full flex flex-col justify-around"
          >
            {pageLinks.map((link, i) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                i={i}
                key={i}
                className={`text-[6vh] text-center md:text-left text-white dark:text-black cursor-pointer ${
                  router.pathname === link.path ? "italic underline" : ""
                }`}
              >
                {link.title}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="h-[35vh] w-screen md:w-full flex items-center justify-center md:justify-start">
          <ul>
            {socialLinks.map((link, i) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                i={i}
                key={i}
                className="text-[2vh] text-center md:text-left text-white dark:text-black cursor-pointer text-center md:text-left"
              >
                <a href={link.link} target="_blank">
                  {link.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
