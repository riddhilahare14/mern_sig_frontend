
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Create() {

	const [text, setText] = useState("");

	const handlePost = async () => {
		if (!text.trim()) return;
		setText("");
		alert("Tweet posted successfully");
	};

	return (
		<>
			<Navbar />
			<div className="flex justify-center items-center min-h-screen">
				<div className='flex flex-col justify-center bg-fuchsia-100 border-2 border-b-fuchsia-900 rounded-xl w-2/5 p-5 '>
					<span className="pb-4">Write A Tweet</span>
					<textarea 
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="What's on your mind"
						className="resize-none h-32 w-full rounded-md p-3 border outline-0 focus:ring"
					/>
					<div className="flex justify-between pt-5">
						<button
							onClick={handlePost}
							disabled={!text.trim()}
							className="  bg-fuchsia-300 hover:bg-fuchsia-400 px-3 py-1 disabled:opacity-50 rounded-md "
						>
							<span className="text-xl">Post</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}