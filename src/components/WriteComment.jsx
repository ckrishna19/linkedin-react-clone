import React from "react";
import { useState } from "react";
import { BsCaretDownFill, BsEmojiSmile, BsImage, BsThreeDots } from "react-icons/bs";

const WriteComment = () => {
	const [text, setText] = useState("");
	const handleInputChange = (e) => {
		setText(e.target.value);
		e.target.style.height = "auto";
		e.target.style.height = e.target.scrollHeight + "px";
	};

	return (
		<main className="bg-white">
			<section className="flex items-start gap-x-3 mx-4 bg-white">
				<img
					src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
					alt="profile"
					className="    w-10 aspect-square rounded-full"
				/>
				<article className="flex flex-1 border  border-gray-300 rounded-2xl px-3 items-start pt-2">
					<div className="relative flex-1 px-2 pb-1">
						<textarea
							className="block w-full text-sm text-gray-700 leading-normal appearance-none focus:outline-none focus:bg-white  overflow-hidden resize-none"
							rows="1"
							placeholder="Write Comment"
							value={text}
							onChange={handleInputChange}
						/>
						<div className="h-px bg-transparent  absolute bottom-0 left-0 right-0 pointer-events-none" />
					</div>

					<div className="flex items-center gap-x-4">
						<BsImage size={18} />
						<BsEmojiSmile size={18} />
					</div>
				</article>
			</section>

			<div className="flex items-center gap-x-1 px-4 my-2">
				<p className="font-bold text-sm">Most Relevent</p>
				<BsCaretDownFill size={16} />
			</div>

			{Array(3)
				.fill(0)
				.map((_, i) => (
					<section className="flex items-start px-4 gap-x-2 my-2" key={i}>
						<img src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg" alt="user-profile" className="w-10 aspect-square rounded-full" />
						<article className="flex justify-between items-start bg-gray-100 px-4 py-2 rounded-md">
							<aside className="flex-1">
								<div className="flex items-center gap-x-1">
									<p className="font-bold text-black">Sirish Chalise</p>
									<p className="text-xs">Top Contributor</p>
								</div>
								<p className="text-xs"> Web Developer | Mobile Developer | Data Science | Content Creater </p>

								<p className="text-xs mt-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum necessitatibus libero facilis non ipsam neque ipsum maiores
									sequi. Quaerat, necessitatibus! Tenetur non perspiciatis, quibusdam et quae suscipit porro ad, tempora exercitationem mollitia a nihil
									nobis nulla repellat sequi provident incidunt molestiae. Nesciunt laboriosam odio in dicta voluptas assumenda cum.
								</p>
							</aside>
							<aside className="flex gap-x-1">
								<p className="text-xs">50 m</p>
								<BsThreeDots size={20} className="text-black" />
							</aside>
						</article>
					</section>
				))}
		</main>
	);
};

export default WriteComment;
