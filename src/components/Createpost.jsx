import React from "react";
import { BsFillCalendarDateFill, BsFillImageFill, BsNewspaper } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
const Createpost = ({ handleShowPost }) => {
	return (
		<main className="bg-white rounded-md py-4 px-3 text-gray-500 cursor-pointer" onClick={handleShowPost}>
			<section className="flex gap-x-2 items-center">
				<img
					src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
					alt="profile"
					className="    w-12 aspect-square rounded-full"
				/>
				<div className=" px-5 rounded-full  placeholder:font-bold flex-1 focus:outline-none border border-gray-800 py-1">
					<p> Start a Post</p>
				</div>
			</section>
			<section className="grid grid-cols-4 mx-3 my-2  py-2 text-sm sm:text-xs">
				<article className="flex items-center justify-center gap-x-1 ">
					<BsFillImageFill size={24} className="text-blue-500" />
					<p className="">Photo</p>
				</article>

				<article className="flex items-center gap-x-1 justify-center">
					<FaYoutube size={24} className="text-green-500" />
					<p className="">Video</p>
				</article>
				<article className="flex items-center gap-x-1 justify-center">
					<BsFillCalendarDateFill size={24} className="text-orange-500" />
					<p className="">Events</p>
				</article>
				<article className="flex items-center gap-x-1 justify-center">
					<BsNewspaper size={24} className="text-orange-400" />
					<p className=""> Write article</p>
				</article>
			</section>
		</main>
	);
};

export default Createpost;
