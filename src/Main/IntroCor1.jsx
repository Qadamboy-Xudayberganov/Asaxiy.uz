import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ProductContext } from "../context/ProductContext";

export default function IntroCor1() {
  let source = useContext(ProductContext);

  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        aria-live="off"
        modules={[Pagination]}
        className="w-[666px] bg-black rounded-[20px] "
      >
        {source.map((item) =>
          item.category === "IntroCorousel1" ? (
            <SwiperSlide
              key={item.id}
              className="w-full h-full flex justify-center hover:cursor-pointer r1300:w-full"
            >
              <img className="w-full h-full" src={item.img} alt="" />
            </SwiperSlide>
          ) : (
            ""
          )
        )}
      </Swiper>
    </>
  );
}
