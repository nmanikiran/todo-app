import { useState } from "react";
import "./App.css";
import TodoUseState from "./Components/TodoUseState";
import TodoUseReducer from "./Components/TodoUseReducer";
import TodoUseContext from "./Components/TodoUseContext";
import TodoZustand from "./Components/TodoZustand";
import TodoUseSyncExternalStore from "./Components/TodoUseSyncExternalStore";

const allFlavors = {
  useState: TodoUseState,
  useReducer: TodoUseReducer,
  useContext: TodoUseContext,
  useSyncExternalStore: TodoUseSyncExternalStore,
  exteralLib: TodoZustand,
};

function App() {
  const [flavor, setFlavor] = useState("useState");
  const Component = allFlavors[flavor] || "div";
  return (
    <>
      <h1>Todo App</h1>
      {Object.keys(allFlavors).map((key) => (
        <button
          className={key === flavor ? "selected" : ""}
          key={key}
          onClick={() => setFlavor(key)}
        >
          {key}
        </button>
      ))}
      <Component />
    </>
  );
}

export default App;
