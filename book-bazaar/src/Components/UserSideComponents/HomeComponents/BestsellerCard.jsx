import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const BestsellerCard = ({ book, navigate }) => {
  return (
    <div
      className="w-48 bg-white rounded-2xl shadow-md p-3 flex-shrink-0 relative cursor-pointer"
      onClick={() => navigate(`/product-details`)}
    >
      <img
        src={book.image}
        alt={book.title}
        className="h-52 w-full object-cover rounded-lg"
      />

      {book.sold && (
        <span className="absolute top-24 left-0 w-full bg-yellow-500 text-center text-sm font-semibold text-white py-1">
          Sold
        </span>
      )}

      <div className="mt-2">
        <p className="text-xs text-gray-500">{book.author}</p>
        <h3 className="text-sm font-semibold truncate">{book.title}</h3>

        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
          <FaStar size={14} fill="gold" stroke="gold" />
          <span className="text-gray-700">{book.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="text-sm font-bold">₹{book.price.toFixed(2)}</span>
            {book.oldPrice && (
              <span className="text-xs line-through text-gray-400 ml-2">
                ₹{book.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          {!book.sold && (
            <button className="bg-indigo-100 p-2 rounded-full hover:bg-indigo-200">
              <FaCartArrowDown size={16} className="text-indigo-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestsellerCard;
