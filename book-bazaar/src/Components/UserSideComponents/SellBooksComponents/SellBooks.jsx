import React from "react";
import sellImg from "../../../assets/sell-screen.jpeg";
const SellBooksSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
            Want to sell your books?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At BookBazaar our goal is to make it as easy as possible to sell
            your books to other readers. Just sign up to our platform, follow a
            few simple steps, and in just a few minutes, your books will be in
            front of our amazing community of book lovers.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
            Sign Up to Sell
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={sellImg}
            alt="Sell Books"
            className="rounded-2xl relative z-10"
          />
          <div className="absolute -bottom-4 -right-4 bg-yellow-500 rounded-2xl w-full h-full -z-0"></div>
        </div>
      </div>
    </section>
  );
};
export default SellBooksSection;
