import React, { useContext } from "react";
import { BulimlarContext } from "../context/BulimlarContext";

const Advantages = () => {
  const { click } = useContext(BulimlarContext);

  return (
    <>
      {click ? null : (
        <div className="bg-[#016bfe] py-[48px] px-[15px]">
          <div className="max-w-[1362px] min-h-[150px] px-[48px] py-[32px] bg-white mx-auto rounded-[20px] grid grid-cols-4 justify-between r1250:grid-cols-2 r900:grid-cols-1 r900:flex r900:flex-col r900:items-center gap-5">
            <div className="flex items-center gap-5">
              <img
                className="h-[54px]"
                src="https://help.conrad.com/hc/theming_assets/01HZPBS3B0DKXVGTHHX43CK5NR"
                alt=""
              />
              <div>
                <h2 className="text-[16px] font-semibold mb-1">
                  Endi bozorga borishga hojat yo'q
                </h2>
                <p className="text-[14px] font-medium max-w-[180px] r900:max-w-[300px] text-[#95a0b0]">
                  Bizda qulay narxlar va uyga yetkazib berish mavjud
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <img
                className="h-[44px]"
                src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg"
                alt=""
              />
              <div>
                <h2 className="text-[16px] font-semibold mb-1">
                  Tez yetkazib berish
                </h2>
                <p className="text-[14px] r900:max-w-[300px] font-medium max-w-[180px] text-[#95a0b0]">
                  Bizning xizmatimiz sizni ajablanitiradi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <img
                className="w-[44px]"
                src="https://asaxiy.uz/custom-assets/images/icons/return.svg"
                alt=""
              />
              <div>
                <h2 className="text-[16px] font-semibold mb-1">
                  Siz uchun qulayliklar
                </h2>
                <p className="text-[14px] r900:max-w-[300px] font-medium max-w-[180px] text-[#95a0b0]">
                  Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish
                  kafolati
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <img
                className="w-[44px]"
                src="https://asaxiy.uz/custom-assets/images/icons/card.svg"
                alt=""
              />
              <div>
                <h2 className="text-[16px] font-semibold mb-1">Bo'lib to'lash</h2>
                <p className="text-[14px] r900:max-w-[300px] font-medium max-w-[180px] text-[#95a0b0]">
                  6 yoki 12 oy davomida oldindan to'lov yo'q
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Advantages;
