import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import InitCard from "./InitCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IconContext } from "react-icons";
import { useTheme } from "next-themes";

const InitSlider = ({ items }) => {
  const { theme } = useTheme();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
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

  const handleImageViewClick = (index) => {
    swiper.slideTo(index);
  };

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted, theme]);

  return (
    <>
      <div className="relative w-full h-[510px] flex justify-center">
        <Swiper
          spaceBetween={100}
          onSwiper={setSwiper}
          slidesPerView={1}
          slidesPerGroup={1}
          centeredSlides={true}
          rewind={true}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
          className="h-auto"
        >
          {items.map((itemData, index) => (
            <SwiperSlide key={index} className="">
              <div
                className={`flex justify-center items-center transition-all duration-350 relative ${
                  activeSlideIndex !== index && "scale-[.85] opacity-75 blur-sm"
                } `}
                style={{ height: "95.25%" }}
              >
                <InitCard data={itemData} currentTheme={currentTheme} />
                <div className="h-full w-[1px]"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconContext.Provider
          value={{
            style: { color: currentTheme === "dark" ? "white " : "black" },
          }}
        >
          <button
            ref={navigationNextRef}
            className={`hidden md:block swiper-navigation-button  swiper-navigation-prev absolute top-[40%] transform translate-y-[50%] right-[2%] above-all`}
            onClick={handleNavigationNextClick}
          >
            <SlArrowRight size={45} />{" "}
          </button>
          <button
            ref={navigationPrevRef}
            className={`hidden md:block swiper-navigation-button swiper-navigation-next absolute top-[40%] transform translate-y-[50%] left-[2%]  above-all `}
            onClick={handleNavigationPrevClick}
          >
            <SlArrowLeft size={45} />
          </button>
        </IconContext.Provider>
      </div>
      <span className="flex md:hidden font-teko mt-[-1rem] text-xl">
        SWIPE TO VIEW COLLECTIONS
      </span>
      <div className="h-[62px] border border-black dark:border-white w-auto flex">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className={`w-[60px] aspect-square relative cursor-pointer ${
                activeSlideIndex !== i && "opacity-30"
              }`}
              onClick={() => handleImageViewClick(i)}
            >
              <Image
                src={item?.image}
                alt={item?.imageAlt}
                fill
                quality={100}
                priority
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InitSlider;
