import React from "react";
import { withTranslation } from "next-i18next";
import Link from "next/link";

const MainButton = ({
  link,
  children,
  ariaLabel,
  styles,
  page = true,
  internalLink,
}) => {
  if (internalLink) {
    return (
      <Link href={link}>
        <button
          aria-label={ariaLabel}
          className={`border border-black dark:border-white py-[12px] px-[20px] text-[.9rem] w-[180px] hover:border-[#ff5277] hover:dark:border-[#ff5277] transition-all duration-300 ${
            page ? "rounded-full" : ""
          } ${styles}`}
        >
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button
      aria-label={ariaLabel}
      className={`border border-black dark:border-white py-[12px] px-[20px] text-[.9rem] w-[180px] hover:border-[#ff5277] hover:dark:border-[#ff5277] transition-all duration-300 ${
        page ? "rounded-full" : ""
      } ${styles}`}
    >
      <a href={link} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </button>
  );
};

export default withTranslation("common")(MainButton);
