import React from "react";
import "./Scroll.css";
const array = ">";
const space = "ㅤ";
import CadrCart from "../assets/card_cart.svg";
import CardHeart from "../assets/CardHeart.svg";
import CadrCompare from "../assets/CardCompare.svg";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { BulimlarContext } from "../context/BulimlarContext";
import { SavatchaContext } from "../context/SavatchaContext";

const Chegirmalar = () => {
  let source = useContext(ProductContext);
  const { click } = useContext(BulimlarContext);
  let { getBasketData } = useContext(SavatchaContext); 
  return (
    <div
      className={`h-[2800px] width-screen bg-[#f3f6fc] ${
        click ? "hidden" : ""
      }`}
    >
      <div className="max-w-[1362px] m-auto pt-[130px] pb-12 r1200:pt-5">
        <p className="py-[30px] text-[13px] font-[550] text-gray-500 pl-[15px]">
          Bosh sahifa {space} {array} {space}
          Chegirmadagi Mahsulotlar
        </p>
        <div className="flex">
          <div className=" w-[348px] px-[15px] flex flex-col gap-10 r1200:hidden">
            <div className="h-[505px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Bo'limlar</h1>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col overflow-y-scroll gap-6 scrollable-div">
                  <a href="">Kitoblar</a>
                  <a href="">Telefonlar va gadjetlar</a>
                  <a href="">Iqlim texnikasi</a>
                  <a href="">Sport va dam olish</a>
                  <a href="">Uy va ofis uchun tovarlar</a>
                  <a href="">Televizorlar, video va audio</a>
                  <a href="">Geymerlar uchun tovarlar</a>
                  <a href="">Mebel</a>
                  <a href="">Idish-tovoqlar</a>
                  <a href="">Goʻzallik va salomatlik</a>
                  <a href="">Bolalar uchun tovarlar</a>
                  <a href="">Kiyim, poyabzal va aksessuarlar</a>
                  <a href="">O‘yinchoqlar, sovg‘alar va aksessuarlar</a>
                  <a href="">Avto tovarlari</a>
                  <a href="">Qurilish va ta'mirlash</a>
                  <a href="">Kanselyariya tovarlari</a>
                  <a href="">Xizmatlar</a>
                  <a href="">Gullar</a>
                  <a href="">Onlayn kurslar</a>
                </div>
              </div>
            </div>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[530px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">
                Ishlab chiqaruvchi
              </h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col overflow-y-scroll gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Candy</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AENO</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AWEI</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Acer</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Apple</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Arshia</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Artel</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Avalon</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AverMedia</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Bench</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Candy</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AENO</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AWEI</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Acer</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Apple</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Arshia</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Artel</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Avalon</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AverMedia</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Bench</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Candy</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AENO</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AWEI</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Acer</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Apple</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Arshia</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Artel</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Avalon</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">AverMedia</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Bench</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="w-[1044px] h-[100px]  px-[15px] r1200:w-full">
            <div className="h-10">
              <h1 className="text-[16px] font-[500] h-[34px] flex items-center mb-[22px]">
                Chegirmadagi Mahsulotlar
              </h1>

              <div className="max-w-full grid grid-cols-4 gap-4 r1100:grid-cols-3 r800:grid-cols-2 r600:grid-cols-1">
                {source.map((item) =>
                  item.category === "Chegirmalar" ? (
                    <div className="h-[400px] rounded-[20px] bg-white hover:scale-[1.04] transition-transform duration-300 hover:cursor-pointer shadow-lg">
                      <div className="w-full h-[150px] relative mb-4 flex justify-center items-center rounded-[20px]">
                        <div className="bg-[#ff9800] w-[80px] h-[22px] text-[14px] top-3.5 left-4 flex justify-center items-center rounded-md text-white absolute">
                          Chegirma
                        </div>
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
                        <h3 className="text-[14px] mb-3 font-medium">
                          {item.title}
                        </h3>
                        <p className="text-[14px] mb-1 flex justify-between">
                          ⭐⭐⭐⭐⭐{" "}
                          <span className="text-sm text-gray-400">
                            0 ta sharh
                          </span>
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
                          <button onClick={() => getBasketData(item)} className="bg-[#00bfaf] flex items-center justify-center w-[50px] h-[35px] rounded-[8px]">
                            <img src={CadrCart} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chegirmalar;
