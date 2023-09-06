import React from "react";
import { AiFillInfoCircle, AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";

const RightSide = () => {
	return (
		<main className="bg-white rounded-md ">
			<section className="px-3 py-2">
				<article className="flex items-center justify-between mb-3">
					<p className="text-sm font-bold">Add to your Feeds</p>
					<AiFillInfoCircle size={18} />
				</article>

				{Array(3)
					.fill(0)
					.map((_, i) => (
						<article className="flex items-start gap-x-3 border py-2 px-2 rounded-md my-2" key={i}>
							<img
								src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
								alt="add-network"
								className="w-12 aspect-square rounded-full"
							/>
							<aside className="flex flex-col gap-y-1">
								<p className="font-bold">Qatar Airways -Current Vacancies</p>
								<p>Company and Human Resources</p>
								<div className="flex items-center border-2 border-gray-500 w-1/3 justify-center py-1 rounded-full gap-x-1">
									<AiOutlinePlus size={20} />
									<p className="text-sm  font-bold">Follow</p>
								</div>
							</aside>
						</article>
					))}
			</section>
		</main>
	);
};

export default RightSide;
