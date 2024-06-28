import React, { useContext } from "react";
import IntroCor1 from "./IntroCor1";
import IntroCor2 from "./IntroCor2";
import NewItemsCor from "./NewItemsCor";
import BestSellerComponent from "./BestSeller";
import SalesCor from "./SalesCor";
import Conditioners from "./Conditioners";
import Top from "./Top";
import SelfAdvertisement from "./SelfAdvertisement";
import Chegirma from "./Chegirma";
import PopularBrands from "./PopularBrands";
import About from "./About";
import Bulimlar from "../Header/Bulimlar";
import { BulimlarContext } from "../context/BulimlarContext";

const Main = () => {
  const { click } = useContext(BulimlarContext);
  const array = ">";
  const space = "ㅤ";

  return (
    <main className="bg-[#f1f5fa]">
      {click ? (
        <Bulimlar />
      ) : (
        <>
          {/* First Carousel */}
          <div className="max-w-[1362px] m-auto pt-40 flex justify-between r1200:pt-5 r1300:gap-5 r1300:flex-col items-center r800:hidden">
            <div className="h-[352px] px-[15px] relative">
              <IntroCor1 />
            </div>
            {/* Second Carousel */}
            <div className="h-[352px] px-[15px]">
              <IntroCor2 />
            </div>
          </div>

          {/* New Items Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px]  r1250:hidden">
            <h1 className="font-[550] text-[20px]">
              Yangi kelganlar {space} {array}
            </h1>
            <div>
              <NewItemsCor />
            </div>
          </div>

          {/* Bestseller Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px]">
            <h1 className="font-[600] text-[20px] pb-[20px]">
              BESTSELLER {space} {array}
            </h1>
            <div className="max-w-full grid grid-cols-5 gap-5 pr-5 r1200:grid-cols-4 r1000:grid-cols-3 r700:grid-cols-2 r500:grid-cols-1">
              <BestSellerComponent />
            </div>
          </div>

          {/* Sales Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px] r900:hidden">
            <div>
              <SalesCor />
            </div>
          </div>

          {/* Conditioners Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px] r900:hidden">
            <h1 className="font-[600] text-[20px] pb-[20px]">
              Konditsionerlar {space} {array}
            </h1>
            <div>
              <Conditioners />
            </div>
          </div>

          {/* Top Products Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px] ">
            <h1 className="font-[600] text-[20px] pb-[20px]">
              Ommabop tovarlar {space} {array}
            </h1>
            <div className="max-w-full grid grid-cols-5 pr-5 gap-5 r1200:grid-cols-4 r1000:grid-cols-3 r700:grid-cols-2 r500:grid-cols-1">
              <Top />
            </div>
          </div>

          {/* Self Advertisement Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px]">
            <SelfAdvertisement />
          </div>

          {/* Chegirma Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px] r900:hidden">
            <h1 className="font-[550] text-[20px]">
              Chegirmalar {space} {array}
            </h1>
            <div>
              <Chegirma />
            </div>
          </div>

          {/* Popular Brands Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px] pr-3">
            <h1 className="font-[550] text-[20px]">
              Mashxur brendlar {space} {array}
            </h1>
            <PopularBrands />
          </div>

          {/* About Section */}
          <div className="max-w-[1362px] m-auto pl-[15px] pt-[30px] pr-3">
            <About />
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
