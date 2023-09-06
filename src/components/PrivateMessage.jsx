import React, { useState } from "react";
import {
  AiOutlineArrowsAlt,
  AiOutlineClose,
  AiOutlineGif,
  AiOutlineMail,
} from "react-icons/ai";
import {
  BsCameraVideoFill,
  BsChevronCompactUp,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";

const PrivateMessage = ({ handleClosePrivateMessage }) => {
  const [text, setText] = useState("");
  const handleInputChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <main className="bg-white w-full md:w-96 border border-gray-500 z-20  rounded-md  md:h-[58vh] py-2 text-gray-500  fixed -bottom-1 lg:w-[20%]  md:ml-auto md:right-[28%] ">
      <section className="flex justify-between px-2 border-b-2 pb-2">
        <article className="flex items-center gap-x-2 flex-1">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="profile-img"
            className="w-10 aspect-square rounded-full"
          />
          <aside className="flex flex-col">
            <p className="font-semibold">Durga Khanal</p>
          </aside>
        </article>

        <article className="flex items-center gap-x-3">
          <button className="">
            <BsThreeDots size={18} />
          </button>
          <button className="">
            <BsCameraVideoFill size={18} />
          </button>
          <button className="">
            <AiOutlineArrowsAlt size={18} />
          </button>
          <button className="" onClick={handleClosePrivateMessage}>
            <AiOutlineClose size={18} />
          </button>
        </article>
      </section>

      <section className="overflow-y-scroll  lg:h-[35vh] md:h-[41vh]  px-2 py-1">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <article className="flex gap-x-2 items-start" key={i}>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                alt="profile-img"
                className="w-10 aspect-square rounded-full"
              />
              <aside className="flex-flex-col">
                <p className="font-semibold">Durga Khanal</p>
                <p className="text-xs">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  officiis, officia non autem tempore quos! Voluptatibus
                  reiciendis ipsa eos vero.
                </p>
              </aside>
            </article>
          ))}
        <div className="lg:mt-10" />
      </section>

      <section className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-b py-2 shadow  mt-2">
        <article className="flex justify-between items-start px-2 gap-x-2 ">
          <textarea
            className="block w-full text-sm text-gray-700 leading-normal appearance-none focus:outline-none focus:bg-white  overflow-hidden resize-none"
            rows="1"
            placeholder="Write Message"
            value={text}
            onChange={handleInputChange}
          />

          <button className="flex justify-center items-center w-7 aspect-square rounded-full border hover:bg-gray-200">
            <BsChevronCompactUp size={20} />
          </button>
        </article>

        <article className="px-2 py-2 flex items-center justify-between ">
          <aside className="flex items-center gap-x-2">
            <button>
              <AiOutlineMail size={18} />
            </button>
            <button>
              <IoIosAttach size={18} />
            </button>
            <button>
              <AiOutlineGif size={18} />
            </button>

            <button>
              <BsEmojiSmile size={18} />
            </button>
          </aside>
          <aside className="flex items-center gap-x-2">
            <button
              className="px-2 py-1 rounded-full bg-gray-100 text-xs"
              onClick={() => setText("")}
            >
              Send
            </button>
            <BsThreeDots size={18} />
          </aside>
        </article>
      </section>
    </main>
  );
};

export default PrivateMessage;
