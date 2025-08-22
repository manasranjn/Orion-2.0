import React from "react";

const Product = ({ name, price, rating, description }) => {
  // console.log(props);

  // const { name, price, rating, description } = props;
  return (
    // <div
    //   style={{
    //     border: "2px solid red",
    //     backgroundColor: "lightblue",
    //     margin: "10px",
    //   }}
    // >
    //   <h1>Name:{props.name} </h1>
    //   <h2>Price: {props.price}</h2>
    //   <p>Rating: {props.rating}</p>
    //   <p>Description: {props.description}</p>
    // </div>

    <div
      style={{
        border: "2px solid red",
        backgroundColor: "lightblue",
        margin: "10px",
      }}
    >
      <h1>Name:{name} </h1>
      <h2>Price: {price}</h2>
      <p>Rating: {rating}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Product;
