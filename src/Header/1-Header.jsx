import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/asaxiy-logo.svg";
import menubutton from "../assets/header-menu-button.svg";
import compare from "../assets/compare_header.svg";
import payment from "../assets/payment.svg";
import tracker from "../assets/tracker.svg";
import cart from "../assets/cart.svg";
import heart from "../assets/heart.svg";
import uz from "../assets/language-uz.svg";
import ru from "../assets/language-ru.svg";
import avatar from "../assets/avatar.svg";
import { useContext } from "react";
import { BulimlarContext } from "../context/BulimlarContext";
import { SavatchaContext } from "../context/SavatchaContext";
import { SevimlilarContext } from "../context/SevimlilarContext";
import SearchForm from "./SearchForm";

const Header = () => {
  const [flag, setFlag] = useState(true);
  let { handleClick } = useContext(BulimlarContext);
  let { basket } = useContext(SavatchaContext);
  let { logoUchun } = useContext(BulimlarContext);
  let { liked } = useContext(SevimlilarContext);

  return (
    <div className="bg-white relative flex justify-center">
      <header className={`fixed w-screen z-10 bg-white  shadow-md r1200:hidden`}>
        <div className="max-w-[1362px] m-auto flex items-center justify-between py-[17px] px-[15px]">
          <Link to={"/"} onClick={logoUchun}>
            <img className="max-h-[134px]" src={logo} alt="" />
          </Link>
          <Link
            onClick={handleClick}
            className="flex items-center bg-[#006bff] min-w-[117px] rounded-[10px] py-2 px-5 text-[14px] text-white"
          >
            <img src={menubutton} alt="" />
            Bo'limlar
          </Link>
          <SearchForm />
          <div className="flex gap-9 mx-3">
            <Link
              href="#"
              className="flex flex-col text-[12px] leading-[2] hover-custom-filter font-[500]"
            >
              <img className="h-5" src={compare} alt="" />
              Taqqoslash
            </Link>
            <Link
              href="#"
              className="flex flex-col text-[12px] leading-[2] hover-custom-filter font-[500]"
            >
              <img className="h-5" src={payment} alt="" />
              To'lov
            </Link>
            <Link
              href="#"
              className="flex flex-col text-[12px] leading-[2] hover-custom-filter font-[500]"
            >
              <img className="h-5" src={tracker} alt="" />
              Trek
            </Link>
            <div className="relative">
              <Link
                onClick={logoUchun}
                to={"/Savat"}
                href="#"
                className="flex flex-col text-[12px] leading-[2] hover-custom-filter font-[500] "
              >
                <img className="h-5" src={cart} alt="" />
                Savatcha
              </Link>
              <div className="h-[18px] w-[18px] rounded-[9px] text-[13px] font-[500] text-white  bg-[#007bff] flex items-center justify-center absolute top-[-5px] right-1">
                <p>{basket.length}</p>
              </div>
            </div>
            <div className="relative">
              <Link
                onClick={logoUchun}
                to={"/Sevimlilar"}
                href="#"
                className="flex flex-col text-[12px] leading-[2] hover-custom-filter font-[500]"
              >
                <img className="h-5" src={heart} alt="" />
                Sevimlilar
              </Link>
              <div className="h-[18px] w-[18px] rounded-[9px] text-[13px] font-[500] text-white  bg-[#007bff] flex items-center justify-center absolute top-[-5px] right-1">
                <p>{liked.length}</p>
              </div>
            </div>
            {flag && (
              <a
                href="#"
                className="flex flex-col w-10 items-center"
                onClick={() => setFlag(!flag)}
              >
                <img className="h-5" src={uz} alt="" />
                <span className="hover:text-[#494fff] text-[12px] font-[500] leading-[2]">
                  O'zbekcha
                </span>
              </a>
            )}
            {!flag && (
              <a
                href="#"
                className="flex flex-col w-10 items-center"
                onClick={() => setFlag(!flag)}
              >
                <img src={ru} className="h-5" alt="" />
                <span className="hover:text-[#0056b3] font-[500] text-[12px] leading-[2]">
                  Русский
                </span>
              </a>
            )}
            <Link
              href="#"
              className="flex flex-col text-[12px] leading-[2] ml-2 hover-custom-filter"
            >
              <img className="h-5" src={avatar} alt="" />
              Kirish
            </Link>
          </div>
        </div>
        <hr />
        <nav className="max-w-[1362px] m-auto  py-[17px] flex justify-between text-[15px] font-medium px-[15px]">
          <Link
            onClick={logoUchun}
            to={"/Chegirmalar"}
            className="hover:text-[#4463ff]"
            href="#"
          >
            Chegirmalar
          </Link>
          <Link
            onClick={logoUchun}
            to={"/Konditsionerlar"}
            className="hover:text-[#4463ff]"
            href="#"
          >
            Konditsionerlar
          </Link>
          <Link
            onClick={logoUchun}
            to={"/Telefonlar"}
            className="hover:text-[#4463ff]"
            href="#"
          >
            Telefonlar
          </Link>
          <Link
            onClick={logoUchun}
            to={"/MaishiyTexnika"}
            className="hover:text-[#4463ff]"
            href="#"
          >
            Maishiy texnika
          </Link>
          <Link
            onClick={logoUchun}
            to={"/Kitoblar"}
            className="hover:text-[#4463ff]"
            href="#"
          >
            Kitoblar
          </Link>
          <Link
            onClick={logoUchun}
            to={"/Televizorlar"}
            className="hover:text-[#4463ff]"
            href="#"
          >
            Televizorlar
          </Link>
          <Link
            onClick={logoUchun}
            to={"/Noutbuklar"}
            className="hover:text-[#4463ff]"
            href="#"
          >
            Noutbuklar
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
