import React from "react";

const Details = (p) => {
  console.log(p);

  return (
    <div>
      <h1>Name: {p.data.name}</h1>
      <h2>Age: {p.data.age}</h2>
    </div>
  );
};

export default Details;
