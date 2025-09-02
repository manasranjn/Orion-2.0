import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 md:px-12 lg:px-20 py-3 bg-green-400">
      <Link
        to="/"
        className="px-4 py-2 bg-slate-500 rounded text-white text-sm md:text-base"
      >
        Home
      </Link>
      <Link
        to="/create-post"
        className="px-4 py-2 bg-slate-500 rounded text-white text-sm md:text-base"
      >
        Create Post
      </Link>
    </div>
  );
};

export default Navbar;
