import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Landing = ({ props }) => {
  let page;

  useEffect(() => {
    // --- ORANGE PANEL ---
    // gsap.from(".line-2", {
    //   scrollTrigger: {
    //     trigger: ".orange",
    //     scrub: true,
    //     pin: true,
    //     start: "top top",
    //     end: "+=100%",
    //   },
    //   scaleX: 0,
    //   transformOrigin: "left center",
    //   ease: "none",
    // });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-target",
        scrub: 1,
        pin: true,
        start: "1px top",
        end: "+=300%",
        markers: true,
      },
    });

    tl.add("start")
      .to(
        "#genuine",
        {
          autoAlpha: 0,
          ease: "none",
          x: "-200%",
        },
        "start"
      )
      .to(
        "#undead",
        {
          autoAlpha: 0,
          ease: "none",
          x: "200%",
        },
        "start"
      )
      .to(
        "#rAnds",
        {
          scale: 9,
          autoAlpha: 0,
          ease: "power2",
        },
        "start"
      );
  }, []);

  return (
    <div
      id="pin-target"
      className="flex justify-center items-center w-full min-h-screen overflow-hidden"
    >
      <div id="pin-wrapper" className="h-[150%] relative">
        {/* <img
            src="https://via.placeholder.com/150"
            className="absolute top-0 left-0 z-10"
          /> */}
        <div className="h-full flex flex-col items-center justify-center">
          <h1 id="genuine" className="text-[10rem] ">
            GENUINE
          </h1>
          <h3 id="rAnds" className="font-didot">
            RISE AND SHINE
          </h3>
          <h1 id="undead" className="text-[10rem]">
            UNDEAD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
