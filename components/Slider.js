import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import FlipCard from "./FlipCard";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useTheme } from "next-themes";

const Slider = ({ items }) => {
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
    console.log(swiper);
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
          slidesPerView={1.5}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className="h-auto"
        >
          {items.map((itemData, index) => (
            <SwiperSlide key={index} className="">
              <div
                className={`w-[95%] md:w-[400px] h-full flex justify-center items-center transition-all duration-350 relative ${
                  activeSlideIndex !== index && "scale-[.85] opacity-75 blur-sm"
                } `}
              >
                <FlipCard data={itemData} />
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
            ref={navigationPrevRef}
            className={`swiper-navigation-button swiper-navigation-prev absolute top-[-50px] left-[25px] above-all ${
              activeSlideIndex === 0 && "opacity-50"
            }`}
            onClick={handleNavigationPrevClick}
          >
            <BsArrowLeft size={45} />{" "}
          </button>
          <button
            ref={navigationNextRef}
            className={`swiper-navigation-button swiper-navigation-next absolute bottom-[-50px] right-[25px] above-all ${
              activeSlideIndex === items?.length - 1 && "opacity-50"
            }`}
            onClick={handleNavigationNextClick}
          >
            <BsArrowRight size={45} />{" "}
          </button>
        </IconContext.Provider>
      </div>
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
              {" "}
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

export default Slider;
