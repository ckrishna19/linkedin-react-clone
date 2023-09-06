import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { BsArrowLeft, BsBoxArrowUpRight } from "react-icons/bs";
const MessageList = ({ handleChange }) => {
  const truncate = (str, maxLength) => {
    if (str.length >= maxLength) {
      return str.slice(0, maxLength);
    }
    return str;
  };

  const str = `	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusantium pariatur repellat minus tenetur, atque voluptatum, veniam
   voluptatibus error deserunt fugiat. Laborum odio adipisci cupiditate doloribus quisquam, praesentium doloremque nobis!
`;

  const clk = (id) => {
    handleChange("privateMessage");
    console.log(`click this ${id} `);
  };

  return (
    <div className="block sm:hidden relative bg-white h-screen text-gray-500">
      <div className="fixed left-0 top-0 w-full z-10 bg-white">
        <div className="flex justify-between items-center px-4 border-y py-2">
          <div className="flex gap-x-5 items-center">
            <button onClick={() => handleChange("post")}>
              <BsArrowLeft size={24} />
            </button>
            <p className="text-2xl font-semibold">Message </p>
          </div>
          <BsBoxArrowUpRight size={24} />
        </div>
      </div>
      <section className="py-14 bg-white overflow-y-auto">
        <p className="text-sm font-bold border-b px-4 py-2">Inbox</p>
        <section className="px-4 bg-white">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <section
                className="flex justify-between items-start px-2 bg-gray-100 mx-2 rounded-md py-2 my-2 cursor-pointer"
                key={i}
                onClick={() => clk(i)}
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
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default MessageList;
