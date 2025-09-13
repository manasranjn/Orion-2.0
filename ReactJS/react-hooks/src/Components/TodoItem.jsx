import React, { useState, useCallback } from "react";

function TodoItem({ todo, onDelete }) {
  console.log("Rendering Todo:", todo);
  return (
    <li>
      {todo} <button onClick={onDelete}>Delete</button>
    </li>
  );
}

const TodoApp = () => {
  const [todos, setTodos] = useState(["Learn React", "Build Project"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  // Using useCallback to prevent re-creating function every render
  const deleteTodo = useCallback(
    (todo) => {
      setTodos((prev) => prev.filter((t) => t !== todo));
    },
    [setTodos]
  );

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <TodoItem key={i} todo={t} onDelete={() => deleteTodo(t)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
