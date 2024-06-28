import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardCart from "../assets/card_cart.svg";
import CardHeart from "../assets/CardHeart.svg";
import CadrCompare from "../assets/CardCompare.svg";
import { ProductContext } from "../context/ProductContext";
import { SavatchaContext } from "../context/SavatchaContext";

export default function NewItemsCor() {
  let source = useContext(ProductContext);
  let { getBasketData } = useContext(SavatchaContext);

  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        loop={true}
        slidesPerView={5}
        className="h-[430px] max-w-[1392px] pt-3"
      >
        {source.map((item) =>
          item.category == "NewItemsCor" ? (
            <SwiperSlide
              key={item.id}
              className="h-[400px] mr-[20px] rounded-[20px] bg-white hover:scale-[1.04] transition-transform duration-300 hover:cursor-pointer"
            >
              <div className="w-full h-[150px] relative mb-4 flex justify-center items-center rounded-[20px]">
                <div className="bg-[#ff0000] w-[53px] h-[22px] text-[14px] top-3.5 left-4 flex justify-center items-center rounded-md text-white absolute">
                  Yangi
                </div>
                <img className="w-[120px] " src={item.img} alt="" />
                <div>
                  <a href="">
                    <img
                      className="absolute top-4 right-4"
                      src={CardHeart}
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img
                      className="absolute top-12 right-4"
                      src={CadrCompare}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="px-4">
                <h3 className="text-[14px] mb-3 font-medium">{item.title}</h3>
                <p className="text-[14px] mb-1 flex justify-between">
                  ⭐⭐⭐⭐⭐{" "}
                  <span className="text-sm text-gray-400">0 ta sharh</span>
                </p>
                <p className="text-[18px] font font-bold text-[#006bff] mt-3">
                  {item.price}
                </p>
                <p className="text-[#ff9946] border-[1.7px] rounded-[5px] border-[#fa9d50] font-medium text-[14px] py-0.5 px-2 mt-2">
                  285 100 x 12 oy
                </p>
                <div className="flex items-center justify-between mt-9">
                  <button className="bg-[#006bff] text-[white] text-[13px] flex justify-center items-center w-[150px] h-[35px] rounded-[10px] buyButton">
                    Hoziroq harid qilish
                  </button>
                  <button
                    onClick={() => getBasketData(item)}
                    className="bg-[#00bfaf] flex items-center justify-center w-[50px] h-[35px] rounded-[8px]"
                  >
                    <img src={CardCart} alt="" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            0
          )
        )}
      </Swiper>
    </>
  );
}
