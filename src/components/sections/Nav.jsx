import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AddItemModal from "../AddItemModal";

const Nav = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="border-b-2 flex justify-between align-middle p-3 h-14 text-3xl font-medium font-roboto">
        <BsArrowLeft onClick={() => navigate(-1)} />
        <h3 className="text-lg capitalize ">{section} list</h3>
        <IoPersonCircleOutline />
      </nav>

      <div className="p-5 border-b-2 flex justify-between text-stone-500">
        <h1 className="font-roboto text-2xl  font-medium">Add events</h1>
        <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <BsPlusLg />
        </button>
      </div>
      <AddItemModal isOpen={isOpen} section={section} setIsOpen={setIsOpen} />
    </>
  );
};

export default Nav;
