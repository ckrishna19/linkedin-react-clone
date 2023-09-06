import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
const Profile = () => {
	return (
		<main className="w-full  text-gray-500 border border-gray-300 rounded-md mb-2">
			<div className="bg-gray-400 h-16 rounded-t-md" />

			<section className="bg-white  py-2 rounded-b-md">
				<img
					src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
					alt="profile"
					className="  mx-auto -mt-10 border-white w-20 aspect-square rounded-full"
				/>
				<aside className="border-b flex flex-col gap-y-1  py-2 ">
					<div className=" pt-2 border-b flex flex-col items-center justify-center pb-4">
						<p className="font-bold text-black">Sirish Chalise</p>
						<p className="text-sm">Software Developer</p>
					</div>
					<div className="flex justify-between items-center font-bold px-3 py-2">
						<p className="text-xs">Who Viewed your profile</p>

						<p className="text-xs text-blue-500">50</p>
					</div>
					<div className="flex justify-between items-center font-bold px-3">
						<p className="text-xs">Connections</p>

						<p className="text-xs text-blue-500">200</p>
					</div>

					<p className="text-xs font-bold px-3">Grow Your Network</p>
				</aside>
				<aside className="border-b flex flex-col py-2 px-3 gap-y-1">
					<p className="text-xs">access exclusve tools and insights</p>
					<div className="flex items-center gap-x-2">
						<div className="w-4 rounded aspect-square bg-yellow-400" />
						<p className="text-xs text-black font-bold underline">Try Premium for free</p>
					</div>
				</aside>
				<aside className="px-3 flex items-center gap-x-2 py-1">
					<BsFillBookmarkFill size={16} />
					<p className="text-sm font-bold">My Items</p>
				</aside>
			</section>
		</main>
	);
};

export default Profile;
