import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "next-themes";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const { systemTheme, theme } = useTheme();
  const [width, setWidth] = useState(0);
  const [gImage, setGImage] = useState(null);
  const [uImage, setUImage] = useState(null);
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
    const pt = pinTarget.current;
    const ctx = gsap.context(() => {
      // window.addEventListener("resize", appWidth);
      // appWidth();
      const rs = riseAndShine.current;
      const g = genuine.current;
      const u = undead.current;
      const imgDiv1 = imageDiv1.current;
      const imgDiv2 = imageDiv2.current;

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: pt,
          end: "+=400% bottom",
          markers: true,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
      tl.add("start");
      tl.fromTo(
        g,
        { x: 0 },
        { x: window.innerWidth + 200, duration: 3 },
        "start"
      );
      tl.fromTo(
        u,
        { x: 0 },
        { x: -(window.innerWidth + 200), duration: 3 },
        "start"
      );
      tl.fromTo(
        imgDiv2,
        { y: 0 },
        { y: -(window.innerHeight + 1500), duration: 3 },
        "start"
      );
      tl.fromTo(
        imgDiv1,
        { y: 0 },
        { y: window.innerHeight + 1500, duration: 3 },
        "start"
      );
      tl.fromTo(rs, { opacity: 0 }, { opacity: 1, delay: -0.5, duration: 0.3 });
      tl.fromTo(rs, { scale: 0.1 }, { scale: 0.9, duration: 1 });
    }, pt);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    appWidth();
    if (theme === "dark") {
      setGImage("/images/animation/genuine1.svg");
      setUImage("/images/animation/undead1.svg");
    } else {
      setGImage("/images/animation/genuine2.svg");
      setUImage("/images/animation/undead2.svg");
    }
  }, [theme]);
  return (
    <div ref={main}>
      <div
        ref={pinTarget}
        className="relative pin-target min-h-screen w-full flex flex-col items-center justify-center overflow-y-hidden"
      >
        <img
          src={gImage}
          alt="GENUINE"
          className="h-[18%] w-full text-center mb-[5px] z-10"
          ref={genuine}
        />
        <img
          src={uImage}
          alt="UNDEAD"
          className="h-[18%] text-center mt-[5px] z-5"
          ref={undead}
        />
        <div>
          <h1
            ref={riseAndShine}
            className="positionCenter opactiy-0 w-screen text-center font-didot"
          >
            RISE AND SHINE
          </h1>
        </div>
        <div
          id="rightSideImages"
          className={`absolute top-[calc(-100vw_+_17vw)] xl:top-[calc(-100vw_+_25vw)] xxl:top-[calc(-100vw_+_32vw)] right-[20%] flex flex-col gap-[250px] w-[20vw]`}
          ref={imageDiv1}
        >
          <img
            src="/images/animation/avaitor.png"
            className="w-full aspect-square"
          />
          <img
            src="/images/animation/louhorns.gif"
            className="w-full aspect-square"
          />
          <img
            src="/images/animation/paint.png"
            className="w-full aspect-square"
          />
        </div>
        <div
          id="leftSideImages"
          className="absolute bottom-[calc(-100vw_+_17vw)] xl:bottom-[calc(-100vw_+_25vw)] xxl:bottom-[calc(-100vw_+_30vw)] left-[20%] flex flex-col gap-[250px] w-[20vw]"
          ref={imageDiv2}
        >
          <img
            src="/images/animation/titanium.png"
            className="h-full aspect-square"
          />
          <img
            src="/images/animation/bowler.png"
            className="h-full aspect-square"
          />
          <img
            src="/images/animation/openmind.png"
            className="h-full aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
