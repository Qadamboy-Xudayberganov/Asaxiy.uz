import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const contextApi = "https://d977ae3769de7d83.mokky.dev/AllProducts";

  const getData = async () => {
    try {
      const response = await axios.get(contextApi);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;

