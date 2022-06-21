import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalState";
import { BiRadioCircle } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";

const ListContainer = ({ section }) => {
  const { data, setIsOpen, handleEditTask, setData } =
    useContext(Globalcontext);

  const filteredArr = data.filter((item) => item.section === section);

  const taskClick = (id) => {
    setIsOpen(true);
    handleEditTask(id);
  };

  const priorityColor = (priority) => {
    if (priority === "high") return "text-rose-400 bg-slate-50";
    if (priority === "medium") return "text-yellow-400 bg-slate-50";
    if (priority === "low") return "text-blue-400 bg-slate-50";
    else return "text-yellow-400 bg-slate-50";
  };

  const completedClick = (itemId, taskComplete) => {
    const mapedArr = data.map((obj) => {
      if (obj._id === itemId) {
        return { ...obj, completed: !taskComplete };
      }
      return obj;
    });

    setData(mapedArr);
    axios.put(
      `https://tasks-app-mern.herokuapp.com/toggleCompleted/${itemId}`,
      {
        completed: !taskComplete,
      }
    );
  };

  return (
    <div>
      {filteredArr.map((item, ind) => (
        <div
          key={ind}
          className={`border-2 border-t-0 h-auto flex ${
            item.completed ? " bg-green-50" : " "
          }`}
        >
          <button
            onClick={() => completedClick(item._id, item.completed)}
            className={`w-20 border-r-2 text-xl flex items-center justify-center 
          ${
            item.completed
              ? "text-emerald-400 bg-green-50"
              : priorityColor(item.priority)
          }`}
          >
            {item.completed ? (
              <BsCheckLg />
            ) : (
              <BiRadioCircle className="text-3xl" />
            )}
          </button>
          <div
            className="p-8 flex items-center "
            onClick={() => taskClick(item._id)}
          >
            <div className=" w-56 max-h-28 font-roboto line-clamp-4">
              <p className="text-xs text-stone-500">{item.topic}</p>
              <h3
                className={`text-lg font-medium ${
                  item.completed ? " line-through text-stone-400" : " "
                }`}
              >
                {item.content}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListContainer;
