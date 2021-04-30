import React, { useState } from "react";
import menus from "./data";
import Category from "./Category";
import Menu from "./Menu";

const allCategories = ["All", ...new Set(menus.map((menu) => menu.category))];

function App() {
  const [menuItem, setMenuItem] = useState(menus);
  console.log(menuItem);
  const [categories, setCategories] = useState(allCategories);

  const filterBtns = (category) => {
    if (category === "All") {
      setMenuItem(menus);
      return;
    }
    const newItems = menus.filter((menu) => {
      return menu.category === category;
    });
    console.log(newItems);
    setMenuItem(newItems);
  };

  return (
    <div className="main-section">
      <header>
        <h2 className="title">Asian Kitchen</h2>
      </header>
      <Category categories={categories} filterBtns={filterBtns} />
      <Menu items={menuItem} />
    </div>
  );
}

export default App;
