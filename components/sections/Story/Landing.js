import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "next-themes";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const { systemTheme, theme } = useTheme();
  const [width, setWidth] = useState(0);
  const pinTarget = useRef(null);
  const main = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const image5 = useRef(null);
  const image6 = useRef(null);

  const yDir = 1200;
  const leftX = -400;
  const rightX = 400;
  const scale = 3;
  const dur = 3;

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
          markers: false,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
      tl.fromTo(
        i1,
        { opacity: 0, y: -10, x: 5 },
        { opacity: 1, x: 0, y: 0, ease: Power2.easeIn }
      );
      tl.to(i1, {
        transform: "translateZ(0px)",
        x: leftX,
        y: yDir,
        autoAlpha: 0.4,
        scale: scale,
        duration: dur,
      });
      // tl.fromTo(
      //   i1,
      //   { opacity: 1 },
      //   { opacity: 0, ease: Power2.easeOut },
      //   "-=2.8"
      // );
      tl.fromTo(
        i1,
        { opacity: 0, y: -10, x: -5 },
        { opacity: 1, x: 0, y: 0, ease: Power2.easeIn },
        "-=2.7"
      );
      tl.to(
        i2,
        {
          transform: "translateZ(0px)",
          x: rightX,
          y: yDir,
          autoAlpha: 0.4,
          scale: scale,
          duration: 4,
        },
        "-=2.6"
      );
      // tl.fromTo(
      //   i2,
      //   { opacity: 1 },
      //   { opacity: 0, ease: Power2.easeOut },
      //   "-=3.4"
      // );

      tl.fromTo(
        i3,
        { opacity: 0, y: -10, x: 5 },
        { opacity: 1, x: 0, y: 0, ease: Power2.easeIn, duration: 0.1 }
      ),
        "-=3.6";
      tl.to(
        i3,
        {
          transform: "translateZ(0px)",
          x: leftX,
          y: yDir,
          autoAlpha: 0.4,
          scale: scale,
          duration: dur,
        },
        "-=3.7"
      );

      // tl.fromTo(
      //   i4,
      //   { opacity: 0 },
      //   { opacity: 1, duration: 0.1, ease: Power2.easeIn },
      //   "-=3.75"
      // );
      // tl.to(
      //   i4,
      //   {
      //     y: window.innerHeight * 2.5,
      //     x: 700,
      //     scale: 4.5,
      //     duration: 5,
      //   },
      //   "-=3.75"
      // );
      // tl.fromTo(
      //   i4,
      //   { opacity: 1 },
      //   { opacity: 0, ease: Power2.easeOut },
      //   "-=4.4"
      // );
      // tl.fromTo(
      //   i5,
      //   { opacity: 0 },
      //   { opacity: 1, duration: 0.1, delay: -2.85 }
      // );
      // tl.fromTo(
      //   i5,
      //   { y: 0 },
      //   {
      //     y: window.innerHeight * 3.5,
      //     x: -1000,
      //     scale: 4.5,
      //     duration: 3,
      //     delay: -2.75,
      //   }
      // );
      // tl.fromTo(
      //   i6,
      //   { opacity: 0 },
      //   { opacity: 1, duration: 0.1, delay: -2.85 }
      // );
      // tl.fromTo(
      //   i6,
      //   { y: 0 },
      //   {
      //     y: window.innerHeight * 3.5,
      //     x: 1000,
      //     scale: 4.5,
      //     duration: 3,
      //     delay: -2.75,
      //   }
      // );
    }, pt);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main}>
      <div
        ref={pinTarget}
        className="relative pin-target min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          ref={image1}
          className="absolute top-0 left-[35%] w-[17%] aspect-square"
        >
          <img src="/images/carousel/cowboy.png" className="w-full h-full " />
        </div>
        <div
          ref={image3}
          className="absolute top-0 left-[35%] w-[17%] aspect-square"
        >
          {" "}
          <img src="/images/carousel/human.png" className="w-full h-full " />
        </div>
        {/* <div
          ref={image5}
          className="absolute top-[60px] left-[35%] w-[17%] h-[300px] bg-green-500"
        ></div> */}

        <div
          ref={image2}
          className="absolute top-0 left-[55%] w-[17%] aspect-square opacity-0"
        >
          {" "}
          <img src="/images/carousel/captain.png" className="w-full h-full " />
        </div>
        {/* <div
          ref={image4}
          className="absolute top-0 left-[55%] w-[17%] aspect-square"
        >
          <img src="/images/carousel/rose.png" className="w-full h-full " />
        </div> */}
      </div>
    </div>
  );
}

export default Landing;
