// todoStore.ts

class TodoStore {
  #todos = [];
  #listeners = new Set();

  // ✅ snapshot for React
  getSnapshot = () => this.#todos;

  // ✅ subscribe for React
  subscribe = (listener) => {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  };

  // ✅ state mutators
  addTodo = (todo) => {
    this.#todos = [...this.#todos, todo];
    this.#emit();
  };

  removeTodo = (index) => {
    this.#todos = this.#todos.filter((_, i) => i !== index);
    this.#emit();
  };

  #emit = () => {
    for (const l of this.#listeners) l();
  };
}

// Create a single instance (like a global store)
export const todoStore = new TodoStore();
