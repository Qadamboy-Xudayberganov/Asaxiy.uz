import React, { createContext, useState, useEffect } from "react";

export const SevimlilarContext = createContext();

const SevimlilarProvider = ({ children }) => {
  let storage = JSON.parse(localStorage.getItem("liked"));
  const [liked, setLiked] = useState(storage || []);

  const getLiked = (data) => {
    const isExist = liked.some((item) => item.id === data.id);
    if (!isExist) {
      setLiked([...liked, data]);
    }
  };

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  return (
    <SevimlilarContext.Provider value={{ getLiked, liked }}>
      {children}
    </SevimlilarContext.Provider>
  );
};

export default SevimlilarProvider;
