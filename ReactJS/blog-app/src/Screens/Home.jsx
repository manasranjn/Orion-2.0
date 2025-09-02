import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPost = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res.data);
        setAllPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="h-screen bg-[#D3DAD9] p-8 md:p-12 lg:p-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {allPosts.map((post) => (
          <div className="bg-[#5D688A] text-white p-8 rounded shadow">
            <h3 className="text-2xl mb-3 font-semibold">
              Title : {post.title}
            </h3>
            <p className="text-gray-200 hover:text-blue-200">
              <Link to={`/post-details/${post.id}`}>
                Description : {post.description.slice(0, 150) + "..."}
              </Link>
            </p>
            <div className="flex justify-between mt-6">
              <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 active:bg-blue-600 active:scale-95 transition duration-200 cursor-pointer">
                Edit
              </button>
              <button className="px-4 py-2 rounded bg-red-500 hover:bg-red-400 active:bg-red-600 active:scale-95 transition duration-200 cursor-pointer">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
