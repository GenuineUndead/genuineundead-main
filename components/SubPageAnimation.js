import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "next-themes";

const blankImagePath = "/images/blank.png";
gsap.registerPlugin(ScrollTrigger);

function SubPageAnimation({
  leftImage,
  rightImage,
  textImageLight,
  textImageDark,
  mobileTextDark,
  mobileTextLight,
}) {
  const { systemTheme, theme } = useTheme();
  const [mainTextImage, setMainTextImage] = useState(blankImagePath);
  const [mainMobileTextImage, setMainMobileTextImage] =
    useState(blankImagePath);
  const pinTarget = useRef(null);
  const main = useRef(null);
  const mainText = useRef(null);
  const mobileMainText = useRef(null);
  const imageDiv1 = useRef(null);
  const imageDiv2 = useRef(null);

  useLayoutEffect(() => {
    const pt = pinTarget.current;
    const ctx = gsap.context(() => {
      const maintext = mainText.current;
      const mobilemaintext = mobileMainText.current;
      const imgDiv1 = imageDiv1.current;
      const imgDiv2 = imageDiv2.current;

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: pt,
          end: "+=270% bottom",
          markers: false,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
      tl.add("start");
      tl.fromTo(imgDiv2, { y: 0 }, { y: -1000, duration: 3 }, "start");
      tl.fromTo(imgDiv1, { y: 0 }, { y: 1000, duration: 3 }, "start");
      tl.fromTo(maintext, { scale: 0.1 }, { scale: 1, duration: 1.7 }, "start");
      tl.fromTo(
        mobilemaintext,
        { scale: 0.3 },
        { scale: 1, duration: 1.7 },
        "start"
      );
    }, pt);
    return () => ctx.revert();
  }, [textImageDark]);

  useEffect(() => {
    if (theme === "dark") {
      setMainTextImage(textImageLight);
      setMainMobileTextImage(mobileTextLight);
    } else {
      setMainTextImage(textImageDark);
      setMainMobileTextImage(mobileTextDark);
    }
  }, [theme]);

  return (
    <div ref={main} syle={{ scrollBehavior: "smooth" }}>
      <div
        ref={pinTarget}
        className="relative pin-target min-h-screen w-full flex flex-col justify-content items-center overflow-hidden border-b border-black dark:border-white"
      >
        <div className="w-full lg:hidden">
          <h1
            ref={mobileMainText}
            className="w-full text-center px-[1.6rem] lg:px-[3.2rem] min-h-screen flex flex-col items-center justify-center will-change"
          >
            <img src={mainMobileTextImage} alt="Main Mobile Text" />
          </h1>
        </div>
        <div className="w-full hidden lg:block">
          <h1
            ref={mainText}
            className="w-full text-center px-[1.6rem] lg:px-[3.2rem] min-h-screen flex flex-col items-center justify-center will-change"
          >
            <img src={mainTextImage} alt="Main Text" className="scale-[1]" />
          </h1>
        </div>
        <div
          id="rightSideImages"
          className="absolute top-[60%] lg:top-[31%] right-[8%] lg:right-[20%] flex flex-col  w-[40vw] gap-[40vw] md:w-[30vw] md:gap-[30vw] lg:w-[20vw] lg:gap-[20vw] will-change"
          ref={imageDiv1}
        >
          <div className="h-full aspect-square relative">
            <img src={rightImage} alt={`Left GU`} className="h-full w-full" />
          </div>
        </div>

        <div
          id="leftSideImages"
          className="absolute top-[20%] md:top-[20%] lg:top-[31%] left-[8%] lg:left-[20%] flex flex-col  w-[40vw] gap-[40vw] md:w-[30vw] md:gap-[30vw] lg:w-[20vw] lg:gap-[20vw] will-change"
          ref={imageDiv2}
        >
          <div className="h-full aspect-square relative">
            <img src={leftImage} alt={`Left GU`} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubPageAnimation;
