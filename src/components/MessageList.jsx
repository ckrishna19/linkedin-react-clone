import React from "react";

import { BsChevronCompactUp, BsSearch, BsThreeDots } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const MessageList = ({ handleToggle, handleShowPrivateMessage }) => {
  const truncate = (str, maxLength) => {
    if (str.length >= maxLength) {
      return str.slice(0, maxLength);
    }
    return str;
  };

  const str = `	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusantium pariatur repellat minus tenetur, atque voluptatum, veniam
   voluptatibus error deserunt fugiat. Laborum odio adipisci cupiditate doloribus quisquam, praesentium doloremque nobis!
`;
  return (
    <div className="bg-white inset-0 lg:w-[80%] md:w-1/2 absolute top-0 right-0 border ml-auto z-10 border-black   md:h-[90vh] text-gray-500 pt-1 rounded-md pb-10">
      <button onClick={handleToggle} className=" w-full border-b py-1">
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
            <p className="font-bold ">Messeging</p>
          </article>
          <div className="flex items-center gap-x-2">
            <BsThreeDots size={16} />
            <IoIosCreate size={16} />
            <BsChevronCompactUp size={16} />
          </div>
        </section>
      </button>
      <section className="mx-3 bg-cyan-100 rounded-md flex items-center justify-between px-2 my-2">
        <article className="flex items-center flex-1 gap-x-1">
          <BsSearch />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search message"
            className="flex-1 bg-transparent py-1 focus:outline-none"
          />
          <AiOutlineMenu />
        </article>
      </section>
      <div className="overflow-y-auto h-[90%] ">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <section
              className="flex justify-between items-start px-2 bg-gray-100 mx-2 rounded-md py-1 my-2 cursor-pointer"
              key={i}
              onClick={handleShowPrivateMessage}
            >
              <article className="flex items-center gap-x-2 flex-1">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                  alt="profile-img"
                  className="w-10 aspect-square rounded-full"
                />

                <aside className="flex flex-col gap-y-1 ">
                  <p className="font-bold">Durga Khanal</p>

                  <p className="text-xs">{truncate(str, 60)}...</p>
                </aside>
              </article>
              <p className="text-[10px]">may 10</p>
            </section>
          ))}
      </div>
    </div>
  );
};

export default MessageList;
