import React from "react";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <div className="shadow-lg sticky top-0 z-50 bg-white">
      <TopNavbar />
      <BottomNavbar />
    </div>
  );
};

export default Navbar;
