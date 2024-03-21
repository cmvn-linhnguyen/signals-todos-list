import { signal } from "@preact/signals-react";
import { TodoItem } from "./type";
import { LOCAL_STORAGE_KEY } from "./constant";

const getTodoList = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
};

export const todoList = signal<TodoItem[]>(getTodoList());
