import React, { useContext } from "react";
import { details } from "../App";

const PersonalDetails = () => {
  console.log(details);

  const data = useContext(details);
  console.log(data);

  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h2>Age: {data.age}</h2>
      <h3>Address: {data.address}</h3>
    </div>
  );
};

export default PersonalDetails;
