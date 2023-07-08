import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper/core";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IconContext } from "react-icons";
import { useTheme } from "next-themes";
import { config } from "../../../public/data/IntiativesData";
import Image from "next/image";
import Link from "next/link";
import MainButton from "../../MainButton";

// Initialize Swiper core
SwiperCore.use([Navigation]);

const Slider = () => {
  const { theme } = useTheme();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [currentTheme, setCurrentTheme] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };
  const handleNavigationPrevClick = () => {
    navigationPrevRef.current.swiper?.slidePrev();
  };

  const handleNavigationNextClick = () => {
    navigationNextRef.current.swiper?.slideNext();
  };

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted, theme]);
  return (
    <>
      <div className="relative w-full mx-auto h-[550px] flex justify-center max-w-[1024px]">
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          rewind={true}
          centeredSlides={false}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {config.map((item) => {
            return (
              <SwiperSlide key={`slide-${item.title}`}>
                <div className="w-full h-[550px] aspect-w-3 aspect-h-1  flex justify-center">
                  <div className="w-[350px] lg:w-[450px] min-h-full flex justify-center items-center relativem shadow-md">
                    <Image src={item.image} alt={item.title} fill />
                    <div className="z-10">
                      <Link
                        className={`border border-white text-white py-[12px] px-[20px] text-[.9rem] w-[180px] hover:border-[#ff5277] transition-all duration-300 rounded-full`}
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {item.title.toUpperCase()}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <IconContext.Provider
          value={{
            style: { color: currentTheme === "dark" ? "white " : "black" },
          }}
        >
          <button
            ref={navigationNextRef}
            className={`hidden md:block swiper-navigation-button  swiper-navigation-prev absolute top-[40%] transform translate-y-[50%] right-[-5%] above-all`}
            onClick={handleNavigationNextClick}
          >
            <SlArrowRight size={45} />{" "}
          </button>
          <button
            ref={navigationPrevRef}
            className={`hidden md:block swiper-navigation-button swiper-navigation-next absolute top-[40%] transform translate-y-[50%] left-[-5%] above-all `}
            onClick={handleNavigationPrevClick}
          >
            <SlArrowLeft size={45} />
          </button>
        </IconContext.Provider>
      </div>
      <span className="flex lg:hidden font-teko text-2xl">SWIPE TO VIEW</span>
    </>
  );
};

export default Slider;
