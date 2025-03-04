import React, { useState } from "react";
import "./assets/pizza.css";
import OrderForm from "./OrderForm"; // Import Order Form

const Pizza = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="pizza-page">
      <div className="pizza-container">
        <h2>Delicious Pizzas 🍕</h2>
        <p>Enjoy our freshly baked pizzas with rich toppings!</p>

        <div className="pizza-grid">
          {["margareta", "Pepperoni", "veggie"].map((item) => (
            <div className="pizza-item" key={item}>
              <img src={`./public/image/pizzatype/${item.toLowerCase().replace(/\s/g, "-")}.jpg`} alt={item} />
              <h3>{item}</h3>
              <p>Try our delicious {item} pizza.</p>
              <button className="order-button" onClick={() => setSelectedItem(item)}>Order Now</button>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && <OrderForm item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Pizza;
