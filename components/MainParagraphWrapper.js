import React from "react";

const MainParagraphWrapper = ({ children }) => {
  return (
    <p className="text-[.9rem] w-[90%] lg:w-[60%] leading-[1.4rem] mb-[60px]">
      {children}
    </p>
  );
};

export default MainParagraphWrapper;
