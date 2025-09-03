import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getAllPost = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res.data);
        setAllPosts(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch data");
        setAllPosts([]);
      });
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="h-screen bg-[#D3DAD9] p-8 md:p-12 lg:p-20 ">
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {allPosts.map((post) => (
          <div
            className="bg-[#5D688A] text-white p-8 rounded shadow"
            key={post.id}
          >
            <h3 className="text-2xl mb-3 font-semibold">
              Title : {post.title}
            </h3>
            <p className="text-gray-200 hover:text-blue-200">
              <Link to={`/post-details/${post.id}`}>
                Description : {post.description.slice(0, 150) + "..."}
              </Link>
            </p>
            <button
              onClick={() => navigate(`/post-details/${post.id}`)}
              className="bg-blue-500 hover:bg-blue-400 active:bg-blue-600 active:scale-95 transition duration-200 cursor-pointer py-2 w-full text-white text-xl rounded mt-4"
            >
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
