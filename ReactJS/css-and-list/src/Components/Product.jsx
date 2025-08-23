import React from "react";
import mobileImg from "../Assets/mobile.webp";

const Product = () => {
  return (
    <div className="h-96 w-[500px] bg-slate-300 p-5 m-auto rounded-xl shadow-lg ">
      <img src={mobileImg} alt="" className="h-48 m-auto" />
      <h1 className="text-xl text-green-600">Name: Mobile</h1>
      <p className="text-lg text-center font-bold font-sans text-blue-700">
        Price: 20000
      </p>
      <p className="text-lg text-center text-yellow-500">Rating: 4.5</p>
    </div>
  );
};

export default Product;
