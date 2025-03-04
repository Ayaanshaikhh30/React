import React, { useState } from "react";
import "./assets/dessert.css";
import OrderForm from "../src/OrderForm"; // Import the Order Form Component

const Dessert = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="dessert-page">
      <div className="dessert-container">
        <h2>Sweet & Tasty Desserts 🍰</h2>
        <p>Indulge in our delicious desserts, perfect for every occasion!</p>
        
        <div className="dessert-grid">
          {["chocolatecake", "Ice Cream", "Cheesecake"].map((item) => (
            <div className="dessert-item" key={item}>
              <img src={`./public/image/desserttype/${item.toLowerCase().replace(/\s/g, "-")}.jpg`} alt={item} />
              <h3>{item}</h3>
              <p>Delicious {item} to satisfy your cravings.</p>
              <button className="order-button" onClick={() => setSelectedItem(item)}>Order Now</button>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && <OrderForm item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Dessert;
