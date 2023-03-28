import React from "react";

const SplashScreen = () => {
  return (
    <div className="bg-[#f8f8f4] text-[#191917] dark:bg-[#191917] dark:text-[#f8f8f4] min-w-screen min-h-screen flex flex-col items-center justify-center">
      <img src="/images/splash-loader.gif" alt="loading skull" />
    </div>
  );
};

export default SplashScreen;
