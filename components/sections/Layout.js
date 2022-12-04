import React from "react";
import Navbar from "../sections/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-black dark:bg-black dark:text-white px-[25px] transition-all duration-700 mt[-50px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
