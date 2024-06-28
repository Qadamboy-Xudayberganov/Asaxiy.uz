import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductContext } from "../context/ProductContext";

export default function PopularBrands() {
  let source = useContext(ProductContext);

  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        loop={true}
        slidesPerView={7}
        className="h-[140px] max-w-[1392px] pt-3 mb-8"
      >
        {source.map((item) =>
          item.category === "PopularBrands" ? (
            <SwiperSlide
              key={item.id}
              className="h-[110px] w-[150px] mr-5 rounded-xl bg-white flex items-center justify-center hover:cursor-pointer"
            >
              <img src={item.img} alt="" />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </>
  );
}
