import { useRef, useSyncExternalStore } from "react";
import { todoStore } from "./totoStore";

export default function TodoUseSyncExternalStore() {
  const inputRef = useRef("");
  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot
  );

  const addTodo = (e) => {
    e.preventDeafult();
    const value = inputRef.current.value.trim();
    if (value) {
      todoStore.addTodo(value);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Todo with UseSyncExternalStore</h2>
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
