import React from "react";
import PersonalDetails from "./PersonalDetails";

const Student = ({ name, age, address, Class }) => {
  return (
    <div>
      <PersonalDetails name={name} age={age} address={address} Class={Class} />
    </div>
  );
};

export default Student;
