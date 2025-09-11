import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const BottomNavbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="p-2">
      {/* Navbar for Large Screens */}
      <div className="hidden lg:flex pb-1 items-center mx-10 xl:mx-20 overflow-scroll text-nowrap element">
        <ul className="flex gap-1 xl:gap-3 items-center text-gray-500 border-r border-gray-200 ">
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">
            Young Adult
          </li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">Fantasy</li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">Sci-Fi</li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">
            Thrillers
          </li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">Horror</li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">Romance</li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">
            Historical Fiction
          </li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2 flex gap-2 items-center cursor-pointer">
            More Categories <RiArrowDropDownLine size={22} />
          </li>
        </ul>
        <ul className="flex gap-3 items-center text-gray-500">
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">
            Bookstore
          </li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">Blog</li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2 flex gap-2 items-center cursor-pointer">
            Explore <RiArrowDropDownLine size={22} />
          </li>
        </ul>
      </div>

      {/* Navbar For Small Screen */}
      <div className="lg:hidden">
        <ul className="flex gap-3 items-center text-gray-500 overflow-scroll text-sm element">
          <li className="hover:bg-blue-100 rounded-full px-3 py-2 border text-nowrap">
            Young Adult
          </li>
          <li className="hover:bg-blue-100 rounded-full px-3 py-2 border text-nowrap">
            Fantasy
          </li>
          <li className="hover:bg-blue-100 rounded-full px-3 py-2 border text-nowrap">
            Sci-Fi
          </li>
          <li className="hover:bg-blue-100 rounded-full px-3 py-2 border text-nowrap">
            Thrillers
          </li>
          <li
            className="hover:bg-blue-100 rounded-full border px-4 py-2 flex gap-2 items-center text-nowrap cursor-pointer"
            onClick={() => setIsCategoryOpen(true)}
          >
            More Categories <PiSquaresFourFill size={20} />
          </li>
        </ul>
      </div>

      {/* Slide-up Drawer for Small Screens */}
      {/* Overlay */}
      {isCategoryOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40"
          onClick={() => setIsCategoryOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 p-6 rounded-t-2xl transform transition-transform duration-300 
          ${isCategoryOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">More Categories</h2>
          <IoClose
            size={26}
            className="cursor-pointer"
            onClick={() => setIsCategoryOpen(false)}
          />
        </div>

        <ul className="grid grid-cols-1 gap-3 text-gray-700 text-base">
          <li className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
            Horror
          </li>
          <li className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
            Romance
          </li>
          <li className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
            Historical Fiction
          </li>
          <li className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
            Biographies
          </li>
          <li className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
            Poetry
          </li>
          <li className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
            Children's Books
          </li>
          <li className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
            Comics
          </li>
          <li className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
            Non-Fiction
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNavbar;
