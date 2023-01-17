import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const Landing = ({ props }) => {
//   let page;

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // const pinTarget = document.getElementById("pin-target");
//     // const imageContainer = document.getElementById("image-container");
//     // // const images = document.querySelectorAll(".image");
//     // const genuine = document.getElementById("genuine");
//     // const undead = document.getElementById("undead");
//     // const elements = [genuine, undead];
//     // // const imagesElements = [imageContainer, ...images];
//     // gsap.set(elements, { x: 0 });
//     // // gsap.set(imagesElements, { y: 0 });

//     // ScrollTrigger.create({
//     //   trigger: pinTarget,
//     //   start: "top top",
//     //   pin: pinTarget,
//     //   end: "+=200",
//     //   onUpdate: (self) => {
//     //     gsap.to(genuine, { x: self.progress * -250 });
//     //     gsap.to(undead, { x: self.progress * 250 });

//     //     // gsap.to(imagesElements, { y: self.progress * -1000 });
//     //   },
//     // });
//     const pinTarget = document.getElementById("pin-target");
//     const genuine = document.getElementById("genuine");
//     const undead = document.getElementById("undead");

//     gsap.to(pinTarget, {
//       scrollTrigger: {
//         trigger: pinTarget,
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//         onUpdate: (self) => {
//           if (self.progress >= 1) {
//             gsap.to(genuine, {
//               x: "-100%",
//               duration: 1,
//               scrollTrigger: {
//                 trigger: genuine,
//                 start: "top top",
//                 end: "bottom bottom",
//                 scrub: true,
//               },
//             });
//             gsap.to(undead, {
//               x: "100%",
//               duration: 1,
//               scrollTrigger: {
//                 trigger: undead,
//                 start: "top top",
//                 end: "bottom bottom",
//                 scrub: true,
//                 onComplete: () => {
//                   gsap.to(pinTarget, {
//                     pin: false,
//                   });
//                 },
//               },
//             });
//           }
//         },
//       },
//     });
//   }, []);

//   return (
//     // <div
//     //   id="pin-target"
//     //   className="flex justify-center items-center w-full min-h-screen overflow-hidden"
//     // >
//     //   <div id="pin-wrapper" className="h-[150%] relative">
//     //     {/* <img
//     //         src="https://via.placeholder.com/150"
//     //         className="absolute top-0 left-0 z-10"
//     //       /> */}
//     //     <div className="h-full flex flex-col items-center justify-center">
//     //       <h1 id="genuine" className="text-[10rem] ">
//     //         GENUINE
//     //       </h1>
//     //       <h3 id="rAnds" className="font-didot">
//     //         RISE AND SHINE
//     //       </h3>
//     //       <h1 id="undead" className="text-[10rem]">
//     //         UNDEAD
//     //       </h1>
//     //     </div>
//     //   </div>
//     // </div>
//     <div
//       className="relative pin-target min-h-screen w-full flex flex-col items-center justify-center"
//       id="pin-target"
//     >
//       <h1 id="genuine" className="text-center text-3xl font-medium pin-genuine">
//         genuine
//       </h1>
//       <h1 id="undead" className="text-center text-3xl font-medium pin-undead">
//         undead
//       </h1>
//       {/* <!-- Other content that should be pinned on initial scroll goes here --> */}
//     </div>
//   );
// };

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  useEffect(() => {
    const pinTarget = document.getElementsByClassName("pin-target")[0];
    const genuine = document.getElementsByClassName("pin-genuine")[0];
    const undead = document.getElementsByClassName("pin-undead")[0];

    gsap.to(pinTarget, {
      scrollTrigger: {
        trigger: pinTarget,
        start: "top top",
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          if (self.progress >= 1) {
            gsap.to(genuine, {
              x: "-100%",
              duration: 1,
            });
            gsap.to(undead, {
              x: "100%",
              duration: 1,
            });
          }
        },
        onComplete: () => {
          gsap.to(pinTarget, {
            pin: false,
          });
        },
      },
    });
  }, []);

  return (
    <div className="relative pin-target min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-medium pin-genuine">genuine</h1>
      <h1 className="text-center text-3xl font-medium pin-undead">undead</h1>
      {/* Other content that should be pinned on initial scroll goes here */}
    </div>
  );
}

export default Landing;
