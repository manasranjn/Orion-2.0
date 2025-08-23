import React from "react";
import InlineCSS from "./Components/InlineCSS";
import StyleObject from "./Components/StyleObject";
import GlobalCSS from "./Components/GlobalCSS";
import "./style.css";
import Contents from "./Components/Contents";
import Product from "./Components/Product";

const App = () => {
  return (
    <div>
      {/* <h1>CSS and List</h1>
      <InlineCSS />
      <StyleObject />
      <GlobalCSS />
      <Contents /> */}

      <Product />
    </div>
  );
};

export default App;
