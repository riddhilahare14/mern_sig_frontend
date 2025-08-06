"use client";
import { useState } from "react";

export default function MyTweets() {
  const currentUserId = 1234;

  const myTweets = [
    {
      _id: 1,
      user: { username: "Riddhi" },
      content: "Just a frontend test tweet!",
      likes: [1234],
    },
    {
      _id: 2,
      user: { username: "Riddhi" },
      content: "Trying out edit and delete!",
      likes: [],
    },
  ];

	const [posts, setPosts] = useState(myTweets);
	const [editId, setEditId] = useState(null);
	const [editContent, setEditContent] = useState("");

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

	const handleDelete = async (id) => {
		setPosts((prev) => prev.filter((post) => post._id !== id));
	};

	const startEditing = (id, currentContent) => {
		setEditId(id);
		setEditContent(currentContent);
	}

	const handleEditSave = async () => {
		setPosts((prev) => 
			prev.map((post) => post._id === editId ? {...post, content: editContent} : post)
		);
		setEditId(null);
		setEditContent("");
	};

	const handleEditCancel = () => {
		setEditId(null);
		setEditContent("");
	}

	return(
		<div className="mt-10 flex flex-col md:min-w-1/2 min-w-2/3 gap-4 lg:max-w-1/2 md:max-w-2/3 md:px-0 px-4">
			{posts.map((post) => (
				<div key={post._id} className="bg-fuchsia-100 border-2 border-b-fuchsia-900 rounded-xl p-1">
					<div className="flex justify-between bg-fuchsia-300 rounded-md p-2">
						<strong>{post.user?.username || "Unknown"}</strong>
						<div className="flex w-50 justify-between ">
							<div className="flex w-10 justify-around items-center ">
								<p className="cursor-pointer" onClick={() => handleLikes(post._id)}>❤️</p>
								<small>{post.likes.length}</small>
							</div>
							<button onClick={() => startEditing(post._id, post.content)} className="text-md">Edit</button>
							<button onClick={() => handleDelete(post._id)}>Delete</button>
						</div>
					</div>

					{editId === post._id ? (
						<div className="m-4">
							<textarea 
								value={editContent}
								onChange={(e) => setEditContent(e.target.value)}
								placeholder="What's on your mind"
								className="resize-none h-32 w-full rounded-md p-3 border outline-0 focus:ring"
							></textarea>
							<div className="flex justify-between m-4">
								<button onClick={handleEditSave} className="bg-emerald-300 px-4 py-1 rounded-md hover:bg-emerald-600">Save</button>
								<button onClick={handleEditCancel} className="bg-red-400 px-4 py-1 rounded-md hover:bg-red-600">Cancel</button>
							</div>
						</div>
					) : (
						<p className="py-3">{post.content}</p>
					)}			
				</div>
			))}
		</div>
	);
}
