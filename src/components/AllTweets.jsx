"use client";
import { useState } from "react";

export default function AllTweets() {
	const currentUserId = 1233; // assume kiya hain, isko change karke dekho also yeh id initialTweets me kisika hona chahiye

  const initialTweets = [
    {
			_id: 1,
      user: { username: "Riddhi" },
      content: "Small steps every day lead to big changes.",
      likes: [1234, 1235]
    },
    {
			_id: 2,
      user: { username: "Manas" },
      content: "Code. Debug. Learn. Repeat.",
      likes: [1234, 1235]
    },
    {
			_id: 3,
      user: { username: "Madhura" },
      content: "Art speaks where words are unable to explain.",
      likes: [1234]
    },
  ];

	const [posts, setPosts] = useState(initialTweets);

	const handleLikes = async (id) => {
		setPosts((prevPosts) => 
			prevPosts.map((post) => {
				if (post._id === id) {
					const hasLiked = post.likes.includes(currentUserId);
					const updatedLikes = hasLiked ? post.likes.filter((anid) => anid != currentUserId) : [...post.likes, currentUserId];
					return {...post, likes: updatedLikes};
				}
				return post;
			})
		);
	};


	return(
		<div className="mt-10 flex flex-col md:min-w-1/2 min-w-2/3 gap-4 lg:max-w-1/2 md:max-w-2/3 md:px-0 px-4">
			{posts.map((post) => (
				<div key={post._id} className="bg-fuchsia-100 border-2 border-b-fuchsia-900 rounded-xl p-1">
					<div className="flex justify-between bg-fuchsia-300 rounded-md p-2">
						<strong>{post.user?.username || "Unknown"}</strong>
						<div className="flex w-10 justify-around items-center">
							<p className="cursor-pointer"
								onClick={() => handleLikes(post._id)}
							>
								❤️
							</p>
							<small>{post.likes.length}</small>
						</div>
					</div>
					<p className="py-3">{post.content}</p>
					
				</div>
			))}
		</div>
	);
}