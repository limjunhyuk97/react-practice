import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo((prev) => event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") return;
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          onChange={onChange}
          value={todo}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {" "}
        {todos.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
