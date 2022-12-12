import Landing from "../components/sections/Landing";
import { useRef, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Collection from "../components/sections/Collection";
import Art from "../components/sections/Art";
import Story from "../components/sections/Story";
import Ethos from "../components/sections/Ethos";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "navigation"])),
      locale,
    },
  };
}

export default function Home(props) {
  const { t: translate } = useTranslation();
  const landingRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // console.log(landingRef);
    // if (window) {
    //   let locoScroll;
    //   import("locomotive-scroll").then((locomotiveModule) => {
    //     locoScroll = new locomotiveModule.default({
    //       el: landingRef.current,
    //       smooth: true,
    //       smoothMobile: false,
    //       resetNativeScroll: true,
    //       lerp: 0.08,
    //     });
    //     locoScroll.on("scroll", ScrollTrigger.update);
    //     ScrollTrigger.scrollerProxy(".smooth-scroll", {
    //       scrollTop(value) {
    //         return arguments.length
    //           ? locoScroll.scrollTo(value, 0, 0)
    //           : locoScroll.scroll.instance.scroll.y;
    //       },
    //       getBoundingClientRect() {
    //         return {
    //           top: 0,
    //           left: 0,
    //           width: window.innerWidth,
    //           height: window.innerHeight,
    //         };
    //       },
    //       pinType: landingRef.current.style.transform ? "transform" : "fixed",
    //     });
    //     const vw = (coef) => window.innerWidth * (coef / 100);
    //     const vh = (coef) => window.innerHeight * (coef / 100);
    //     const heroScroller = gsap.timeline({
    //       paused: true,
    //       scrollTrigger: {
    //         trigger: ".hero-header.hh-1",
    //         scroller: ".smooth-scroll",
    //         pin: ".pin-wrapper",
    //         start: "top 10%",
    //         scrub: true,
    //         end: `${vh(100)}`,
    //       },
    //     });
    //     heroScroller
    //       .to(
    //         [".hero-header.hh-1", ".hero-header.hh-3"],
    //         {
    //           scale: 2,
    //           y: vh(150),
    //           xPercent: -150,
    //         },
    //         "heroScroll"
    //       )
    //       .to(
    //         ".hero-header.hh-2",
    //         {
    //           scale: 2,
    //           y: vh(150),
    //           xPercent: 150,
    //         },
    //         "heroScroll"
    //       )
    //       .to(
    //         "#heroImage",
    //         {
    //           scaleY: 2.5,
    //         },
    //         "heroScroll"
    //       )
    //       .to(
    //         "#heroImage .image",
    //         {
    //           scaleX: 2.5,
    //           xPercent: 50,
    //         },
    //         "heroScroll"
    //       );
    //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    //     ScrollTrigger.refresh();
    //   });
    //   //end of if condition
    // }
  }, []);

  return (
    <div>
      {/* <div className="w-screen min-h-[400vh] bg-black">
        <div className="w-screen h-[500px] bg-red-500 fixed top-12">
          <h1>title 1</h1>
          <h1>title 2</h1>
          {translate("home:landing-heading-1")}
        </div>
      </div> */}
      <Landing pageRefs={{ landingRef, titleRef }} />

      <Collection />
      <Art />
      <Story />
      <Ethos />
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
}
