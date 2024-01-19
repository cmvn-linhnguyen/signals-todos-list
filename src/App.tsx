import "./App.css";
import { Navbar } from "./components/Navbar";
import { TodoList } from "./components/TodoList";
import { Sidebar } from "./components/Sidebar";
import { effect, signal } from "@preact/signals-react";

export const LOCAL_STORAGE_KEY = "TODOS";

export interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

const getTodos = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
};

export const todos = signal<TodoItem[]>(getTodos());

effect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
});

function App() {
  console.log("Render App");

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
