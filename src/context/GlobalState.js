import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Globalcontext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState({
    topic: "",
    priority: " ",
    content: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(false);

  const handleEditTask = (id) => {
    setEditData(true);
    const arr = data.filter((item) => item._id === id);

    if (arr[0]) {
      setValue({
        ...value,
        id: arr[0]._id,
        topic: arr[0].topic,
        priority: arr[0].priority,
        content: arr[0].content,
      });
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://tasks-app-mern.herokuapp.com/getTasks"
        );
        return setData(res.data);
      } catch (error) {
        return setData([]);
      }
    };

    getData();
  }, []);

  return (
    <Globalcontext.Provider
      value={{
        data,
        setData,
        isOpen,
        setIsOpen,
        editData,
        setEditData,
        value,
        handleEditTask,
        setValue,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};
