

import { Heart, Star } from "lucide-react";
import { useState } from "react";

type ProductCardProps = {
  title: string;
  image: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating: number;
  votes: number;
};
export default function ProductCard({
  title,
  image,
  price,
  oldPrice,
  discount,
  rating,
  votes,
}: ProductCardProps) {
  return (
    <div
      dir="rtl"
      className="w-full overflow-hidden rounded-xl border border-gray-300 bg-white"
    >
   
      <div className="relative h-64 w-full">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full "
        />
      </div>

   
      <div className="p-4">
        <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
          {title}
        </h3>

      
        <div className="flex items-center justify-between gap-2 text-xs text-gray-400">
          <span className="rounded-full bg-red-50 px-2 py-1 text-red-600">
            {discount}
          </span>

          <span className="flex items-center gap-1">
            افزودن به علاقه‌مندی‌ها
            <Heart size={19} />
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 line-through">
              {oldPrice}
            </span>
            <p className="mt-1 text-lg font-medium text-gray-800">
              {price} تومان
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <Star size={19} className="fill-amber-400 text-amber-400" />
            <span className="font-bold">{rating}</span>
            <span className="text-gray-400">({votes} امتیاز)</span>
          </div>
        </div>

        <button className="mt-5 w-full rounded-md bg-[#417F56] py-3 font-bold text-white transition hover:bg-[#326743]">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
