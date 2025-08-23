import React from "react";

const StyleObject = () => {
  const style = {
    backgroundColor: "lightblue",
    color: "red",
    fontSize: "50px",
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={style}>Style Object</h1>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default StyleObject;
