import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";
import SEO from "../components/SEO";
import Timeline from "../components/sections/Timeline/Timeline";
import { Parallax } from "react-scroll-parallax";
import { useTheme } from "next-themes";
import MobileTimeline from "../components/sections/Timeline/MobileTimeline";

const seoDesc = "Timeline of the first year of the Genuine Undead journey.";
const timeline = () => {
  const router = useRouter();
  const [bodies, setBodies] = useState(null);
  const [axe, setAxe] = useState(null);
  const [papers, setPapers] = useState(null);
  const { systemTheme, theme } = useTheme();

  useEffect(() => {
    logPageView({ page: router.pathname, title: "Timeline" });
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      setBodies("/images/timeline/bodies-dark.png");
      setAxe("/images/timeline/axe-dark.png");
      setPapers("/images/timeline/papers-dark.png");
    } else {
      setBodies("/images/timeline/bodies-light.png");
      setAxe("/images/timeline/axe-light.png");
      setPapers("/images/timeline/papers-light.png");
    }
  }, [theme]);
  return (
    <>
      <SEO
        title="Timeline | Genuine Undead"
        description={seoDesc}
        path="timeline"
      />

      <div className="w-full relative flex justify-center items-center overflow-hidden">
        <Parallax
          speed={-100}
          className="w-[110%] h-[800px] md:w-full flex justify-center aspect-square absolute left-0 top-0"
          style={{ zIndex: 5 }}
        >
          <img className="h-full w-full" src={papers} alt="papers" />
        </Parallax>
        <Parallax
          speed={-400}
          className="w-[120%] md:w-[90%] aspect-square absolute bottom-0 left-0 right-0 mx-auto"
          style={{ zIndex: 0 }}
        >
          <div className="flex justify-center">
            <img className="h-full" src={bodies} alt="bodies" />
          </div>
        </Parallax>
        <Timeline />
        <MobileTimeline />
      </div>
    </>
  );
};

export default timeline;
