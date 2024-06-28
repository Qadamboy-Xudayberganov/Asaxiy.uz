import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ConditionersContext = createContext();

const ConditionersProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const contextApi = "https://d977ae3769de7d83.mokky.dev/Conditioners";

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
    <ConditionersContext.Provider value={data}>
      {children}
    </ConditionersContext.Provider>
  );
};

export default ConditionersProvider;
