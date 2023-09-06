import React, { useState } from "react";
import { AiFillCamera, AiFillCodeSandboxCircle } from "react-icons/ai";
import {
  BsArrowLeft,
  BsSend,
  BsSendFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";

const PrivateMessage = ({ handleChange }) => {
  const [text, setText] = useState("");
  const handleInputChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="block sm:hidden bg-white h-screen">
      <div className="flex items-center justify-between border-b py-2 px-4 fixed top-0 lef-0 bg-white w-full">
        <div className="flex gap-x-4 items-center ">
          <button onClick={() => handleChange("messageList")}>
            <BsArrowLeft size={20} />
          </button>
          <p className="font-semibold text-lg">Durga Khanal</p>
        </div>
        <BsThreeDotsVertical size={20} />
      </div>
      <div className=" px-3 py-14 overflow-y-scroll bg-white">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <div className=" w-[80%] mr-auto my-2">
                <div className="flex items-start  gap-x-1">
                  <img
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    alt="profile"
                    className="w-8 aspect-square rounded-full"
                  />
                  <div>
                    <p className=" p-1 border rounded text-[10px] bg-gray-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, distinctio?
                    </p>
                    <p className="text-[8px] mt-[2px]">1:30 pm</p>
                  </div>
                </div>
              </div>
              <div className=" w-[80%] ml-auto my-2">
                <div className="flex items-start  gap-x-1">
                  <div>
                    <p className=" p-1 border rounded text-[10px] bg-gray-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, distinctio?
                    </p>
                    <p className="text-[8px] mt-[2px] text-right">1:30 pm</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="fixed bottom-1 left-0 w-full border-y bg-white py-2 shadow">
        <div className="flex justify-between items-start px-2 mx-3">
          <textarea
            className="block w-full text-sm text-gray-700 leading-normal appearance-none focus:outline-none focus:bg-white  overflow-hidden resize-none"
            rows={text === "" && 1}
            placeholder="Write Message"
            value={text}
            onChange={handleInputChange}
          />
          <div className="flex gap-x-4 items-center">
            <IoMdAttach size={20} />
            <BsSendFill size={20} onClick={() => setText("")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateMessage;
