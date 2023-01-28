import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const [width, setWidth] = useState(null);
  const genuine = useRef(null);
  const undead = useRef(null);
  const pinTarget = useRef(null);
  // const mainImage = useRef(null);

  const imageDiv1 = useRef(null);
  const imageDiv2 = useRef(null);

  const appWidth = () => {
    console.log(`${window.innerWidth}px`);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", appWidth);
    appWidth();
    const g = genuine.current;
    const u = undead.current;
    const pt = pinTarget.current;
    // const mi = mainImage.current;
    const imgDiv1 = imageDiv1.current;
    const imgDiv2 = imageDiv2.current;
    gsap.fromTo(g, { x: 0 }, { x: width + 10, duration: 3 });
    gsap.fromTo(u, { x: 0 }, { x: -(width + 10), duration: 3 });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: pt,
        end: "+=350% bottom",
        markers: true,
        pin: true,
        scrub: true,
      },
    });

    tl.add("start");
    tl.fromTo(g, { x: 0 }, { x: 1500, duration: 3 }, "start");
    tl.fromTo(u, { x: 0 }, { x: -1500, duration: 3 }, "start");

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: pt,
        end: "+=200% bottom",
        markers: true,
        pin: true,
        scrub: true,
      },
    });
    tl2.add("startImage");
    tl2.fromTo(imgDiv1, { y: 0 }, { y: -2000, duration: 3 }, "startImage");
    tl2.fromTo(imgDiv2, { y: 0 }, { y: 2000, duration: 3 }, "startImage");
  }, []);
  return (
    <div
      ref={pinTarget}
      className="relative pin-target min-h-screen w-full flex flex-col items-center justify-center overflow-y-hidden"
    >
      <img
        src="/images/animation/genuine1.svg"
        alt="GENUINE"
        className="w-[80%] text-center mb-[5px]"
        ref={genuine}
      />
      <img
        src="/images/animation/undead1.svg"
        alt="GENUINE"
        className="w-[80%] text-center mt-[5px]"
        ref={undead}
      />
      <div
        className="absolute bottom-[-110%] right-[5%] flex flex-col gap-[225px]"
        ref={imageDiv1}
      >
        <img
          src="/images/animation/openmind.png"
          className="h-[225px] aspect-square"
        />
        <img
          src="/images/animation/louhorns.gif"
          className="h-[225px] aspect-square"
        />
        <img
          src="/images/animation/holo.gif"
          className="h-[225px] aspect-square"
        />
      </div>
      <div
        className="absolute top-[-110%] left-[5%] flex flex-col gap-[225px]"
        ref={imageDiv2}
      >
        <img
          src="/images/animation/faceless.png"
          className="h-[225px] aspect-square"
        />
        <img
          src="/images/animation/bowler.png"
          className="h-[225px] aspect-square"
        />
        <img
          src="/images/animation/avaitor.png"
          className="h-[225px] aspect-square"
        />
      </div>
      {/* Other content that should be pinned on initial scroll goes here */}
    </div>
  );
}

export default Landing;
