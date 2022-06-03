import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalState";
import { BiRadioCircle } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

const ListContainer = ({ section }) => {
  const arr = useContext(Globalcontext);

  const filteredArr = arr.filter((item) => item.section === section);

  return (
    <div>
      {filteredArr.map((item, ind) => (
        <div
          key={ind}
          className={`border-2 border-t-0 h-auto flex ${
            item.completed ? " bg-green-50" : " "
          }`}
        >
          {/* {item.completed ? (
            <div className=" w-20 border-r-2 text-xl flex items-center justify-center text-emerald-400 bg-green-50">
              <BsCheckLg />
            </div>
          ) : (
            <div className=" w-20 border-r-2 text-3xl flex items-center justify-center text-yellow-400 bg-gray-50">
             
            </div>
          )} */}

          <div
            className={`w-20 border-r-2 text-xl flex items-center justify-center 
          ${
            item.completed
              ? "text-emerald-400 bg-green-50"
              : "text-yellow-400 bg-gray-50"
          }`}
          >
            {item.completed ? <BsCheckLg /> : <BiRadioCircle />}
          </div>

          <div className="p-8 flex items-center ">
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
