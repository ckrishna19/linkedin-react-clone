import React, { useState } from "react";
import { AiOutlineSearch, AiFillHome, AiFillCaretDown } from "react-icons/ai";
import {
  BsFillPeopleFill,
  BsFillBriefcaseFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";
import { IoIosNotifications, IoMdApps } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logouts } from "../redux/slice/userSlice";
const Navbar = ({ handleShowPrivateMessage, handleToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);

  const handleLogout = () => {
    dispatch(Logouts());
    navigate("/login");
  };

  return (
    <main className="bg-white py-1 text-gray-500 fixed left-0 top-0 right-0 shadow-md z-10">
      <section className="hidden lg:block w-[80%] mx-auto ">
        <article className="grid grid-cols-5 gap-x-1">
          <aside className="col-span-2 flex items-center gap-x-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              alt="linkedin-logo"
              className="w-8 aspect-square"
            />
            <div className="flex bg-gray-100 rounded-md h-full items-center w-[60%]  px-2">
              <AiOutlineSearch size={20} />

              <input
                type="text"
                name="Search"
                id=""
                placeholder="Search"
                className="flex-1 px-2 h-full bg-transparent focus:outline-none"
              />
            </div>
          </aside>
          <aside className="col-span-2  h-full grid grid-cols-6 gap-x-2">
            <div className=" flex flex-col justify-center items-center">
              <AiFillHome size={24} />
              <p className="text-[10px]">Home</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <BsFillPeopleFill size={24} />
              <p className="text-[10px]">My Network</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <BsFillBriefcaseFill size={24} />
              <p className="text-[10px]">Jobs</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <BsFillChatLeftTextFill size={24} />
              <p className="text-[10px]">Messeging</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <IoIosNotifications size={24} />
              <p className="text-[10px]">Messeging</p>
            </div>
            <div
              className=" flex flex-col justify-center items-center cursor-pointer"
              onClick={handleLogout}
            >
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="profile"
                className="w-7 aspect-square rounded-full"
              />
              <div className="flex items-center gap-x-1">
                <p className="text-[10px]">Logout</p>
                <AiFillCaretDown size={12} />
              </div>
            </div>
          </aside>
          <aside className="col-span-1 flex">
            <div className="flex flex-col justify-center items-center">
              <IoMdApps size={28} />
              <div className="flex items-center gap-x-1">
                <p className="text-[10px]">For Business</p>
                <AiFillCaretDown size={12} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <p className="text-[10px] underline ">Try Premium For</p>
              <p className="text-[10px] underline ">Free</p>
            </div>
          </aside>
        </article>
      </section>
      <section className="hidden md:block lg:hidden">
        <article className=" w-[90%] mr-auto py-1 ">
          <aside className="grid grid-cols-10 mx-3">
            <button className="col-span-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                alt="linkedin-logo"
                className="w-8 aspect-square"
              />
            </button>
            <button className="col-span-1" onClick={() => setSearch(!search)}>
              <AiOutlineSearch size={20} />
            </button>
            {search ? (
              <input
                type="text"
                placeholder="Search"
                className="col-span-8 rounded-md bg-gray-100 pl-3 focus:outline"
              />
            ) : (
              <>
                <button className="col-span-1">
                  <AiFillHome size={24} />
                </button>
                <button className="col-span-1">
                  <BsFillPeopleFill size={24} />
                </button>
                <button className="col-span-1">
                  <BsFillBriefcaseFill size={24} />
                </button>
                <button className="col-span-1" onClick={handleToggle}>
                  <BsFillChatLeftTextFill size={24} />
                </button>
                <button className="col-span-1">
                  <IoIosNotifications size={24} />
                </button>
                <button className="col-span-1">
                  <img
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    alt="profile"
                    className="w-7 aspect-square rounded-full"
                  />
                </button>
                <button className="col-span-1">
                  <IoMdApps size={28} />
                </button>
                <button className="col-span-1 flex flex-col items-center justify-center -mx-4">
                  <p className="text-[12px]">Try Premium For</p>
                  <p className="text-[12px]">Free</p>
                </button>
              </>
            )}
          </aside>
        </article>
      </section>
    </main>
  );
};

export default Navbar;
