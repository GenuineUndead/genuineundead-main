import React from "react";

const MainHeaderWrapper = ({ children }) => {
  return (
    <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-none font-didot flex flex-col mb-[80px]">
      {children}
    </h2>
  );
};

export default MainHeaderWrapper;
