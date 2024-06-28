import React from "react";
import Header from "./Header/1-Header";
import Main from "./Main/Main";
import Advantages from "./Advantages/Advantages";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Savat from "./Routes/Savat";
import Sevimlilar from "./Routes/Sevimlilar";
import Chegirmalar from "./Routes/Chegirmalar";
import Konditsionerlar from "./Routes/Konditsioner";
import Telefonlar from "./Routes/Telefonlar";
import MaishiyTexnika from "./Routes/MaishiyTexnika";
import Kitoblar from "./Routes/Kitoblar";
import Televizorlar from "./Routes/Televizorlar";
import Noutbuklar from "./Routes/Noutbuklar";
import SearchPage from "./Routes/SearchPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Savat" element={<Savat />} />
        <Route path="/Sevimlilar" element={<Sevimlilar />} />
        <Route path="/Chegirmalar" element={<Chegirmalar />} />
        <Route path="/Konditsionerlar" element={<Konditsionerlar />} />
        <Route path="/Telefonlar" element={<Telefonlar />} />
        <Route path="/MaishiyTexnika" element={<MaishiyTexnika />} />
        <Route path="/Kitoblar" element={<Kitoblar />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/Televizorlar" element={<Televizorlar />} />
        <Route path="/Noutbuklar" element={<Noutbuklar />} />
      </Routes>
      <Advantages />
      <Footer />
    </div>
  );
};

export default App;
