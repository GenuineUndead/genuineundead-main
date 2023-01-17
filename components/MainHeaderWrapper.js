import React from "react";

const MainHeaderWrapper = ({ children }) => {
  return (
    <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none font-didot flex flex-col mb-[80px]">
      {children}
    </h2>
  );
};

export default MainHeaderWrapper;
