"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >



        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              طعم واقعی غذای ایرانی
            </h2>

            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div>


        </SwiperSlide>
        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>

            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>

            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>

            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>
            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>

            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>

            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>

            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="relative h-full w-full">
          <img
            src="/Images/Slider.png"
            alt="تصویر غذا"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl font-bold">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>

            <button className="text-lg bg-[#008236] py-2.5 px-3 rounded-sm mt-5">
              سفارش آنلاین غذا
            </button>
          </div>
        </div></SwiperSlide>
      </Swiper>
    </>
  );
}
