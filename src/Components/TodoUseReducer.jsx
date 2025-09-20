import { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
}

export default function TodoUseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const inputRef = useRef("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) {
      dispatch({ type: "ADD", payload: value });
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Todo with useReducer</h2>
      <form action={handleAddTodo}>
        <input ref={inputRef} name="todo" required />
        <button type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((t, i) => (
          <li key={i} onClick={() => dispatch({ type: "REMOVE", index: i })}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
