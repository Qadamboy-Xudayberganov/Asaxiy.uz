import React, { useContext } from "react";
import SocialMedia from "../assets/SocialMedia.png";
import { BulimlarContext } from "../context/BulimlarContext";

const Footer = () => {
  const { click } = useContext(BulimlarContext);

  return (
    <div className={`pt-[30px] bg-white ${click ? "hidden" : ""}`}>
      <footer className="m-auto max-w-[1392px] px-[15px] pt-[40px]">
        <div className="grid grid-cols-4 gap-5 r850:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 text-[20px] font-bold text-[#0d0d0d]">
              Ma'lumotlar
            </h2>
            <a
              className="text-[#757b95] font-medium hover:text-[#007bff]"
              href=""
            >
              Ko'p so'raladigan savollar
            </a>
            <a
              className="text-[#757b95] font-medium hover:text-[#007bff]"
              href=""
            >
              Olib ketish punktlari
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              Blog
            </a>
            <a
              className="text-[#757b95] font-medium hover:text-[#007bff]"
              href=""
            >
              Bizning brendlarimiz
            </a>
            <a
              className="text-[#757b95] font-medium hover:text-[#007bff]"
              href=""
            >
              Asaxiydagi karyerasi
            </a>
            <a
              className="text-[#757b95] font-medium hover:text-[#007bff]"
              href=""
            >
              Ommaviy oferta (Foydalanuvchi bitimi)
            </a>
            <a
              className="text-[#757b95] font-medium hover:text-[#007bff]"
              href=""
            >
              Muddatli toʻlov asosida sotib olishning umumiy qoidalari
            </a>
            <a
              className="text-[#757b95] font-medium hover:text-[#007bff]"
              href=""
            >
              Biz haqimizda
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 text-[20px] font-bold text-[#0d0d0d]">
              Biz bilan aloqa
            </h2>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              tel: +998 71 200 01 05
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              gmail: info@asaxiy.uz
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              manzil: Islom Karimov, 49, Toshkent
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 text-[20px] font-bold text-[#0d0d0d]">
              Erishgan yutuqlarimiz
            </h2>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              "Tahsin" mukofoti
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              "Shuhrat" medali
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              "Kelajak bunyodkori" medali
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 text-[20px] font-bold text-[#0d0d0d]">
              Kitob do'konlarimiz
            </h2>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              Asaxiy Novza
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              {" "}
              Asaxiy Farhod bozori
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              Asaxiy Panorama
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              Asaxiy Kitob Olami
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              Asaxiy Beruniy
            </a>
            <a className="text-[#757b95] font-medium hover:text-[#007bff]" href="">
              Asaxiy Books Kamolon
            </a>
          </div>
        </div>

        <div className="mt-5 flex justify-between r1050:flex r1050:flex-col gap-4">
          <div>
            <h2 className="mb-3 text-[20px] font-bold text-[#0d0d0d]">
              Biz ijtimoiy tarmoqlarda
            </h2>
            <img className="h-[40px]" src={SocialMedia} alt="" />
          </div>

          <div className="mb-5 ">
            <h2 className="mb-5 text-[20px] font-bold text-[#0d0d0d]">
              To'lov turlari
            </h2>
            <div className="flex w-[600px] justify-between r1050:grid r1050:grid-cols-3 gap-4 r650:w-[300px] r450:w-[200px] r650:grid-cols-2">
              <div className="w-[105px] h-[54px] rounded-[8px] bg-[#f2f2f7] flex items-center justify-center">
                <img
                  src="https://asaxiy.uz/custom-assets/images/uzum.svg"
                  alt=""
                />
              </div>
              <div className="w-[107px] h-[54px] rounded-[8px] bg-[#f2f2f7] flex items-center justify-center">
                <img
                  src="https://asaxiy.uz/custom-assets/images/payme.svg"
                  alt=""
                />
              </div>
              <div className="w-[105px] h-[54px] rounded-[8px] bg-[#f2f2f7] flex items-center justify-center">
                <img
                  src="https://asaxiy.uz/custom-assets/images/visa.svg"
                  alt=""
                />
              </div>
              <div className="w-[105px] h-[54px] rounded-[8px] bg-[#f2f2f7] flex items-center justify-center">
                <img
                  src="https://asaxiy.uz/custom-assets/images/mastercard.svg"
                  alt=""
                />
              </div>
              <div className="w-[105px] h-[54px] rounded-[8px] bg-[#f2f2f7] flex items-center justify-center">
                <img
                  src="https://asaxiy.uz/custom-assets/images/humo.svg"
                  alt=""
                />
              </div>
              <div className="w-[105px] h-[54px] rounded-[8px] bg-[#f2f2f7] flex items-center justify-center">
                <img
                  src="https://asaxiy.uz/custom-assets/images/uzcard.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-[#64748b] text-[16px] font-[550] py-[30px] text-center">
          2015-2024 Internet-do’kon asaxiy.uz: Maishiy texnikalar va
          boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga
          oshiriladi. Barcha huquqlar himoyalangan.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
