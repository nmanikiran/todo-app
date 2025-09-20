import { useState, useRef } from "react";

export default function TodoUseState() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  const addTodo = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) {
      setTodos([...todos, value]);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Todo with useState</h2>
      <form action={addTodo}>
        <input ref={inputRef} name="todo" required />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
