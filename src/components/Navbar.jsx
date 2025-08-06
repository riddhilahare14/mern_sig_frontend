"use client";
import Link from "next/link";

export default function Navbar() {
	const handleLogout = async () => {
		console.log("Successfully Logged Out!");
	}
  return(
    <div className="fixed w-full top-0 left-0 z-50 flex justify-between px-8 py-5 items-center bg-blue-300 shadow-2xl shadow-stone-600 ">
      <h1 className="text-3xl">PictoTweets</h1>
      <div className="w-2/5 flex justify-around text-2xl">
        <Link href="/" className="hover:text-shadow-gray-700 hover:text-shadow-2xs">Home</Link>
        <Link href="/myposts" className="hover:text-shadow-gray-700 hover:text-shadow-2xs">My Posts</Link>
        <Link href="/create" className="hover:text-shadow-gray-700 hover:text-shadow-2xs">Create</Link>
				<button
					onClick={handleLogout}
					className="hover:text-shadow-gray-700 hover:text-shadow-2xs cursor-pointer"
				>
					Logout
				</button>
      </div>
    </div>
  );
}