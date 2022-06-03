import React from "react";
import { Link } from "react-router-dom";

import { RiSettingsFill } from "react-icons/ri";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen">
      <header className="px-9 py-7 flex justify-between border-b-2 ">
        <div className="space-y-1 ">
          <h1 className="text-3xl font-bold capitalize text-stone-500">
            hello james
          </h1>
          <p className="text-gray-400 text-sm">13 items not completed</p>
        </div>

        <div className="p-3">
          <RiSettingsFill className="text-4xl text-gray-300" />
        </div>
      </header>

      {/* cards */}

      <main className="bg-slate-50 h-2/3 pt-10">
        <div className="flex justify-between px-6 h-60 ">
          <Link
            to="work"
            className="rounded-lg my-4 border-2 w-40   bg-white flex items-center  flex-col justify-evenly "
          >
            <div className="rounded-full p-4 bg-purple-100">
              <IoMdBriefcase className="text-purple-400 text-lg" />
            </div>

            <div className="text-center">
              <h1 className="capitalize text-xl text-stone-500 font-bold">
                work
              </h1>
              <p className="text-gray-400 text-sm">3 tasks</p>
            </div>
          </Link>
          <Link
            to="personal"
            className="rounded-lg my-4 border-2 w-40 bg-white flex items-center  flex-col  justify-evenly "
          >
            <div className="rounded-full p-4 bg-blue-100 ">
              <FaUser className="text-blue-400 text-lg" />
            </div>

            <div className="text-center">
              <h1 className="capitalize text-xl text-stone-500 font-bold">
                personal
              </h1>
              <p className="text-gray-400 text-sm">3 tasks</p>
            </div>
          </Link>
        </div>
        <div className="flex justify-between px-6 h-60">
          <Link
            to="life"
            className="rounded-lg my-4 border-2 w-40   bg-white flex items-center  flex-col justify-evenly "
          >
            <div className="rounded-full p-4 bg-pink-100">
              <BsFillSuitHeartFill className="text-red-400 text-lg" />
            </div>

            <div className="text-center">
              <h1 className="capitalize text-xl text-stone-500 font-bold">
                life
              </h1>
              <p className="text-gray-400 text-sm">3 tasks</p>
            </div>
          </Link>
          <Link
            to="goals"
            className="rounded-lg my-4 border-2 w-40 bg-white flex items-center  flex-col  justify-evenly "
          >
            <div className="rounded-full p-4 bg-yellow-100 ">
              <MdLocationOn className="text-yellow-400 text-xl" />
            </div>

            <div className="text-center">
              <h1 className="capitalize text-xl text-stone-500 font-bold">
                goals
              </h1>
              <p className="text-gray-400 text-sm">3 tasks</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
