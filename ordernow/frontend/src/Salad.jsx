import React, { useState } from "react";
import "./assets/salad.css";
import OrderForm from "./OrderForm"; // Import Order Form

const Salad = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="salad-page">
      <div className="salad-container">
        <h2>Fresh & Healthy Salads 🥗</h2>
        <p>Enjoy our fresh, healthy, and tasty salads!</p>

        <div className="salad-grid">
          {["CaesarSalad", "greeksalad", "gardensalad"].map((item) => (
            <div className="salad-item" key={item}>
              <img src={`../src/saladtype/${item.toLowerCase().replace(/\s/g, "-")}.jpg`} alt={item} />
              <h3>{item}</h3>
              <p>Try our fresh {item}.</p>
              <button className="order-button" onClick={() => setSelectedItem(item)}>Order Now</button>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && <OrderForm item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Salad;
