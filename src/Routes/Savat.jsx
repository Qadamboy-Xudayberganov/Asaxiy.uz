import React, { useContext } from "react";
import { SavatchaContext } from "../context/SavatchaContext";
import { BulimlarContext } from "../context/BulimlarContext";
import { Link } from "react-router-dom";
import Delete from "../assets/delete.svg";

const array = ">";
const space = "ㅤ";

const Savat = () => {
  const { basket } = useContext(SavatchaContext);
  const { click } = useContext(BulimlarContext);

  return (
    <div
      className={`max-w-[1362px] m-auto pt-[130px] pb-12 r1200:pt-5 px-3 ${
        click ? "hidden" : ""
      }`}
    >
      <p className="py-[30px] text-[13px] font-[550] text-gray-500 pl-[15px]">
        Bosh sahifa {space} {array} {space}
        Savatcha
      </p>
      <h1 className="text-[24px] font-[450] mt-3">Savatcha</h1>
      <div>
        <div className="relative">
          <div className="max-w-[270px] mt-[10px] flex justify-between">
            <button className="text-[16px] px-[16px] py-[10px] rounded-[8px] font-[450] relative bg-[#007bff] text-white border">
              Oddiy zakaz
              <div className="h-[18px] w-[18px] rounded-[9px] text-[13px] font-[500] text-[#007bff] bg-white flex items-center justify-center absolute top-0 right-1">
                {basket.length}
              </div>
            </button>
          </div>

          {basket.length === 0 ? (
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://asaxiy.uz/custom-assets/images/cabinet/basket_no_page.png"
                alt=""
              />
              <h2 className="text-[24px] font-[700]">
                Savatda hozircha mahsulot yo'q.
              </h2>
              <p className="font-[500]">
                Bosh sahifadagi termalardan boshlang yoki kerakli mahsulotni
                qidiruv orqali toping.
              </p>
            </div>
          ) : (
            <div className="max-w-[1014px] rounded-[16px] bg-white px-[30px] py-[10px] mt-3 mr-[350px] r1200:w-full">
              <div className="max-w-[954px] px-[10px] py-5 ">
                {basket.map((item) => (
                  <div key={item.id}>
                    <Link className="flex items-center justify-between">
                      <img
                        className="w-[124px] h-[124px]"
                        src={item.img}
                        alt=""
                      />
                      <div className="flex justify-between items-center gap-2 r600:flex-col">
                        <p className="max-w-[300px] font-[500] hover:text-[#007aff] r600:text-center">
                          {item.title}
                        </p>
                        <div className="flex w-[120px] justify-between items-center">
                          <button className="w-[30px] h-[30px] border border-[#3388ff] rounded-[15px] flex items-center justify-center">
                            -
                          </button>
                          <p>1</p>
                          <button className="w-[30px] h-[30px] border border-[#3388ff] rounded-[15px] flex items-center justify-center">
                            +
                          </button>
                        </div>
                        <p className="font-[650] text-[#016bff]">
                          {item.price}
                        </p>
                        <div className="flex gap-5">
                          <img
                            className="w-[18px] h-[18px]"
                            src="https://asaxiy.uz/custom-assets/images/icons/heart.svg"
                            alt=""
                          />
                          <img
                            className="w-[22px] h-[22px]"
                            src={Delete}
                            alt=""
                          />
                        </div>
                      </div>
                    </Link>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="w-[320px] bg-white absolute rounded-[18px] top-[58px] right-0 r1200:hidden">
            <div className="py-[30px] px-[25px] flex flex-col items-center gap-3 border-b border-gray-300 ">
              <p className="text-[#fe7708] text-[16px] font-[550]">
                Savatdagi mahsulotlar soni: {basket.length}
              </p>
              <p>Jami miqdor:</p>
            </div>

            <div className="py-[30px] px-[25px] flex items-center justify-center">
              <button className="w-[214px] h-[48px] rounded-[10px] bg-[#006bff] text-white font-[450]">
                BUYURTMA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savat;
