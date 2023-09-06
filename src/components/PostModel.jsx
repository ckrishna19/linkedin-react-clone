import React, { useState } from "react";
import { AiFillFile, AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import {
  BsCaretDownFill,
  BsChatLeftDots,
  BsClock,
  BsEmojiSmile,
  BsGlobeAsiaAustralia,
  BsImage,
  BsThreeDots,
} from "react-icons/bs";

const PostModel = ({ handlePostModel }) => {
  const [text, setText] = useState("");
  const handleInputChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <main className="fixed inset-0 bg-black bg-opacity-70   z-10  text-gray-500">
      <section className="flex justify-center items-center mt-10 px-2 sm:px-0">
        <article className="bg-white w-full md:w-[70%] lg:w-[35%] mx-auto rounded-md  py-3">
          <aside className="flex justify-between items-center border-b px-6 py-1">
            <p className="text-lg capitalize font-semibold">Create a Post</p>
            <button
              className="flex justify-center items-center w-10 aspect-square rounded-full hover:bg-gray-200"
              onClick={handlePostModel}
            >
              <AiOutlineClose size={24} />
            </button>
          </aside>

          <aside className="flex items-center gap-x-2 px-6 py-3">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt="profile"
              className="w-10 sm:w-14 aspect-square rounded-full"
            />
            <div>
              <p className="font-semibold">Sirish Chalise</p>
              <div className="flex items-center gap-x-1 border rounded-full px-2 py-[2px] sm:py-1">
                <BsGlobeAsiaAustralia />
                <p>Anyone</p>
                <BsCaretDownFill />
              </div>
            </div>
          </aside>
          <aside className="px-6 py-2">
            <textarea
              className="block w-full text-sm text-gray-700 leading-normal appearance-none focus:outline-none focus:bg-white  overflow-hidden resize-none"
              rows="10"
              placeholder="Create Post......"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </aside>
          <aside className="px-6 py-1">
            <BsEmojiSmile size={20} />
          </aside>
          <aside className="flex items-center px-6 mt-4">
            <div className="flex gap-x-4 border-r items-center py-1 pr-1">
              <div>
                <label htmlFor="file" className="cursor-pointer">
                  <BsImage size={20} />
                </label>
                <input type="file" name="" id="file" className="hidden" />
              </div>
              <AiFillYoutube size={20} />
              <AiFillFile size={20} />
              <BsThreeDots size={20} />
            </div>
            <div className="md:flex flex-1 items-center gap-x-2 ml-4 hidden">
              <BsChatLeftDots size={18} />
              <p className="text-sm font-semibold">Anyone</p>
            </div>
            <div className="flex items-center gap-x-2 ml-auto sm:ml-0">
              <BsClock size={18} />
              <button className="py-1 px-5 border rounded-full hover:bg-gray-200">
                Post
              </button>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
};

export default PostModel;
