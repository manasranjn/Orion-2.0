import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const para = useParams();
  // console.log(para.id);
  const [postData, setPostData] = useState({});
  const [alert, setAlert] = useState("");

  const navigate = useNavigate();

  const getPost = () => {
    axios
      .get(`http://localhost:5000/posts/${para.id}`)
      .then((res) => {
        console.log(res.data);
        setPostData(res.data);
        setAlert("");
      })
      .catch((err) => {
        console.log(err);
        setPostData({});
        setAlert("Failed to fetch data");
      });
  };

  const deletePost = () => {
    axios
      .delete(`http://localhost:5000/posts/${para.id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/");
        setAlert("");
      })
      .catch((err) => {
        console.log(err);
        setAlert("Failed to delete data");
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      {alert && <p className="text-red-500 text-xl mb-4">{alert}</p>}
      <div className="bg-[#D3DAD9] p-8 rounded shadow min-w-[90vw] md:min-w-xl max-w-3xl">
        <h3 className="text-2xl">{postData.title}</h3>
        <p className="mt-4">{postData.description}</p>
        <div className="flex justify-between mt-6 text-white">
          <button
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 active:bg-blue-600 active:scale-95 transition duration-200 cursor-pointer"
            onClick={() => navigate(`/edit-post/${para.id}`)}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-400 active:bg-red-600 active:scale-95 transition duration-200 cursor-pointer"
            onClick={deletePost}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
