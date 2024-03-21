import { useRef } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { LOCAL_STORAGE_KEY } from "./constant";
import { todoList } from "./store";
import { effect } from "@preact/signals-react";

function App() {
  console.log("Render App");

  const inputRef = useRef<HTMLInputElement>(null);

  effect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  });

  const addTodo = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      todoList.value = [
        ...todoList.value,
        { id: new Date().getTime(), name: inputValue, isCompleted: false },
      ];

      inputRef.current.value = "";
    }
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="w-screen h-screen">
      <Header />
      <div>
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <form
            className="mx-6 mt-3"
            onSubmit={(e) => {
              e.preventDefault();
              addTodo();
            }}
          >
            <div className="relative">
              <input
                type="text"
                id="add"
                className="block w-full p-4 ps-6 mb-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ref={inputRef}
                placeholder="Add new ..."
                onKeyUp={handleInputKeyPress}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Add
              </button>
            </div>
          </form>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
