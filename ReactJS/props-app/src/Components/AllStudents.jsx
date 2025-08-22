import React from "react";
import Student from "./Student";

const AllStudents = ({ name, age, address, Class }) => {
  //   console.log("All student component", data);

  return (
    <div>
      <Student name={name} age={age} address={address} Class={Class} />
    </div>
  );
};

export default AllStudents;
