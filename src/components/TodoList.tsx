import { todoList } from "../store";

export const TodoList = () => {
  console.log("Render TodoList");

  const toggleTodo = (id: number, isCompleted: boolean) => {
    todoList.value = todoList.value.map((todo: any) => {
      if (todo.id === id) {
        return { ...todo, isCompleted };
      }

      return todo;
    });
  };

  return (
    <ul className="mx-6">
      {todoList.value.reverse().map((item) => (
        <li key={item.id} className="flex items-center mb-6">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={item.isCompleted}
            onChange={(e) => toggleTodo(item.id, e.target.checked)}
            className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-4 text-3sm font-medium text-gray-900 dark:text-gray-300"
          >
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
};
