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

const Kitoblar = () => {
  let source = useContext(ProductContext);
  const { click } = useContext(BulimlarContext);
  let { getBasketData } = useContext(SavatchaContext);

  return (
    <div
      className={`h-[3000px] width-screen bg-[#f3f6fc] ${
        click ? "hidden" : ""
      }`}
    >
      <div className="max-w-[1362px] m-auto pt-[130px] pb-12 r1200:pt-5">
        <p className="py-[30px] text-[13px] font-[550] text-gray-500 pl-[15px]">
          Bosh sahifa {space} {array} {space}
          Kitoblar
        </p>
        <div className="flex">
          <div className=" w-[348px] px-[15px] flex flex-col gap-10 r1200:hidden">
            <div className="h-[505px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Bo'limlar</h1>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col overflow-y-scroll gap-6 scrollable-div">
                  <a href="">Asaxiy Books kitoblari</a>
                  <a href="">Badiiy adabiyotlar</a>
                  <a href="">Psixologiya va shaxsiy rivojlanish</a>
                  <a href="">Biznes kitoblar</a>
                  <a href="">Bolalar adabiyoti</a>
                  <a href="">Diniy adabiyotlar</a>
                  <a href="">IT sohasiga oid kitoblar</a>
                  <a href="">Rus tilidagi kitoblar</a>
                  <a href="">Chet tilini o‘rganish</a>
                  <a href="">Ilm-fan va darsliklar</a>
                  <a href="">Abituriyentlar uchun kitoblar</a>
                  <a href="">TOP-100 ta bestseller</a>
                  <a href="">Bestseller to‘plamlar</a>
                  <a href="">Detektiv va fantastika</a>
                  <a href="">Siyosat</a>
                  <a href="">Biografiya</a>
                  <a href="">Sovg‘a to‘plamlari</a>
                  <a href="">Organayzerlar</a>
                  <a href="">Turk adabiyoti</a>
                  <a href="">Lug‘at va so‘zlashgichlar</a>
                </div>
              </div>
            </div>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[530px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Til</h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col overflow-y-scroll gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href=""> Arabcha</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Fransuzcha</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Inglizcha</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Koreyski</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">O'zbekcha</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">O'zb/Rus</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Ruscha</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Turkcha</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Uzb/English</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Корейский / Русский</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">на немецском</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Узб/Рус/Англ</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[520px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Muallif</h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col overflow-y-scroll gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abbos Said</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdel Sellu</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdujabbor Obidov</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdukarim Mirzayev</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdulhamid Cho`lpon</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdulhamid Zayriyev</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdulla Avloniy</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdulla Oripov</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdulla Qahhor</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abduqahhor Ismoilov</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abduqayum Yo`ldoshev</a>
                  </div>
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Abdurahmon Ibrohim</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[520px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Nashriyot</h1>
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
                    <a href="">Adabiyot</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Adast poligraf</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Adolat</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">"Adolat" milliy huquqiy axborot markazi</a>
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
                    <a href="">Afzalzoda books</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">
                      Alisher Navoiy nomidagi O'zbekiston Milliy kutubxonasi
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[240px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Muqovasi</h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Qattiq</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Yumshoq</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Yumshoq + futlyar (g'ilof)</a>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-[190px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold ">Yozuv</h1>
              <form action=""></form>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col gap-6 scrollable-div">
                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Kirillcha</a>
                  </div>

                  <div className="flex gap-3 ic">
                    <label className="custom-checkbox flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                    <a href="">Lotincha</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="w-[1044px] h-[100px]  px-[15px] r1200:w-full">
            <div className="h-10">
              <h1 className="text-[16px] font-[500] h-[34px] flex items-center mb-[22px]">
                Kitoblar
              </h1>

              <div className="max-w-full grid grid-cols-4 gap-4 r1100:grid-cols-3 r800:grid-cols-2 r600:grid-cols-1">
                {source.map((item) =>
                  item.category === "Kitoblar" ? (
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

export default Kitoblar;
