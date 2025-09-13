import React from "react";
import ProductList from "./Components/ProductList";
import TodoApp from "./Components/TodoItem";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      {/* <ProductList
        products={[
          "apple",
          "banana",
          "cherry",
          "date",
          "egg",
          "fig",
          "grape",
          "kiwi",
          "lemon",
          "mango",
          "nectarine",
          "orange",
          "peach",
          "quince",
          "raspberry",
          "strawberry",
          "tomato",
          "watermelon",
        ]}
      /> */}

      {/* <TodoApp /> */}

      <Counter />
    </div>
  );
};

export default App;
