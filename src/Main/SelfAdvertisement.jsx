import React from "react";

const SelfAdvertisement = () => {
  return (
    <div className="pb-5 flex justify-between gap-5 r1000:flex-col ">
      <div className="bg-[#006bff] max-w-[660px] h-[250px] flex rounded-3xl px-[15px] r1000:max-w-full r1000:justify-between r450:flex-col r450:h-[500px]">
        <div className="flex flex-col items-center text-white gap-6 my-auto">
          <img
            src="https://asaxiy.uz/custom-assets/images/company/asaxiy-logo-white.svg"
            alt=""
          />
          <h2 className="text-[16px]">Sizning internet do'koningiz</h2>
          <div className="flex gap-5">
            <img
              className="w-[94px] h-[28px]"
              src="https://asaxiy.uz/custom-assets/images/app-store.svg"
              alt=""
            />
            <img
              className="w-[94px] h-[28px]"
              src="https://asaxiy.uz/custom-assets/images/google-play.svg"
              alt=""
            />
            <img
              className="w-[94px] h-[28px]"
              src="https://asaxiy.uz/custom-assets/images/app-gallery.svg"
              alt=""
            />
          </div>
        </div>
        <img
          className="w-[320px] h-[218px] mt-8"
          src="https://asaxiy.uz/custom-assets/images/asaxiy-apps.png"
          alt=""
        />
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="bg-[#006bff] max-w-[660px] h-[250px] flex rounded-3xl px-[15px] r1000:max-w-full r1000:justify-between r450:flex-col r450:h-[500px]">
        <div className="flex flex-col items-center text-white gap-6 my-auto">
          <img
            src="https://asaxiy.uz/custom-assets/images/company/asaxiy-books-logo.svg"
            alt=""
          />
          <h2 className="text-[16px]">Sizning onlayn kitob do'koningiz</h2>
          <div className="flex gap-5">
            <img
              className="w-[94px] h-[28px]"
              src="https://asaxiy.uz/custom-assets/images/app-store.svg"
              alt=""
            />
            <img
              className="w-[94px] h-[28px]"
              src="https://asaxiy.uz/custom-assets/images/google-play.svg"
              alt=""
            />
            <img
              className="w-[94px] h-[28px]"
              src="https://asaxiy.uz/custom-assets/images/app-gallery.svg"
              alt=""
            />
          </div>
        </div>
        <img
          className="w-[320px] h-[218px] mt-8"
          src="https://asaxiy.uz/custom-assets/images/banners/ios%20banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SelfAdvertisement;
