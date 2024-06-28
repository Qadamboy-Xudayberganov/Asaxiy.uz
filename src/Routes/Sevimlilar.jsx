import React from "react";
import { BulimlarContext } from "../context/BulimlarContext";
import { SavatchaContext } from "../context/SavatchaContext";
import { useContext } from "react";
import CadrCart from "../assets/card_cart.svg";
import CardHeart from "../assets/CardHeart.svg";
import CadrCompare from "../assets/CardCompare.svg";
import { SevimlilarContext } from "../context/SevimlilarContext";

const array = ">";
const space = "ㅤ";

const Sevimlilar = () => {
  const { click } = useContext(BulimlarContext);
  let { liked, getLiked } = useContext(SevimlilarContext);
  let { getBasketData } = useContext(SavatchaContext);

  return (
    <div
      className={`max-w-[1362px] m-auto pt-[130px] pb-12 px-3 r1200:pt-3  ${
        click ? "hidden" : ""
      }`}
    >
      <p className="py-[30px] text-[13px] font-[550] text-gray-500 pl-[15px]">
        Bosh sahifa {space} {array} {space}
        Sevimlilar
      </p>

      {liked.length == 0 ? (
        <div className="flex flex-col items-center gap-3">
          <img
            src="https://asaxiy.uz/custom-assets/images/heart-bubble.svg"
            alt=""
          />
          <h2 className="text-[24px] font-[700]">Sevimli mahsulotlar yo'q</h2>
          <p className="font-[500]">Mahsulotdagi ❤️ belgisi bilan qo'shing️</p>
        </div>
      ) : (
        <div className="max-w-full grid grid-cols-5 gap-4 r1150:grid-cols-4 r900:grid-cols-3 r700:grid-cols-2 r450:grid-cols-1">
          {liked.map((item) => (
            <div className="h-[400px] rounded-[20px] bg-white hover:scale-[1.04] transition-transform duration-300 hover:cursor-pointer shadow-lg">
              <div className="w-full h-[150px] relative mb-4 flex justify-center items-center rounded-[20px]">
                <img className="w-[120px]" src={item.img} alt="" />
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
                <p className="text-[#b1bccb] line-through text-[13px]">
                  {item.oldPrice}
                </p>
                <p className="text-[18px] font font-bold text-[#006bff]">
                  {item.price}
                </p>
                <p className="text-[#ff9946] border-[1.7px] rounded-[5px] border-[#fa9d50] font-medium text-[14px] py-0.5 px-2 mt-2">
                  285 100 x 12 oy
                </p>
                <div className="flex items-center justify-between mt-7">
                  <button className="bg-[#006bff] text-[white] text-[13px] flex justify-center items-center w-[150px] h-[35px] rounded-[10px] buyButton">
                    Hoziroq harid qilish
                  </button>
                  <button
                    onClick={() => getBasketData(item)}
                    className="bg-[#00bfaf] flex items-center justify-center w-[50px] h-[35px] rounded-[8px]"
                  >
                    <img src={CadrCart} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sevimlilar;
