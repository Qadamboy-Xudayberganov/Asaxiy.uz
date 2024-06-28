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

const Konditsioner = () => {
  let source = useContext(ProductContext);
  const { click } = useContext(BulimlarContext);
  let { getBasketData } = useContext(SavatchaContext);

  return (
    <div
      className={`h-[3400px] width-screen bg-[#f3f6fc] ${
        click ? "hidden" : ""
      }`}
    >
     <div className="max-w-[1362px] m-auto pt-[130px] pb-12 r1200:pt-5">
        <p className="py-[30px] text-[13px] font-[550] text-gray-500 pl-[15px]">
          Bosh sahifa {space} {array} {space}
          Iqlim texnikasi {space} {array} {space}
          Konditsionerlar
        </p>
        <div className="flex">
          <div className=" w-[348px] px-[15px] flex flex-col gap-10 r1200:hidden">
            <div className="h-[135px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Bo'limlar</h1>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[40px] gap-6 scrollable-div">
                  <a href="">Mobil konditsionerlar</a>
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
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[470px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Quvvati</h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">07</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">09</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">12</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">18</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">24</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">30</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">48</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">60</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[520px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Maydon</h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col overflow-y-scroll gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">140 kv.m</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">170 kv.m</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">20 kv.m</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">25 kv.m</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">35 kv.m</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">60 kv.m</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">72 kv.m</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">75 kv.m gacha</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">90 kv.m gacha</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[470px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">
                Ishlash rejimlari
              </h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Ionizatsiya</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Isitish</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Past ovozda ishlaydigan</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Qayta ishlash</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Quritish</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Sovutish</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Tozalash</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Tungi</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[190px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Turi</h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Split-tizim</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Ustunli</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[240px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">
                Kompressor turi
              </h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Invertor</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Low Voltage</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Odatiy</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[280px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">
                Ichki blokni o'rnatish turi
              </h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Devorga o'rnatiladigan</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Mobil</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Ustunli</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="w-[1044px] h-[100px]  px-[15px] r1200:w-full">
            <div className="h-10">
              <h1 className="text-[16px] font-[500] h-[34px] flex items-center mb-[22px]">
                Konditsionerlar
              </h1>

              <div className="max-w-full grid grid-cols-4 gap-4 r1100:grid-cols-3 r800:grid-cols-2 r600:grid-cols-1">
                {source.map((item) =>
                  item.category === "Konditsioner" ? (
                    <div className="h-[400px] rounded-[20px] bg-white hover:scale-[1.04] transition-transform duration-300 hover:cursor-pointer">
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

export default Konditsioner;
