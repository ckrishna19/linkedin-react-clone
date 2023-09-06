import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
const Recent = () => {
	return (
		<main className="w-full rounded-md border border-gray-300 pt-2 bg-white text-gray-500 -z-10">
			<section className="border-b">
				<p className="text-sm  px-4">Recent</p>
				<div className="flex items-center gap-x-2 py-1 hover:bg-gray-200 px-4 cursor-pointer">
					<p className="font-bold text-base">#</p>
					<p className="text-xs">hr</p>
				</div>

				<div className="flex items-center gap-x-2 py-1 hover:bg-gray-200 px-4 cursor-pointer">
					<p className="font-bold text-base">#</p>
					<p className="text-xs">Vacancy</p>
				</div>
				<div className="flex items-center gap-x-2 py-1 hover:bg-gray-200 px-4 cursor-pointer">
					<p className="font-bold text-base">#</p>
					<p className="text-xs">jobsearch</p>
				</div>
				<div className="flex items-center gap-x-2 py-1 hover:bg-gray-200 px-4 cursor-pointer">
					<p className="font-bold text-base">#</p>
					<p className="text-xs">safety</p>
				</div>
				<div className="flex items-center gap-x-2 py-1 hover:bg-gray-200 px-4 cursor-pointer">
					<p className="font-bold text-base">#</p>
					<p className="text-xs">engineers</p>
				</div>
				<div className="px-4 flex flex-col gap-y-4">
					<p className="text-blue-500 font-bold text-xs">Groups</p>
					<div className="flex justify-between items-center">
						<p className="text-blue-500 font-bold text-xs">Events</p>
						<AiOutlinePlus size={14} />
					</div>

					<p className="text-blue-500 font-bold text-xs">Followed hashtags</p>
				</div>
				<div className="flex items-center gap-x-2 py-1 hover:bg-gray-200 px-4 cursor-pointer">
					<p className="font-bold text-base">#</p>
					<p className="text-xs">jobsearch</p>
				</div>
				<div className="flex items-center gap-x-2 py-1 hover:bg-gray-200 px-4 cursor-pointer">
					<p className="font-bold text-base">#</p>
					<p className="text-xs">safety</p>
				</div>
				<div className="flex items-center gap-x-2 py-1 hover:bg-gray-200 px-4 cursor-pointer">
					<p className="font-bold text-base">#</p>
					<p className="text-xs">engineers</p>
				</div>
				<div className="flex items-center  py-1 hover:bg-gray-200 px-4 cursor-pointer gap-x-1">
					<p className="text-xs">Show More</p>
					<BsChevronCompactDown size={20} />
				</div>
			</section>
			<div className="flex justify-center items-center py-3 hover:bg-gray-300 cursor-pointer">
				<button className="font-bold text-xs ">Discover more</button>
			</div>
		</main>
	);
};

export default Recent;
