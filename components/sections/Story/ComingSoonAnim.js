import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "next-themes";

const blankImagePath = "/images/blank.png";
gsap.registerPlugin(ScrollTrigger);

function ComingSoonAnim() {
  const { systemTheme, theme } = useTheme();
  const pinTarget = useRef(null);
  const main = useRef(null);
  const genuineUndead = useRef(null);
  const mainText = useRef(null);
  const comingSoon = useRef(null);
  const background = useRef(null);

  useEffect(() => {
    const pt = pinTarget.current;
    const ctx = gsap.context(() => {
      const maintext = mainText.current;
      const comingsoon = comingSoon.current;
      const gu = genuineUndead.current;
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: pt,
          end: "+=600% bottom",
          markers: false,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
      tl.add("start");
      tl.fromTo;
      tl.fromTo(
        gu,
        { scale: 0.1 },
        { scale: window.innerWidth < 768 ? 0.8 : 0.5, duration: 1.7 }
      );
      tl.fromTo(gu, { opacity: 1 }, { opacity: 0, duration: 1 });
      tl.fromTo(maintext, { display: "none" }, { display: "block" });
      tl.fromTo(maintext, { scale: 0.1 }, { scale: 1, duration: 1.7 });
      tl.fromTo(maintext, { opacity: 1 }, { opacity: 0, duration: 1 });
      tl.fromTo(comingsoon, { display: "none" }, { display: "block" });
      tl.fromTo(
        comingsoon,
        { scale: 0.1 },
        { scale: window.innerWidth < 768 ? 0.8 : 0.5, duration: 1.7 }
      );
      // tl.fromTo(comingsoon, { opacity: 1 }, { opacity: 0, duration: 1 });
      // tl.fromTo(comingsoon, { opacity: 0 }, { opacity: 1, scale: 0.8 }, "-=1");
    }, pt);
    return () => ctx.revert();
  }, [theme]);

  return (
    <div ref={main} syle={{ scrollBehavior: "smooth" }} className="mb-[-60px]">
      <div
        ref={pinTarget}
        className="relative pin-target min-h-screen w-screen flex flex-col justify-content items-center overflow-hidden border-b border-black dark:border-white "
      >
        <div
          ref={background}
          className="z-1 absolute top-0 left-0 h-full w-full bg-[url('/images/story/GUNIVERSE.png')] bg-cover bg-center flex flex-col items-center justify-center"
        >
          <img
            src={"/images/story/GUNIVERSE.png"}
            alt="GUNIVERSE"
            style={{ display: "none" }}
          />
          <div className="relative w-full px-[1.6rem] lg:px-[3.2rem]">
            <h1 ref={genuineUndead} className="w-full text-center will-change">
              <img
                src="/images/story/genuine-undead.svg"
                alt="Main Text"
                className="scale-[1] positionTop"
              />
            </h1>
            <h1
              ref={mainText}
              className="w-full text-center px-[1.6rem] lg:px-[3.2rem] will-change"
            >
              <img
                src="/images/story/guniverse.svg"
                alt="Main Text"
                className="scale-[1] positionCenter"
              />
            </h1>
            <h1
              ref={comingSoon}
              className="w-full text-center px-[1.6rem] lg:px-[3.2rem] will-change"
            >
              <img
                src="/images/story/coming-soon.svg"
                alt="Main Text"
                className="scale-[1] positionBottom"
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonAnim;
