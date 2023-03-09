import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useTheme } from "next-themes";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const [loading, setLoading] = useState(true);
  const { systemTheme, theme } = useTheme();
  const [width, setWidth] = useState(0);
  const [gImage, setGImage] = useState(null);
  const [uImage, setUImage] = useState(null);
  const [rAndSImage, setRAndSImage] = useState(null);
  const genuine = useRef(null);
  const undead = useRef(null);
  const pinTarget = useRef(null);
  const main = useRef(null);
  const riseAndShine = useRef(null);

  const imageDiv1 = useRef(null);
  const imageDiv2 = useRef(null);

  const appWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    appWidth();
    // if (loading) return;
    const pt = pinTarget.current;
    const ctx = gsap.context(() => {
      const rs = riseAndShine.current;
      const g = genuine.current;
      const u = undead.current;
      const imgDiv1 = imageDiv1.current;
      const imgDiv2 = imageDiv2.current;

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: pt,
          end: "+=400% bottom",
          markers: false,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
      tl.add("start");
      tl.fromTo(
        g,
        { x: 0 },
        { x: window.innerWidth * 2.5, duration: 3 },
        "start"
      );
      tl.fromTo(
        u,
        { x: 0 },
        { x: -(window.innerWidth * 2.5), duration: 3 },
        "start"
      );
      tl.fromTo(
        imgDiv2,
        { y: 0 },
        { y: -(window.innerHeight * 3.5), duration: 3 },
        "start"
      );
      tl.fromTo(
        imgDiv1,
        { y: 0 },
        { y: window.innerHeight * 3.5, duration: 3 },
        "start"
      );
      tl.fromTo(rs, { opacity: 0 }, { opacity: 1, delay: -2, duration: 0.3 });
      tl.fromTo(rs, { scale: 0.1 }, { scale: 1, delay: -1.75, duration: 1.8 });
    }, pt);
    return () => ctx.revert();
  }, [loading]);

  useEffect(() => {
    appWidth();
    if (theme === "dark") {
      setRAndSImage("/images/animation/rise-dark.svg");
      setGImage("/images/animation/genuine1.svg");
      setUImage("/images/animation/undead1.svg");
    } else {
      setRAndSImage("/images/animation/rise-light.svg");
      setGImage("/images/animation/genuine2.svg");
      setUImage("/images/animation/undead2.svg");
    }
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div ref={main} syle={{ scrollBehavior: "smooth" }}>
      <div
        ref={pinTarget}
        className="relative pin-target min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        <img
          src={gImage}
          alt="GENUINE"
          className="h-[4.5%] md:h-[7%] lg:h-[18%] text-center mb-[5px] z-10"
          ref={genuine}
        />
        <img
          src={uImage}
          alt="UNDEAD"
          className="h-[4.5%] md:h-[7%] lg:h-[18%] text-center mt-[5px] z-5"
          ref={undead}
        />
        <div>
          <h1
            ref={riseAndShine}
            className="positionCenter opactiy-0 w-screen text-center"
          >
            {/* <span className="font-teko font-bold text-[11.4vw]">RISE</span>{" "}
            <i>AND</i> SHINE */}
            <img src={rAndSImage} />
          </h1>
        </div>
        <div
          id="rightSideImages"
          className={`absolute top-[-110vh] lg:top-[-195vh] right-[8%] lg:right-[20%] flex flex-col  w-[40vw] gap-[40vw] md:w-[30vw] md:gap-[30vw] lg:w-[20vw] lg:gap-[20vw]`}
          ref={imageDiv1}
        >
          <img
            src="/images/animation/gu-157.png"
            className="w-full aspect-square"
          />
          <img
            src="/images/animation/gu-5658.gif"
            className="w-full aspect-square"
            alt="louhorns"
          />
          <img
            src="/images/animation/gu-7759.png"
            className="w-full aspect-square"
            alt="paint"
          />
        </div>
        <div
          id="leftSideImages"
          className="absolute bottom-[-110vh] lg:bottom-[-195vh] left-[8%] lg:left-[20%] flex flex-col w-[40vw] gap-[40vw] md:w-[30vw] md:gap-[30vw] lg:w-[20vw] lg:gap-[20vw]"
          ref={imageDiv2}
        >
          <img
            src="/images/animation/gu-1279.png"
            alt="Titanium"
            className="h-full aspect-square"
          />
          <img
            src="/images/animation/gu-6117.png"
            className="h-full aspect-square"
            alt="bowler"
          />
          <img
            src="/images/animation/gu-9583.png"
            className="h-full aspect-square"
            alt="openmind"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
