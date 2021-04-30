import React, { useState } from "react";
import menu from "./data";
import Category from "./Category";
import Menu from "./Menu";

function App() {
  const [menuItem, setMenuItem] = useState(menu);
  return (
    <div className="main-section">
      <header>
        <h2 className="title">Asian Kitchen</h2>
      </header>
      <Category />
      <Menu items={menuItem} />
    </div>
  );
}

export default App;
