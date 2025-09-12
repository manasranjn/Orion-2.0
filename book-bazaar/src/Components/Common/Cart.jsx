import React from "react";

const Cart = ({ isCartOpen, onClose }) => {
  if (!isCartOpen) {
    return null;
  }

  return (
    <div className="absolute top-16 right-32 flex items-center justify-center z-50 ">
      <div className="bg-white w-md rounded-2xl shadow-lg shadow-blue-100 p-8 relative">
        {/* Cart Item*/}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold">My Cart</h2>
          <button
            className=" text-gray-500 hover:text-gray-800 cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {/* Subtotal */}
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <h2 className="text-lg font-semibold">Subtotal</h2>
          <p>₹0</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
