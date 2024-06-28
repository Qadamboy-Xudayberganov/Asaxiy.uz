import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BulimlarContext = createContext();

const BulimlarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [click, setclick] = useState(false);

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

  const handleClick = () => {
    setclick(!click);
    console.log(click);
  };

  const logoUchun = () => {
    setclick(false);
  };

  return (
    <BulimlarContext.Provider value={{ data, handleClick, click, logoUchun }}>
      {children}
    </BulimlarContext.Provider>
  );
};

export default BulimlarProvider;
