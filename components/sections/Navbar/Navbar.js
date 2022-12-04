import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MenuButton from "./MenuButton";
import ToggleSwitch from "./ToggleSwitch";
import NavigationMenu from "./NavigationMenu";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, []);
  return (
    <>
      <nav className="w-min-screen h-[50px] top-0 sticky z-100 bg-white  dark:bg-black flex justify-between items-center transition-all duration-700 relative">
        <div className="pl-[25px]">
          <img
            src="/images/GUIcon.svg"
            alt="GU Icon"
            className="z-101 w-[35px] h-[35px]"
          />
        </div>
        <div className="positionCenter">
          <ToggleSwitch toggleTheme={toggleTheme} theme={currentTheme} />
        </div>
        <div
          className="bg-black dark:bg-white transition-all duration-700 z-101 overflow-hidden"
          onClick={toggleMenu}
        >
          <MenuButton menuOpen={menuOpen} theme={currentTheme} />
        </div>
        <NavigationMenu menuOpen={menuOpen} />
      </nav>
    </>
  );
};

export default Navbar;
