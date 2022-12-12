import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MenuButton from "./MenuButton";
import ToggleSwitch from "./ToggleSwitch";
import NavigationMenu from "./NavigationMenu";
import GUIcon from "./GUIcon";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
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
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted]);
  return (
    <>
      <nav className="w-min-screen h-[50px] top-0 sticky bg-white dark:bg-black flex justify-between items-center transition-all duration-700 relative">
        <div className="pl-[2.5rem] md:pl-[3.2rem]">
          <div className="z-101 w-[30px] h-[30px]">
            <GUIcon />
          </div>
        </div>
        <div className="positionCenter">
          <ToggleSwitch toggleTheme={toggleTheme} theme={currentTheme} />
        </div>
        <div
          className={`bg-black dark:bg-white transition-all duration-700 overflow-hidden`}
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
