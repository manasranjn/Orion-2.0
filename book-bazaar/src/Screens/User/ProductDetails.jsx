import React from "react";
import ProductImageSlider from "../../Components/UserSideComponents/ProductDetailsComponents/ProductImageSlider";
import PriceCard from "../../Components/UserSideComponents/ProductDetailsComponents/PriceCard";
import ProductDescription from "../../Components/UserSideComponents/ProductDetailsComponents/ProductDescription";

const ProductDetails = () => {
  return (
    <div className="bg-gray-50 px-10 py-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <ProductImageSlider />
        <ProductDescription />
      </div>
      <PriceCard />
    </div>
  );
};

export default ProductDetails;
