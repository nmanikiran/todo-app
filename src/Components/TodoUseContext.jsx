import { createContext, useContext, useState, useRef } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => setTodos((item) => [...item, todo]);

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

function TodoInput() {
  const ctx = useContext(TodoContext);
  const inputRef = useRef("");

  const handleAddTodo = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      ctx.addTodo(value);
      inputRef.current.value = "";
    }
  };
  return (
    <form action={handleAddTodo}>
      <input ref={inputRef} name="todo" required />
      <button type="submit" onClick={handleAddTodo}>
        Add
      </button>
    </form>
  );
}

function TodoList() {
  const ctx = useContext(TodoContext);
  return (
    <ul>
      {ctx.todos.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

export default function TodoUseContext() {
  return (
    <TodoProvider>
      <h2>Todo with useContext</h2>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
}
