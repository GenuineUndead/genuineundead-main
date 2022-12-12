import React from "react";
import { motion } from "framer-motion";
import { withTranslation } from "next-i18next";

const MainButton = ({ link, children }) => {
  return (
    <motion.button
      className="border border-black dark:border-white py-[12px] text-[.9rem] w-[160px]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={link} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </motion.button>
  );
};

export default withTranslation("common")(MainButton);
