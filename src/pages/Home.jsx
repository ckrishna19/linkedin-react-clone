import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import Recent from "../components/Recent";
import Createpost from "../components/Createpost";
import { BsCaretDownFill } from "react-icons/bs";
import Post from "../components/Post";
import RightSide from "../components/RightSide";
import Message from "../components/Message";
import MessageList from "../components/MessageList";

import PostModel from "../components/PostModel";
import PrivateMessage from "../components/PrivateMessage";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Private from "./PrivateMessage";
import MessageLs from "./MessageList";

const Home = () => {
  // toggle states
  const [showPostModel, setshowPostModel] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPrivateMessage, setShowPrivateMessage] = useState(false);

  const [menu, setMenu] = useState({
    post: true,
    messageList: false,
    privateMessage: false,
  });

  // Toggle functions

  const handleToggle = () => setShowMessage(!showMessage);
  const handleShowPrivateMessage = () => setShowPrivateMessage(true);
  const handleClosePrivateMessage = () => setShowPrivateMessage(false);
  const handleShowPost = () => setshowPostModel(true);
  const handlePostModel = () => setshowPostModel(!showPostModel);

  const handleChange = (name) => {
    const clone = { ...menu };
    if (clone.hasOwnProperty(name)) {
      for (const sidekey of Object.keys(clone)) {
        if (sidekey === name) {
          clone[sidekey] = true;
        }
        clone[sidekey] = false;
      }
      clone[name] = !clone[name];
      setMenu(clone);
    }
  };

  return (
    <div>
      <div className=" mt-[72px] hidden sm:block">
        <Navbar handleToggle={handleToggle} />

        <div className="flex justify-center items-start gap-x-4 Lg:w-4/5 md:w-[90%] mx-auto relative">
          <div className="  hidden md:block lg:w-1/5 md:w-1/3   sticky left-0 top-[72px] h-[90vh] hover:overflow-y-scroll overflow-hidden ">
            <Profile />
            <Recent />
          </div>
          <div className="flex-1">
            {showPostModel && <PostModel handlePostModel={handlePostModel} />}
            <Createpost handleShowPost={handleShowPost} />
            <div className="my-2 flex items-center text-gray-500 gap-x-1">
              <div className="h-[1px] flex-1 bg-gray-700" />
              <div className="flex items-center gap-x-1">
                <p className="text-xs">Sort by:</p>
                <p className="text-black text-sm">Top</p>
                <BsCaretDownFill size={14} className="text-black" />
              </div>
            </div>
            <Post />
            <div className="lg:hidden">
              {showMessage && (
                <MessageList
                  handleToggle={handleToggle}
                  handleShowPrivateMessage={handleShowPrivateMessage}
                />
              )}
            </div>
          </div>
          <div className="w-[30%] hidden lg:block  sticky right-0 top-[72px] h-[90vh] ">
            <RightSide />

            {showMessage ? (
              <MessageList
                handleToggle={handleToggle}
                handleShowPrivateMessage={handleShowPrivateMessage}
              />
            ) : (
              <Message handleToggle={handleToggle} />
            )}
          </div>
        </div>
        {showPrivateMessage && (
          <PrivateMessage
            handleClosePrivateMessage={handleClosePrivateMessage}
          />
        )}
      </div>

      <main className="block  sm:hidden">
        {menu.post && (
          <div className="w-full">
            <Header handleToggle={handleToggle} handleChange={handleChange} />
            <main className="h-full pb-14">
              {showPostModel && <PostModel handlePostModel={handlePostModel} />}
              <Post />
              <Post />
              <Footer handlePostModel={handlePostModel} />
            </main>
          </div>
        )}

        {menu.messageList && <MessageLs handleChange={handleChange} />}
        {menu.privateMessage && <Private handleChange={handleChange} />}
      </main>
    </div>
  );
};

export default Home;
