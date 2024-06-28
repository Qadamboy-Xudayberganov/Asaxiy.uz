import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductContext } from "../context/ProductContext";

export default function SalesCor() {
  let source = useContext(ProductContext);

  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        loop={true}
        slidesPerView={4.1}
        className="max-w-[1392px] pt-3 pr-5"
      >
        {source.map((item) =>
          item.category === "SalesCor" ? (
            <SwiperSlide
              key={item.id}
              className="max-w-[328px] mr-[10px] rounded-[20px] bg-white hover:cursor-pointer"
            >
              <img src={item.img} className="rounded-[17px]" alt="" />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </>
  );
}
