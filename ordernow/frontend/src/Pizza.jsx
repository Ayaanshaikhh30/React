import React, { useState } from "react";
import "./assets/pizza.css";
import OrderForm from "./OrderForm";

// ✅ Import Images from assets
import Margareta from "./assets/pizzatype/margareta.jpg";
import Pepperoni from "./assets/pizzatype/pepperoni.jpg";
import Veggie from "./assets/pizzatype/veggie.jpg";

const Pizza = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ Array with Imported Images
  const pizzaData = [
    { name: "Margareta", image: Margareta },
    { name: "Pepperoni", image: Pepperoni },
    { name: "Veggie", image: Veggie },
  ];

  return (
    <div className="pizza-page">
      <div className="pizza-container">
        <h2>Delicious Pizzas 🍕</h2>
        <p>Enjoy our freshly baked pizzas with rich toppings!</p>

        <div className="pizza-grid">
          {pizzaData.map((item) => (
            <div className="pizza-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Try our delicious {item.name} pizza.</p>
              <button className="order-button" onClick={() => setSelectedItem(item.name)}>
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && <OrderForm item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Pizza;
