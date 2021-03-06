import React, { useState, useContext } from "react";
import axios from "axios";
import { Globalcontext } from "../context/GlobalState";
import { AiOutlineDelete } from "react-icons/ai";

const CreateTasksForm = ({ section }) => {
  const { setEditData, setData, data, setIsOpen, editData, value, setValue } =
    useContext(Globalcontext);
  const [errMsg, setErrMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.priority === " ") {
      setErrMsg("select a priority from the dropdown");
    } else {
      setErrMsg("");
      setValue({
        topic: "",
        priority: " ",
        content: "",
      });

      if (editData) {
        try {
          axios.put("https://tasks-app-mern.herokuapp.com/updateTask", {
            id: value.id,
            topic: value.topic,
            priority: value.priority,
            section: section,
            completed: false,
            content: value.content,
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          axios.post("https://tasks-app-mern.herokuapp.com/addTask", {
            topic: value.topic,
            priority: value.priority,
            section: section,
            completed: false,
            content: value.content,
          });
        } catch (error) {
          console.log(error);
        }

        setData([
          ...data,
          {
            _id: value.id || Date.now().toString(),
            topic: value.topic,
            priority: value.priority,
            section: section,
            completed: false,
            content: value.content,
          },
        ]);
      }
    }
  };

  const fetchData = async () => {
    const res = await axios.get(
      "https://tasks-app-mern.herokuapp.com/getTasks"
    );
    setData(res.data);
  };

  const cancelHandle = () => {
    setIsOpen(false);
    setEditData(false);
    setValue({
      topic: "",
      priority: " ",
      content: "",
    });
    fetchData();
  };

  const deleteHandler = (itemId) => {
    const filteredArr = data.filter((item) => item._id !== itemId);
    setData(filteredArr);

    axios.delete(`https://tasks-app-mern.herokuapp.com/deleteTask/${itemId}`);
    setIsOpen(false);
    setEditData(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 ">
        <input
          required
          type="text"
          className="w-full border-2 rounded p-2 mt-2 mb-3"
          placeholder="topic"
          value={value.topic}
          onChange={(e) => setValue({ ...value, topic: e.target.value })}
        />

        <select
          className={`w-full border-2 rounded p-2 mt-2 mb-3 bg-white text-gray-400  ${
            errMsg ? "border-red-700" : ""
          } `}
          placeholder="select"
          required
          name="priority"
          value={value.priority}
          onChange={(e) => setValue({ ...value, priority: e.target.value })}
        >
          <option value="medium">choose priority</option>
          <option value="high" className="bg-red-100">
            high
          </option>
          <option value="medium" className="bg-yellow-100">
            medium
          </option>
          <option value="low" className="bg-green-100">
            low
          </option>
        </select>

        <textarea
          required
          rows="8"
          className="w-full border-2 rounded  p-2 mt-2 mb-1"
          placeholder="note ..."
          value={value.content}
          onChange={(e) => setValue({ ...value, content: e.target.value })}
        ></textarea>
        <p className="text-sm text-red-700 w-full pl-24 ">{errMsg}</p>
      </div>

      <div className="bg-gray-200 flex justify-between px-3 py-3 text-right border-2">
        <button
          type="button"
          onClick={() => deleteHandler(value.id)}
          className={`py-2 px-1 text-3xl  ${
            editData
              ? "text-black hover:text-rose-500"
              : "text-gray-200 hover:text-grey-200"
          }`}
          disabled={!editData}
        >
          <AiOutlineDelete className="" />
        </button>

        <div>
          <button
            type="button"
            onClick={() => cancelHandle()}
            className="py-2 px-5 border-2 border-lime-500  text-lime-500 rounded  mr-2"
          >
            Back
          </button>
          <button
            type="submit"
            className="py-2 px-5 border-2 border-lime-500 bg-lime-500  text-white rounded hover:bg-lime-600 mr-2"
          >
            {editData ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTasksForm;
