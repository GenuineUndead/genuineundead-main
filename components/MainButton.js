import React from "react";
import { motion } from "framer-motion";
import { withTranslation } from "next-i18next";

const MainButton = ({ link, children, ariaLabel, styles, page = true }) => {
  return (
    <motion.button
      className={`border border-black dark:border-white py-[12px] px-[20px] text-[.9rem] w-[180px] ${
        page ? "rounded-full" : ""
      } ${styles}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <a href={link} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </motion.button>
  );
};

export default withTranslation("common")(MainButton);
