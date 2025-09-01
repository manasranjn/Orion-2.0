import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-10 py-3 bg-gray-600 text-white text-xl">
      <h1 className="text-3xl">Logo</h1>

      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
      <div>
        <button
          className="bg-green-600 px-5 py-2 rounded-lg cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
