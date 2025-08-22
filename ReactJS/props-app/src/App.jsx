import React from "react";
import Product from "./Components/Product";
import Details from "./Components/Details";
import AllStudents from "./Components/AllStudents";

const App = () => {
  // const arr = [1, 2, 3, 4, 5];
  // const [a, b, c, d, e] = arr;

  // console.log(a);

  // const obj = {
  //   name: "Akash",
  //   age: 20,
  //   address: "Gaya",
  // };

  // const { name, age, address } = obj;
  // console.log(name);

  return (
    <div>
      {/* <h1>App</h1> */}
      {/* <Product
        name="Mobile"
        price="10000"
        rating="4.5"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Product
        name="Tablet"
        price="20000"
        rating="4.2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Product
        name="Laptop"
        price="50000"
        rating="4.8"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      /> */}

      {/* <Details data={{ name: "Akash", age: 20 }} /> */}

      <AllStudents name="Akash" age="20" address="Bhubaneswar" Class="10th" />
    </div>
  );
};

export default App;
