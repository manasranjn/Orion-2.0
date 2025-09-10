import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiSquaresFourFill } from "react-icons/pi";

const BottomNavbar = () => {
  return (
    <div className="p-2">
      {/* Navbar for Large Screens */}
      <div className="hidden lg:flex p-1 items-center mx-10 xl:mx-20 overflow-scroll text-nowrap element">
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
          <li className="hover:bg-blue-100 rounded-full px-4 py-2 flex gap-4 items-center">
            More Categories <RiArrowDropDownLine />
          </li>
        </ul>
        <ul className="flex gap-3 items-center text-gray-500">
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">
            Bookstore
          </li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2">Blog</li>
          <li className="hover:bg-blue-100 rounded-full px-4 py-2 flex gap-4 items-center">
            Explore <RiArrowDropDownLine />
          </li>
        </ul>
      </div>

      {/* Navbar For Small Screen */}
      <div className="lg:hidden">
        <ul className="flex gap-6 items-center text-gray-500 overflow-scroll text-sm element">
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
          <li className="hover:bg-blue-100 rounded-full border px-4 py-2 flex gap-4 items-center text-nowrap">
            More Categories <PiSquaresFourFill size={20} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNavbar;
