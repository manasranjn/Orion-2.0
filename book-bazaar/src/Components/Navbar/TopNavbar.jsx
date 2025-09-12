import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../../Screens/nonAuth/AuthModal";
import Cart from "../Common/Cart";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar for Large Screens */}
      <div className="hidden lg:flex p-2 items-center justify-between mx-10 xl:mx-20">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="h-14" />
          <h1 className="text-2xl font-semibold">Book Bazaar</h1>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search Books"
              className="bg-gray-200 px-5 py-2 rounded-full outline-none border-none"
            />
            <IoSearch className="absolute right-4 text-gray-600" />
          </div>

          <Link to="/sell-your-books">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700 active:scale-95 transition duration-200">
              Sell Your Books
            </button>
          </Link>

          <ul className="flex gap-5 items-center text-lg">
            <li className="hover:text-blue-600 hover:font-semibold cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li
              className="hover:text-blue-600 hover:font-semibold cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <FaCartArrowDown size={25} />
            </li>
            <li
              onClick={() => setIsModalOpen(true)}
              className="hover:text-blue-600 hover:font-semibold cursor-pointer"
            >
              Login
            </li>
          </ul>
          <Cart isCartOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <AuthModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>

      {/* Navbar for Small Screens */}
      <div className="lg:hidden flex flex-col justify-between px-5 py-2 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="Logo" className="h-12" />
            <h1 className="text-xl font-semibold">Book Bazaar</h1>
          </div>

          <ul className="flex gap-4 items-center">
            <li className="hover:text-blue-600 hover:font-semibold cursor-pointer">
              Login
            </li>
            <li className="hover:text-blue-600 hover:font-semibold cursor-pointer">
              <FaCartArrowDown size={25} />
            </li>
            <li
              className="hover:text-blue-600 hover:font-semibold cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
              <RxHamburgerMenu size={28} />
            </li>
          </ul>
        </div>

        {/* Search bar */}
        <div className="flex items-center relative w-full mt-2">
          <input
            type="text"
            placeholder="Search Books"
            className="bg-gray-200 px-5 py-2 pr-10 rounded-full outline-none border-none w-full"
          />
          <IoSearch className="absolute right-4 text-gray-600" />
        </div>
      </div>

      {/* Sidebar Menu for Small Screens */}
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <IoClose
            size={28}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-4 text-lg">
          <li
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Sell Your Books
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Categories</li>
          <li className="hover:text-blue-600 cursor-pointer">Help</li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
