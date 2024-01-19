import React from "react";

import { computed } from "@preact/signals-react";
import { todos } from "../App";

const completedTodos = computed(() =>
  todos.value.filter((todo) => todo.isCompleted)
);

export const Navbar = ({ todos }: any) => {
  console.log("Render Navbar");

  return (
    <header className="header">
      <div className="flex-between-center">
        <div className="logo">Logo</div>
        <div className="completed-todos">
          Completed Todos: {completedTodos.value.length}
        </div>
      </div>
    </header>
  );
};
