import React from "react";
import Accordion from "./Accordion";

const About = () => {
  return (
    <div className="bg-white p-[30px] rounded-[30px] ">
      <h1 className="text-[40px] mb-2 text-center">
        Asaxiy kompaniyasi haqida
      </h1>
      <p className="text-[15px] mb-4 text-center">
        Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini
        yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish
        tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon
        Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari
        tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi
        texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish
        imkonini beradi.
      </p>
      <p className="text-[15px] mb-4 text-center">
        Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan
        o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi
        sifatli yangi mahsulotlar bilan boyitilib kelmoqda.
      </p>
      <hr />
      <Accordion />
      <hr />
      <br />
      <b className="text-[16px] font-[550]">
        "Asaxiy Books" MCHJ <br />
        Ro'yxatdan o'tish raqami: 646439 <br />
        INN: 305829008 <br />
        MCHJ rahbari: Allayev Firuz Abdunasimovich
      </b>
    </div>
  );
};

export default About;
