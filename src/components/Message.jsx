import React from "react";
import { BsChevronCompactUp, BsThreeDots } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";

const Message = ({ handleToggle }) => {
  return (
    <button
      onClick={handleToggle}
      className="absolute text-gray-500 bottom-0 right-0  rounded-md py-1  bg-white w-80"
    >
      <section className="flex justify-between items-center px-2">
        <article className="flex items-center gap-x-2">
          <aside className="relative ">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt="message"
              className="w-10 aspect-square rounded-full"
            />
            <div className="absolute right-0 bottom-0 w-3 aspect-square rounded-full bg-green-500" />
          </aside>
          <p className="font-bold text-sm">Messeging</p>
        </article>
        <div className="flex items-center gap-x-2">
          <BsThreeDots size={16} />
          <IoIosCreate size={16} />
          <BsChevronCompactUp size={16} />
        </div>
      </section>
    </button>
  );
};

export default Message;
