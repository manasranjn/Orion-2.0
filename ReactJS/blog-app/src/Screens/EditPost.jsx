import React from "react";

const EditPost = () => {
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
        />
        <textarea
          type="text"
          placeholder="Enter Post Description"
          className="bg-white px-4 py-3 rounded border-none outline-none"
          rows={6}
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 active:bg-green-600 active:scale-95 transition duration-200 cursor-pointer py-3 text-white text-xl rounded"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
