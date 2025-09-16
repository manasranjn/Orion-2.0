import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const getAllProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    console.log(response);
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };
  //   console.log(products);
  //   getAllProducts();
  useEffect(() => {
    getAllProducts();
  }, []);

  const lastIndex = currentPage * postPerPage; // 1 * 10 = 10
  const firstIndex = lastIndex - postPerPage; // 10 - 10 = 0
  const currentPosts = products.slice(firstIndex, lastIndex);

  return (
    <div className="bg-slate-500 p-10 text-white">
      <h1>List Effect</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts?.map((product) => {
          return (
            <div key={product.id} className="bg-slate-700 p-5 rounded-lg">
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-10 mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-green-600 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === products.length / postPerPage}
          className="px-4 py-2 rounded bg-green-600 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
