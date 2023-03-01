import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import MenuButton from "./MenuButton";
import ToggleSwitch from "./ToggleSwitch";
import NavigationMenu from "./NavigationMenu";
import Link from "next/link";

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
      <nav
        id="navbar"
        className="w-min-screen h-[50px] top-0 sticky bg-[#f8f8f4] dark:bg-[#191917] flex justify-between items-center relative above-all bg-opacity-10 backdrop-filter backdrop-blur-lg"
      >
        <div className="pl-[1.6rem] lg:pl-[3.2rem]">
          <Link href="/">
            <div className={`z-101 flex items-center w-[35px] h-[35px] `}>
              <img
                src="/images/GUicon-light.svg"
                alt="gu icon light"
                className="cursor-pointer"
              />
            </div>
          </Link>
        </div>
        <div className="positionCenter">
          <ToggleSwitch toggleTheme={toggleTheme} theme={currentTheme} />
        </div>
        <div
          className={`bg-[#191917] dark:bg-[#f8f8f4] transition-all duration-700 overflow-hidden above-all`}
          onClick={toggleMenu}
        >
          <MenuButton menuOpen={menuOpen} theme={currentTheme} />
        </div>
        <NavigationMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
