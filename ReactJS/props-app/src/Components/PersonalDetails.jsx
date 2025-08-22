import React from "react";

const PersonalDetails = ({ name, age, address, Class }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Address: {address}</h2>
      <h2>Class: {Class}</h2>
    </div>
  );
};

export default PersonalDetails;
