import React, { useEffect } from "react";
import MainButton from "../components/MainButton";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    logPageView({ page: router.pathname, title: "404" });
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center border-b border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem] relative overflow-y-hidden ">
      <h1 className="font-didot z-10 w-full text-center font-teko font-bold text-[20vw] md:text-[16.6vw]">
        NGMI
      </h1>
      <p className=" lg:mt-[-50px] mb-[50px]">You got 404'd</p>
      <MainButton ariaLabel="Link to Home Page" internalLink={true} link="/">
        HOME
      </MainButton>
    </div>
  );
};

export default Custom404;
