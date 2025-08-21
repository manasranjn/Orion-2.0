import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Content from "./Components/Content.jsx";
import Footer from "./Components/Footer.jsx";
import FunctionBase from "./Components/FunctionBase.jsx";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Content />
      <Content />
      <Content />
      <FunctionBase />
      <h1>hello world</h1>
      <p>hello world</p>
      <Footer />
    </div>
  );
};

export default App;
