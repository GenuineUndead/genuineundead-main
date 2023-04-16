import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import FlipCard from "./FlipCard";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useTheme } from "next-themes";

const Slider = ({ items }) => {
  const { theme } = useTheme();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(null);
  const [mounted, setMounted] = useState(false);

  const params = {
    spaceBetween: 60,
    centeredSlides: true,
    slidesPerView: "auto",
  };

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
  }, [mounted]);

  return (
    <div className="relative w-full h-[500px] flex justify-center">
      <Swiper
        {...params}
        spaceBetween={140}
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
        className="h-[500px]"
      >
        {items.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-3/10 h-full flex justify-center items-center transition-all duration-350 ${
                activeSlideIndex !== index && "scale-[.85] opacity-75"
              } `}
            >
              <FlipCard />
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
          className="swiper-navigation-button swiper-navigation-prev absolute top-[-50px] left-[25px] above-all"
          onClick={handleNavigationPrevClick}
        >
          <FaLongArrowAltLeft size={30} />{" "}
        </button>
        <button
          ref={navigationNextRef}
          className="swiper-navigation-button swiper-navigation-next absolute bottom-[-50px] right-[25px] above-all"
          onClick={handleNavigationNextClick}
        >
          <FaLongArrowAltRight size={30} />{" "}
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default Slider;
