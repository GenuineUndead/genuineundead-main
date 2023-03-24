import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "next-themes";

const blankImagePath = "/images/blank.png";
gsap.registerPlugin(ScrollTrigger);

function ComingSoonAnim() {
  const { systemTheme, theme } = useTheme();
  const [mainTextImage, setMainTextImage] = useState(
    "/images/story/guniverse-light.svg"
  );
  const pinTarget = useRef(null);
  const main = useRef(null);
  const mainText = useRef(null);
  const comingSoon = useRef(null);
  const background = useRef(null);

  useEffect(() => {
    const pt = pinTarget.current;
    const ctx = gsap.context(() => {
      const maintext = mainText.current;
      const comingsoon = comingSoon.current;
      const bg = background.current;
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
      tl.add("start");
      tl.fromTo(maintext, { scale: 0.1 }, { scale: 1, duration: 1.7 }, "start");
      tl.fromTo(
        bg,
        {
          filter: "blur(5px)",
        },
        { filter: "blur(0px)", duration: 1.7 },
        "start"
      );
      tl.fromTo(maintext, { opacity: 1 }, { opacity: 0, duration: 1 });
      tl.fromTo(comingsoon, { opacity: 0 }, { opacity: 1 }, "-=1");
    }, pt);
    return () => ctx.revert();
  });

  return (
    <div ref={main} syle={{ scrollBehavior: "smooth" }} className="mb-[-60px]">
      <div
        ref={pinTarget}
        className="relative pin-target min-h-screen w-screen flex flex-col justify-content items-center overflow-hidden border-b border-black dark:border-white bg-[url('/images/story/GUNIVERSE.jpg')] bg-cover bg-center"
      >
        <img
          ref={background}
          src="/images/story/GUNIVERSE.jpg"
          alt="GUNIVERSE BG"
          className="z-1 absolute top-0 left-0 h-full w-full"
        />
        <div className="w-full min-h-screen flex flex-col justify-center items-center above-all">
          <h1
            ref={mainText}
            className="w-full text-center px-[1.6rem] lg:px-[3.2rem]"
          >
            <img src={mainTextImage} alt="Main Text" className="scale-[1]" />
          </h1>
          <h1
            ref={comingSoon}
            className="text-center w-full font-teko text-[2.5rem] mt-[15px]  text-[#f8f8f4] "
          >
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonAnim;
