import React, { useState } from "react";
import { AiOutlineLike, AiTwotoneHeart } from "react-icons/ai";
import { BsChatLeftText, BsEmojiSmileFill, BsFillSendFill, BsThreeDots } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import { FcRefresh } from "react-icons/fc";
import WriteComment from "./WriteComment";
const Post = () => {
	const [showComment, setShowComment] = useState(false);
	const handleShow = () => {
		setShowComment(!showComment);
		console.log("clicked");
	};
	return (
		<main className="bg-white py-2  sm:rounded-md text-gray-500 my-2">
			<section className="flex justify-between items-start px-3">
				<article className="flex-1 flex items-center gap-x-3">
					<div className="relative">
						<img src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg" alt="user-profile" className="w-12 aspect-square rounded-full" />
						<div className=" absolute bottom-0 right-0 w-3 aspect-square rounded-full bg-green-500" />
					</div>
					<aside>
						<p className="font-bold text-black">Durga Khanal</p>
						<p className="text-xs"> Web Developer | Mobile Developer | Data Science | Content Creater </p>

						<div className="flex items-center gap-x-1">
							<p className="text-xs">30 m</p>
							<FaGlobeAsia size={12} />
						</div>
					</aside>
				</article>
				<button>
					<BsThreeDots size={24} className="text-black" />
				</button>
			</section>
			<section className="my-2">
				<p className="text-xs px-3 mb-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rerum nulla tempore cum harum, nihil enim ipsam voluptas ullam culpa? Ratione,
					excepturi beatae nobis qui explicabo molestias maiores voluptatibus dolorum ad minus saepe inventore, optio dicta sapiente ipsa hic aliquam!
				</p>
				<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="post-image" className="w-full aspect-video" />
			</section>
			<section className="flex items-center justify-between mx-10 border-b py-2">
				<article className="flex items-center gap-x-2">
					<div className="flex items-center">
						<AiOutlineLike size={16} className="text-blue-400 -mr-1" />
						<AiTwotoneHeart size={16} className="text-red-400 -ml-1" />
						<BsEmojiSmileFill size={16} className="text-orange-300 -ml-1" />
					</div>
					<p className="text-xs">142</p>
				</article>
				<article>
					<p className="text-xs">10 comments 11 reports</p>
				</article>
			</section>
			<section className="flex justify-around items-center py-1 mt-2">
				<button className="flex flex-col sm:flex-row items-center gap-x-2 hover:bg-gray-200 py-2 px-4 rounded focus:outline-none">
					<AiOutlineLike size={18} />
					<p>Like</p>
				</button>
				<button
					className="flex flex-col sm:flex-row items-center cursor-pointer hover:bg-gray-200 gap-x-2 py-2 px-4 rounded-md focus:outline-none"
					onClick={() => setShowComment(!showComment)}
				>
					<BsChatLeftText size={18} />
					<p>Comments</p>
				</button>
				<button className="flex items-center gap-x-2  hover:bg-gray-200 py-2 px-4 rounded flex-col sm:flex-row">
					<FcRefresh size={18} className="text-gray-500" />
					<p>Repost</p>
				</button>
				<button className="flex items-center gap-x-2  hover:bg-gray-200 py-2 px-4 rounded flex-col sm:flex-row">
					<BsFillSendFill size={18} />
					<p>Send</p>
				</button>
			</section>
			{showComment && <WriteComment />}
		</main>
	);
};

export default Post;
