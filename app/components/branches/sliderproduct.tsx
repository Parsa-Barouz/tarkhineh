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
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      


          {

products.map((item) => (  

<SwiperSlide key={item.id}>
   
{    item.title} 
  { item.image}
    {item.price}
    {item.oldPrice}
    {item.discount}
   { item.rating}
   { item.votes}
    </SwiperSlide>
    
))

}



       

  

      </Swiper>
    </>
  );
}
