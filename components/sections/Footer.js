import React from "react";
import { withTranslation } from "next-i18next";
import { motion } from "framer-motion";

const Footer = ({ t }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between pt-[1rem] pb-[5rem] text-[.9rem] gap-[2rem] lg:gap-0 items-center text-center lg:text-left lg:items-start px-[3.2rem] bg-[#f8f8f4] dark:bg-[#191917] transition-all duration-700">
      <div>@ {t("genuineUndead")} 2023</div>
      <div>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            <a className="cursor-pointer">{t("portal")}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            <a className="cursor-pointer">{t("art")}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            <a className="cursor-pointer">{t("story")}</a>{" "}
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            <a className="cursor-pointer">{t("community")}</a>{" "}
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            <a className="cursor-pointer">{t("ethos")}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            <a className="cursor-pointer">{t("home")}</a>{" "}
          </motion.li>
        </ul>
      </div>
      <div>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a className="cursor-pointer">{t("guidelines")}</a>{" "}
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a className="cursor-pointer">{t("contact")}</a>{" "}
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a className="cursor-pointer">{t("ip")}</a>
          </motion.li>
        </ul>
      </div>
      <div>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a className="cursor-pointer">{t("discord")}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a className="cursor-pointer">{t("twitter")}</a>{" "}
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a className="cursor-pointer">{t("medium")}</a>{" "}
          </motion.li>
        </ul>
      </div>
      <div>{t("allRightsReserved")}</div>
    </div>
  );
};

export default withTranslation("common")(Footer);
