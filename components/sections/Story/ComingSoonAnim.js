import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "next-themes";

const blankImagePath = "/images/blank.png";
gsap.registerPlugin(ScrollTrigger);

function ComingSoonAnim() {
  const { systemTheme, theme } = useTheme();
  const [mainTextImage, setMainTextImage] = useState(blankImagePath);
  const pinTarget = useRef(null);
  const main = useRef(null);
  const mainText = useRef(null);
  const comingSoon = useRef(null);

  useEffect(() => {
    const pt = pinTarget.current;
    const ctx = gsap.context(() => {
      const maintext = mainText.current;
      const comingsoon = comingSoon.current;
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: pt,
          end: "+=350% bottom",
          markers: false,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
      tl.fromTo(maintext, { scale: 0.1 }, { scale: 1, duration: 1.7 });
      tl.fromTo(maintext, { opacity: 1 }, { opacity: 0, duration: 1 });
      tl.fromTo(comingsoon, { opacity: 0 }, { opacity: 1 }, "-=1");
    }, pt);
    return () => ctx.revert();
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      setMainTextImage("/images/story/guniverse-light.svg");
    } else {
      setMainTextImage("/images/story/guniverse-dark.svg");
    }
  }, [theme]);

  return (
    <div ref={main} syle={{ scrollBehavior: "smooth" }} className="mb-[-60px]">
      <div
        ref={pinTarget}
        className="relative pin-target min-h-screen w-screen flex flex-col justify-content items-center overflow-hidden border-b border-black dark:border-white bg-[url('/images/story/GUNIVERSE.jpg')] bg-cover bg-center"
      >
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <h1
            ref={mainText}
            className="w-full text-center px-[1.6rem] lg:px-[3.2rem]"
          >
            <img src={mainTextImage} alt="Main Text" className="scale-[1]" />
          </h1>
          <h1
            ref={comingSoon}
            className="text-center w-full font-teko text-[2.5rem] mt-[15px]"
          >
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonAnim;
