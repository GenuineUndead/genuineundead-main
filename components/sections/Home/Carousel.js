import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "next-themes";
import LoadingBar from "react-top-loading-bar";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [width, setWidth] = useState(0);
  const pinTarget = useRef(null);
  const main = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const image5 = useRef(null);
  const image6 = useRef(null);

  const appWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    appWidth();
    const pt = pinTarget.current;
    const ctx = gsap.context(() => {
      const i1 = image1.current;
      const i2 = image2.current;
      const i3 = image3.current;
      const i4 = image4.current;
      const i5 = image5.current;
      const i6 = image6.current;

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: pt,
          end: "+=400% bottom",
          // end: "bottom",
          onEnter: () => {
            setShowProgress(true);
          },
          onEnterBack: () => {
            setShowProgress(true);
          },
          onUpdate: (trigger) => {
            setProgress(trigger.progress * 100);
          },
          onLeave: () => {
            setShowProgress(false);
          },
          onLeaveBack: () => {
            setShowProgress(false);
          },
          markers: false,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
      tl.fromTo(
        i1,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, ease: Power2.easeIn }
      );
      tl.to(i1, {
        y: 1500,
        x: -700,
        autoAlpha: 0.2,
        scale: 4,
        duration: 3,
        ease: Power2.easeOut,
      });
      tl.fromTo(
        i1,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeOut },
        "-=2.8"
      );
      tl.fromTo(
        i2,
        { opacity: 0 },
        { opacity: 1, duration: 0.1, ease: Power2.easeIn },
        "-=2.96"
      );
      tl.to(
        i2,
        {
          y: 1500,
          x: 700,
          scale: 4,
          duration: 4,
        },
        "-=2.95"
      );
      tl.fromTo(
        i2,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeOut },
        "-=3.25"
      );
      tl.fromTo(i3, { opacity: 0 }, { opacity: 1, duration: 0.1 }, "-=3.75");
      tl.to(
        i3,
        {
          // y: window.innerHeight * 2.8,
          y: 1500,
          x: -700,
          scale: 4,
          duration: 4,
        },
        "-=3.75"
      );
      tl.fromTo(
        i3,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeOut },
        "-=3.25"
      );
      tl.fromTo(
        i4,
        { opacity: 0 },
        { opacity: 1, duration: 0.1, ease: Power2.easeIn },
        "-=3.75"
      );
      tl.to(
        i4,
        {
          y: 1500,
          x: 700,
          scale: 4,
          duration: 5,
        },
        "-=3.75"
      );
      tl.fromTo(
        i4,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeOut },
        "-=4.25"
      );
    }, pt);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main}>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ display: showProgress ? "block" : "none" }}
      />
      <div
        ref={pinTarget}
        className="relative pin-target min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          ref={image1}
          className="absolute top-0 left-[30%] w-[17%] aspect-square"
        >
          <img
            src="/images/carousel/cowboy.png"
            className="w-full h-full shadow-lg"
          />
        </div>
        <div
          ref={image3}
          className="absolute top-0 left-[30%] w-[17%] aspect-square"
        >
          {" "}
          <img
            src="/images/carousel/human.png"
            className="w-full h-full drop-shadow-xl"
          />
        </div>
        {/* <div
          ref={image5}
          className="absolute top-[60px] left-[35%] w-[17%] h-[300px] bg-green-500"
        ></div> */}
        <div
          ref={image2}
          className="absolute top-0 right-[30%] w-[17%] aspect-square"
        >
          {" "}
          <img src="/images/carousel/captain.png" className="w-full h-full" />
        </div>
        <div
          ref={image4}
          className="absolute top-0 right-[30%] w-[17%] aspect-square"
        >
          <img src="/images/carousel/rose.png" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
