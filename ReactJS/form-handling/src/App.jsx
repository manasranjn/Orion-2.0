import React, { createContext } from "react";
import Reference from "./Components/Reference";
import Uncontrolled from "./Components/Uncontrolled";
import Controlled from "./Components/Controlled";
import AllStudents from "./Components/AllStudents";

export const details = createContext();

const App = () => {
  return (
    <div>
      {/* <Reference /> */}
      {/* <Uncontrolled /> */}
      {/* <Controlled /> */}

      <details.Provider value={{ name: "Akash", age: 20, address: "BBSR" }}>
        <AllStudents />
      </details.Provider>
    </div>
  );
};

export default App;
