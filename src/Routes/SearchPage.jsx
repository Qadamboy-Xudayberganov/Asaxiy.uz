import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
const array = ">";
const space = "ㅤ";
import { useLocation } from "react-router-dom";
import { BulimlarContext } from "../context/BulimlarContext";
import { SavatchaContext } from "../context/SavatchaContext";
import CadrCart from "../assets/card_cart.svg";
import CardHeart from "../assets/CardHeart.svg";
import CadrCompare from "../assets/CardCompare.svg";
import { Link } from "react-router-dom";

const manufacturers = [
  "Candy",
  "AENO",
  "AWEI",
  "Acer",
  "Apple",
  "Arshia",
  "Artel",
  "Avalon",
  "AverMedia",
  "Bench",
];

const SearchPage = () => {
  const { search } = useLocation();
  const [state, setState] = useState([]);
  const { click } = useContext(BulimlarContext);
  const { getBasketData } = useContext(SavatchaContext);
  let need = search.split("=")[1];

  const [add, setAdd] = useState(false);
  const handleToggle = (data) => {
    setAdd(!add);
    // handleToggle.some((item) => item.id === data.id);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://d977ae3769de7d83.mokky.dev/AllProducts?title=${need}`
      );
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div
      className={`h-[3000px] width-screen bg-[#f3f6fc] ${
        click ? "hidden" : ""
      }`}
    >
      <div className="max-w-[1362px] m-auto pt-[130px] pb-12">
        <p className="py-[30px] text-[13px] font-[550] text-gray-500 pl-[15px]">
          Bosh sahifa {space} {array} {space} Mahsulotlar
        </p>
        <div className="flex">
          <div className="w-[348px] px-[15px] flex flex-col gap-10">
            <div className="h-[505px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold">Bo'limlar</h1>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col overflow-y-scroll gap-6 scrollable-div">
                  {[
                    "Kitoblar",
                    "Telefonlar va gadjetlar",
                    "Iqlim texnikasi",
                    "Sport va dam olish",
                    "Uy va ofis uchun tovarlar",
                    "Televizorlar, video va audio",
                    "Geymerlar uchun tovarlar",
                    "Mebel",
                    "Idish-tovoqlar",
                    "Goʻzallik va salomatlik",
                    "Bolalar uchun tovarlar",
                    "Kiyim, poyabzal va aksessuarlar",
                    "O‘yinchoqlar, sovg‘alar va aksessuarlar",
                    "Avto tovarlari",
                    "Qurilish va ta'mirlash",
                    "Kanselyariya tovarlari",
                    "Xizmatlar",
                    "Gullar",
                    "Onlayn kurslar",
                  ].map((category, index) => (
                    <a key={index} href="">
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[530px] bg-white rounded-t-[20px] rounded-b-[18px]">
              <h1 className="p-5 text-[24px] font-semibold">
                Ishlab chiqaruvchi
              </h1>
              <hr />
              <div className="py-4 pl-6 pr-[5px]">
                <div className="h-[400px] flex flex-col overflow-y-scroll gap-6 scrollable-div">
                  {manufacturers.map((manufacturer, index) => (
                    <div key={index} className="flex gap-3 ic">
                      <label className="custom-checkbox flex items-center">
                        <input className="form-checkbox" type="checkbox" />
                      </label>
                      <a href="">{manufacturer}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1044px] h-[100px] px-[15px]">
            <div className="h-10">
              <h1 className="text-[16px] font-[500] h-[34px] flex items-center mb-[22px]">
                Mahsulotlar
              </h1>

              <div className="max-w-full grid grid-cols-4 gap-4">
                {state.map(
                  (item) =>
                    item.category === "Kitoblar" && (
                      <div
                        key={item.id}
                        className="h-[400px] rounded-[20px] bg-white hover:scale-[1.04] transition-transform duration-300 hover:cursor-pointer"
                      >
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
                            <button
                              onClick={() => getBasketData(item)}
                              className="bg-[#00bfaf] flex items-center justify-center w-[50px] h-[35px] rounded-[8px]"
                            >
                              <img src={CadrCart} alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
