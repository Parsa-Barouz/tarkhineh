"use client";
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

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

export default function sliderproduct() {
  return (
    <>
<Swiper


  simulateTouch={false}
  slidesPerView={3}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper"
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



       

  

      </Swiper>
    </>
  );
}
