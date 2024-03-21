import React from "react";
import { todoList } from "../store";

export const Header = () => {
  console.log("Render Header");
  return (
    <header className="bg-white border-b border-gray-300 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="text-3xl font-bold c dark:text-white">Todo List</h1>
        <span className="text-2xl">
          Tasks completed:{" "}
          {todoList.value.filter((item) => item.isCompleted === true).length}
        </span>
      </div>
    </header>
  );
};
