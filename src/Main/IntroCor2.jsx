import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductContext } from "../context/ProductContext";
export default function IntroCor2() {
  let source = useContext(ProductContext);

  return (
    <>
      <div className="h-[350px] w-[666px] rounded-[15px] p-3 bg-white">
        <div>
          <span>
            <h2 className="text-[18px] font-bold">Hafta chegirmalari</h2>
          </span>

          <br />
          <Swiper
            watchSlidesProgress={true}
            loop={true}
            slidesPerView={3.5}
            className="max-w-full"
          >
            {source.map((item) =>
              item.category === "IntroCorousel2" ? (
                <SwiperSlide
                  key={item.id}
                  className="h-[280px] ml-[5px] rounded-[4px] hover:cursor-pointer"
                >
                  <div className="w-full h-[130px] bg-[#f8fafc] flex justify-center items-center">
                    <img className="w-[120px]" src={item.img} alt="" />
                  </div>
                  <div className="px-4">
                    <h3 className="text-[12px] my-[5px] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-[14px] font line-through text-[#888888] font-medium pt-2">
                      {item.oldPrice}
                    </p>
                    <p className="text-[14px] font font-medium text-[#006bff] pt-2">
                      {item.newPrice}
                    </p>
                    <button className="bg-[#006bff] text-[white] text-[13px] flex justify-center items-center w-[160px] h-[30px] mt-1.5 rounded-[5px]">
                      01.01.2024
                    </button>
                  </div>
                </SwiperSlide>
              ) : (
                ""
              )
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}
