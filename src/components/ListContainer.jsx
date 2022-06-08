import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalState";
import { BiRadioCircle } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

const ListContainer = ({ section }) => {
  const {data , setIsOpen , setEditData , handleEditTask } = useContext(Globalcontext);

  const filteredArr = data.filter((item) => item.section === section);

  const  taskClick = (id) => setIsOpen(true) & handleEditTask(id) 

  return (
    <div>
      {filteredArr.map((item, ind) => (
        <div
          key={ind}
          className={`border-2 border-t-0 h-auto flex ${
            item.completed ? " bg-green-50" : " "
          }` } onClick={() => taskClick(item._id)}
        >
          <div
            className={`w-20 border-r-2 text-xl flex items-center justify-center 
          ${
            item.completed
              ? "text-emerald-400 bg-green-50"
              : "text-yellow-400 bg-gray-50"
          }`}
          >
            {item.completed ? (
              <BsCheckLg />
            ) : (
              <BiRadioCircle className="text-3xl" />
            )}
          </div>
          <div className="p-8 flex items-center ">
            <div className=" w-56 max-h-28 font-roboto line-clamp-4" >
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
