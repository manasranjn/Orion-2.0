import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const para = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alert, setAlert] = useState("");

  const getPost = () => {
    axios
      .get(`http://localhost:5000/posts/${para.id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setAlert("");
      })
      .catch((err) => {
        console.log(err);
        setAlert("Failed to fetch data");
      });
  };

  const updatePost = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setAlert("Please fill all the fields");
      return;
    }

    const post = {
      title,
      description,
    };
    axios
      .put(`http://localhost:5000/posts${para.id}`, post)
      .then((res) => {
        console.log(res.data);
        navigate(`/post-details/${para.id}`);
      })
      .catch((err) => {
        console.log(err);
        setAlert("Something went wrong");
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="h-screen bg-[#D3DAD9] p-8 md:p-12 lg:p-20 flex justify-center items-center">
      <form
        action=""
        className="bg-[#5D688A] p-8 rounded shadow flex flex-col gap-4 min-w-xl"
      >
        <h1 className="text-3xl text-center text-white mb-4">Update Post</h1>
        <input
          type="text"
          placeholder="Enter Post Title"
          className="bg-white px-4 py-3 rounded border-none outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Enter Post Description"
          className="bg-white px-4 py-3 rounded border-none outline-none"
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 active:bg-green-600 active:scale-95 transition duration-200 cursor-pointer py-3 text-white text-xl rounded"
          onClick={updatePost}
        >
          Update Post
        </button>

        {alert && (
          <p className="text-orange-500 text-center text-xl">{alert}</p>
        )}
      </form>
    </div>
  );
};

export default EditPost;
