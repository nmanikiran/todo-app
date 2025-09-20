import { useRef } from "react";
import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));

export default function TodoZustand() {
  const { todos, addTodo } = useTodoStore();
  const inputRef = useRef("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) {
      addTodo(value);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Todo with External Lib Store (Zustand)</h2>
      <form action={handleAddTodo}>
        <input ref={inputRef} name="todo" required />
        <button type="submit" onClick={handleAddTodo}>
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
