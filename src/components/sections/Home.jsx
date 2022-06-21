import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Globalcontext } from "../../context/GlobalState";

import { RiSettingsFill } from "react-icons/ri";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Home = () => {
  const { data } = useContext(Globalcontext);

  const taskLength = (section) => {
    const tasks = data?.filter((task) => task.section === section);
    return tasks.length || 0;
  };

  const inCompleteItems = () =>
    data?.filter((items) => items.completed === false);

  return (
    <div className="h-screen bg-slate-50">
      <header className="px-9 py-7 flex justify-between border-b-2 ">
        <div className="space-y-1 ">
          <h1 className="text-3xl font-bold capitalize text-stone-500">
            hello james
          </h1>
          <p className="text-gray-400 text-sm">
            {inCompleteItems().length} items not completed
          </p>
        </div>

        <div className="p-3">
          <RiSettingsFill className="text-4xl text-gray-300" />
        </div>
      </header>

      {/* cards */}

      <main className=" h-2/3 pt-10 lg:px-40 lg:h-11/12">
        <div className="flex justify-between px-6 h-60 lg:px-40 ">
          <Link
            to="work"
            className="rounded-lg my-4 border-2 w-40 lg:w-64 bg-white flex items-center  flex-col justify-evenly "
          >
            <div className="rounded-full p-4 bg-purple-100">
              <IoMdBriefcase className="text-purple-400 text-lg" />
            </div>

            <div className="text-center">
              <h1 className="capitalize text-xl text-stone-500 font-bold">
                work
              </h1>
              <p className="text-gray-400 text-sm">
                {taskLength("work")} tasks
              </p>
            </div>
          </Link>
          <Link
            to="personal"
            className="rounded-lg my-4 border-2 w-40  lg:w-64  bg-white flex items-center  flex-col  justify-evenly "
          >
            <div className="rounded-full p-4 bg-blue-100 ">
              <FaUser className="text-blue-400 text-lg" />
            </div>

            <div className="text-center">
              <h1 className="capitalize text-xl text-stone-500 font-bold">
                personal
              </h1>
              <p className="text-gray-400 text-sm">
                {taskLength("personal")} tasks
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-between px-6 h-60 lg:px-40">
          <Link
            to="life"
            className="rounded-lg my-4 border-2 w-40 lg:w-64    bg-white flex items-center  flex-col justify-evenly "
          >
            <div className="rounded-full p-4 bg-pink-100">
              <BsFillSuitHeartFill className="text-red-400 text-lg" />
            </div>

            <div className="text-center">
              <h1 className="capitalize text-xl text-stone-500 font-bold">
                life
              </h1>
              <p className="text-gray-400 text-sm">
                {taskLength("life")} tasks
              </p>
            </div>
          </Link>
          <Link
            to="goals"
            className="rounded-lg my-4 border-2 w-40 lg:w-64  bg-white flex items-center  flex-col  justify-evenly "
          >
            <div className="rounded-full p-4 bg-yellow-100 ">
              <MdLocationOn className="text-yellow-400 text-xl" />
            </div>

            <div className="text-center">
              <h1 className="capitalize text-xl text-stone-500 font-bold">
                goals
              </h1>
              <p className="text-gray-400 text-sm">
                {taskLength("goals")} tasks
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
