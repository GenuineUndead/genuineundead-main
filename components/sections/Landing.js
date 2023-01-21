import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-target",
        endTrigger: ".box",
        markers: true,
        pin: true,
        scrub: true,
      },
    });

    tl.to("#genuine", {
      x: 100,
    });
  }, []);
  return (
    <div
      id="pin-target"
      className="relative pin-target min-h-screen w-full flex flex-col items-center justify-center"
    >
      <h1 id="genuine" className="absolute text-center text-[10rem]">
        GENUINE
      </h1>
      <h1 className="text-center text-[10rem]">UNDEAD</h1>
      {/* Other content that should be pinned on initial scroll goes here */}
    </div>
  );
}

export default Landing;
