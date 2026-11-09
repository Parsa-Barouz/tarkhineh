"use client";
import BranchesPage from "../branches/BranchesPage"
import ProductCard from "./ProductCard";
import products from "@/data/products";
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Pagination } from 'swiper/modules';




function SliderButtons() {
  const swiper = useSwiper();

  return (
    <>

           <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#417F56] p-3 text-white"
      >
        <ChevronLeft size={22} />
      </button>

     
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#417F56] p-3 text-white"
      >
        <ChevronRight size={22} />
      </button>
    </>
  );
}


type TextTitlepropss = {
TextTitleprops:string;
};

export default function sliderproduct(propsSliderproduct:TextTitlepropss) {
  return (
    
    <>
        <div className="text flex justify-end py-6 ">
   <h3 className="font-bold text-2xl">{propsSliderproduct.TextTitleprops}</h3>
      </div>
<Swiper className="mySwiper relative"


  simulateTouch={false}
  slidesPerView={3}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  breakpoints={{
    640: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  }}

>



          {

products.map((item) => (  

<SwiperSlide key={item.id}>
  

    <ProductCard
      title={item.title}
      image={item.image}
      price={item.price}
      oldPrice={item.oldPrice}
      discount={item.discount}
      rating={item.rating}
      votes={item.votes}
    />
  
    </SwiperSlide>
    
))

}



       

  
<SliderButtons />
      </Swiper>
    </>
  );

}
