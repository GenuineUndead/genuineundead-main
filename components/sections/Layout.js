import React from "react";
import Navbar from "../sections/Navbar/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="overflow-x-hidden bg-white text-black dark:bg-black dark:text-white px-[3.2rem] transition-all duration-700 mt-[-50px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
