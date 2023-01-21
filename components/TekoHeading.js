import React from "react";

const TekoHeading = ({ children }) => {
  return (
    <span className="font-teko font-extrabold text-[3.2rem] md:text-[5.5rem] lg:text-[6.25rem]">
      {children}
    </span>
  );
};

export default TekoHeading;
