import React, { useState, useEffect } from "react";

const ListEffect = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <h1>List Effect</h1>
      <div>
        {products?.map((product) => {
          return (
            <div>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListEffect;
