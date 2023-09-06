import React, { useEffect, useState } from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = ({ handleToggle, handleChange }) => {
  return (
    <main className="sticky top-0 left-0 bg-white w-full px-2 py-1 text-gray-500">
      <section className="flex items-center gap-x-2">
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="profile"
          className="w-10 aspect-square rounded-full"
        />
        <article className="flex-1 bg-cyan-50 rounded-md">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="focus:outline-none bg-transparent py-1 pl-2"
          />
        </article>
        <button onClick={() => handleChange("messageList")}>
          <BsFillChatLeftTextFill size={20} />
        </button>
      </section>
    </main>
  );
};

export default Header;
