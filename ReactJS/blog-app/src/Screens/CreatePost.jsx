import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alert, setAlert] = useState("");
  const [success, setSuccess] = useState("");

  //   console.log(title, description);

  const handleSubmit = (e) => {
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
      .post("http://localhost:5000/posts", post)
      .then((res) => {
        console.log("Post Created", res);
        setSuccess("Post Created Successfully");
        setTitle("");
        setDescription("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[90vh] bg-[#D3DAD9] p-8 md:p-12 lg:p-20 flex justify-center items-center">
      <form className="bg-slate-500 p-8 rounded shadow flex flex-col gap-4 min-w-xl">
        <h1 className="text-3xl text-center text-white mb-4">Create Post</h1>
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
          onClick={handleSubmit}
        >
          Create Post
        </button>

        {alert && (
          <p className="text-orange-500 text-xl text-center">{alert}</p>
        )}

        {success && (
          <p className="text-green-500 text-xl text-center">{success}</p>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
