import React from "react";

const MainHeaderWrapper = ({ children, styles }) => {
  return (
    <h2
      className={`text-[2rem] md:text-[4rem] lg:text-[5.5rem] leading-none font-didot flex flex-col mb-[80px] ${styles}`}
    >
      {children}
    </h2>
  );
};

export default MainHeaderWrapper;
