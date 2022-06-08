import React, { useState , useContext} from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AddItemModal from "../AddItemModal";
import { Globalcontext } from "../../context/GlobalState";

const Nav = ({ section }) => {
  const navigate = useNavigate();

  const { isOpen , setIsOpen} = useContext(Globalcontext)

  return (
    <>
      <nav className="border-b-2 flex justify-between align-middle p-3 h-14 text-3xl font-medium font-roboto">
        <BsArrowLeft onClick={() => navigate("/")} />
        <h3 className="text-lg capitalize ">{section} list</h3>
        <IoPersonCircleOutline />
      </nav>

      <div className="p-5 border-b-2 flex justify-between text-stone-500">
        <h1 className="font-roboto text-2xl  font-medium">Add events</h1>
        <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <BsPlusLg />
        </button>
      </div>
      <AddItemModal  section={section}  />
    </>
  );
};

export default Nav;
