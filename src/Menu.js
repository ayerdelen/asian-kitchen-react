import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-table">
      <div className="table-section">
        {items.map((item) => {
          const { price, id, title, desc, img } = item;
          return (
            <div className="card-body" key={id}>
              <div className="img-container">
                <img src={img} alt={title} className="photo" />
              </div>
              <div className="menu-info">
                <div className="menu-title">
                  <h4>{title}</h4>
                  <h4>{price}</h4>
                </div>
                <div className="menu-text">
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
