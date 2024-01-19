import React from "react";

export const Sidebar = () => {
  console.log("Render Sidebar");

  return (
    <div className="sider">
      <nav className="nav">
        {new Array(9).fill(null).map((item, index) => (
          <div className="nav-item" key={index}>
            Option {index}
          </div>
        ))}
      </nav>
    </div>
  );
};
