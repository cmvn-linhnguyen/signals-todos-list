import React, { useRef } from "react";
import { todos } from "../App";

export const TodoList = () => {
  console.log("Render TodoList");

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      todos.value = [
        ...todos.value,
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

  const toggleTodo = (id: number, isCompleted: boolean) => {
    todos.value = todos.value.map((todo: any) => {
      if (todo.id === id) {
        return { ...todo, isCompleted };
      }

      return todo;
    });
  };

  return (
    <div>
      <div className="max-w-500 flex-center gap-5">
        <div>
          <label className="label">
            <span className="label-text">Enter Todo</span>
          </label>
          <input
            className="input"
            type="text"
            ref={inputRef}
            placeholder="Add new ..."
            onKeyUp={handleInputKeyPress}
          />
        </div>

        <button onClick={addTodo} className="submit-btn">
          Save
        </button>
      </div>
      <h2>Todos</h2>
      {todos.value.map((todo) => (
        <div key={todo.id} className="flex-center">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />
          <p>{todo.name}</p>
        </div>
      ))}
    </div>
  );
};
