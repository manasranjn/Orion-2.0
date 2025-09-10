import React from "react";
import logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const TopNavbar = () => {
  return (
    <div className="">
      {/* Navbar for Large Screens */}
      <div className="hidden lg:flex p-3 items-center justify-between mx-10 xl:mx-20">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Logo" className="h-14" />
          <h1 className="text-2xl">Book Bazaar</h1>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search Books"
              className="bg-gray-200 px-5 py-2 rounded-full outline-none border-none"
            />
            <IoSearch className="absolute right-4 " />
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700 active:scale-95 transition duration-200">
            Sell Your Books
          </button>

          <ul className="flex gap-3 items-center ">
            <li className="hover:text-blue-600 hover:font-semibold">About</li>
            <li className="hover:text-blue-600 hover:font-semibold">
              <FaCartArrowDown size={25} />
            </li>
            <li className="hover:text-blue-600 hover:font-semibold">Login</li>
          </ul>
        </div>
      </div>

      {/* Navbar for Small Screens */}
      <div className="lg:hidden flex flex-col justify-between px-5 py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="Logo" className="h-12" />
            <h1>Book Bazaar</h1>
          </div>

          <ul className="flex gap-3 items-center ">
            <li className="hover:text-blue-600 hover:font-semibold">Login</li>
            <li className="hover:text-blue-600 hover:font-semibold">
              <FaCartArrowDown size={25} />
            </li>
            <li className="hover:text-blue-600 hover:font-semibold">
              <RxHamburgerMenu size={25} />
            </li>
          </ul>
        </div>

        <div className="flex items-center relative w-full">
          <input
            type="text"
            placeholder="Search Books"
            className="bg-gray-200 px-5 py-2 pr-10 rounded-full outline-none border-none w-full"
          />
          <IoSearch className="absolute right-4 " />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
