import React, { useState } from "react";
import "./assets/salad.css";
import OrderForm from "./OrderForm";

// ✅ Import Images from assets
import CaesarSalad from "./assets/saladtype/caesarsalad.jpg";
import GreekSalad from "./assets/saladtype/greeksalad.jpg";
import GardenSalad from "./assets/saladtype/gardensalad.jpg";

const Salad = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ Array with Imported Images
  const saladData = [
    { name: "Caesar Salad", image: CaesarSalad },
    { name: "Greek Salad", image: GreekSalad },
    { name: "Garden Salad", image: GardenSalad },
  ];

  return (
    <div className="salad-page">
      <div className="salad-container">
        <h2>Fresh & Healthy Salads 🥗</h2>
        <p>Enjoy our fresh, healthy, and tasty salads!</p>

        <div className="salad-grid">
          {saladData.map((item) => (
            <div className="salad-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Try our fresh {item.name}.</p>
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

export default Salad;
