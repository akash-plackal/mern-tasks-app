import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Globalcontext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://tasks-app-mern.herokuapp.com/getTasks");
        return setData(res.data);
      } catch (error) {
        return setData([]);
      }
    };

    getData();
  }, []);

  return (
    <Globalcontext.Provider value={data}>{children}</Globalcontext.Provider>
  );
};
