
"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const slides = [
  "طعم واقعی غذای ایرانی",
  "تجربه غذای سالم و گیاهی به سبک ترخینه",
  "تجربه غذای سالم و گیاهی به سبک ترخینه",
  "تجربه غذای سالم و گیاهی به سبک ترخینه",
  "تجربه غذای سالم و گیاهی به سبک ترخینه",
  "تجربه غذای سالم و گیاهی به سبک ترخینه",
  "تجربه غذای سالم و گیاهی به سبک ترخینه",
  "تجربه غذای سالم و گیاهی به سبک ترخینه",
];

export default function App() {
   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[280px] w-full sm:h-[350px] md:h-[450px] lg:h-[500px]">
            <img
              src="/Images/Slider.png"
              alt="تصویر غذا"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center text-white sm:gap-4">
              <h2 className="text-xl font-bold leading-relaxed sm:text-2xl md:text-3xl">
                {slide}
              </h2>

              <button className="mt-3 rounded-sm bg-[#008236] px-4 py-2 text-sm sm:mt-5 sm:px-5 sm:py-2.5 sm:text-base md:text-lg">
                سفارش آنلاین غذا
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
