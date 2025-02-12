import React from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice, FaLeaf, FaIceCream, FaUtensils } from "react-icons/fa";


import "./assets/Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Our Delicious Menu</h2>
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/pizza">
            <button className="menu-button">
              <FaPizzaSlice className="menu-icon" /> <span>Pizza</span>
            </button>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/pasta">
            <button className="menu-button">
              <FaUtensils className="menu-icon" /> <span>Pasta</span>
            </button>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/salad">
            <button className="menu-button">
              <FaLeaf className="menu-icon" /> <span>Salad</span>
            </button>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Dessert">
            <button className="menu-button">
              <FaIceCream className="menu-icon" /> <span>Dessert</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
