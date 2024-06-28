import React, { createContext, useState, useEffect } from "react";

export const SavatchaContext = createContext();

const SavatchaProvider = ({ children }) => {
    let storage = JSON.parse(localStorage.getItem("products"));
  const [basket, setBasket] = useState(storage || []);

  const getBasketData = (data) => {
    const isExist = basket.some((item) => item.id === data.id);
    if (!isExist) {
      setBasket([...basket, data]);
    }
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(basket));
  }, [basket]);

  return (
    <SavatchaContext.Provider value={{ getBasketData, basket }}>
      {children}
    </SavatchaContext.Provider>
  );
};

export default SavatchaProvider;
