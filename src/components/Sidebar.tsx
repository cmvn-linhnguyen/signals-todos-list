/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Sidebar = () => {
  console.log("Render Categories");

  return (
    <aside
      id="default-sidebar"
      className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 group cursor-pointer">
                <span className="flex-1 ms-3 whitespace-nowrap">Link {i}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
