import React from "react";

const Category = ({ categories, filterBtns }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="btn"
            type="button"
            onClick={() => filterBtns(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
