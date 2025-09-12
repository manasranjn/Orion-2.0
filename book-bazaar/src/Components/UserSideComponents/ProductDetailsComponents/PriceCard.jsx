import React from "react";

const PriceCard = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl">
      <h2>Book Name</h2>
      <p>
        by <span>Author Name</span>
      </p>
      <span>
        <IoStar size={14} fill="gold" stroke="gold" />
      </span>
    </div>
  );
};

export default PriceCard;
