import React from "react";
import { AiFillHome, AiFillPlusSquare } from "react-icons/ai";
import { BsFillBriefcaseFill, BsFillPeopleFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const Footer = ({ handleToggle, handlePostModel }) => {
	return (
		<div className=" bottom-0 left-0 fixed w-full  text-gray-500 py-2 bg-white border-t">
			<section className="grid grid-cols-5">
				<button className="col-span-1 mx-auto">
					<div className="">
						<AiFillHome size={24} className="mx-auto" />
						<p className="text-[10px] text-center  font-semibold">Home</p>
					</div>
				</button>
				<button className="col-span-1  ">
					<div className="">
						<BsFillPeopleFill size={24} className="mx-auto" />

						<p className="text-[10px] font-semibold">My Network</p>
					</div>
				</button>
				<button className="col-span-1 " onClick={handlePostModel}>
					<div className="mx-auto">
						<AiFillPlusSquare size={24} className="mx-auto" />

						<p className="text-[10px] text-center  font-semibold">Post</p>
					</div>
				</button>

				<button className="col-span-1  ">
					<div>
						<IoIosNotifications size={24} className="mx-auto" />

						<p className="text-[10px] text-center  font-semibold">Notifications</p>
					</div>
				</button>
				<button className="col-span-1 flex justify-center items-center " onClick={handleToggle}>
					<div>
						<BsFillBriefcaseFill size={24} className="mx-auto" />

						<p className="text-[10px] text-center  font-semibold">Jobs</p>
					</div>
				</button>
			</section>
		</div>
	);
};

export default Footer;
