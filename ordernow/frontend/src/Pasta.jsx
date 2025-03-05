import React, { useState } from "react";
import "./assets/pasta.css";
import OrderForm from "./OrderForm";

// ✅ Images Import from assets
import Spaghetti from "./assets/pastatype/spaghetti.jpg";
import PenneAllArrabbiata from "./assets/pastatype/penne-allarrabbiata.jpg";
import FettuccineAlfredo from "./assets/pastatype/fettuccine-alfredo.jpg";

const Pasta = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ Array with Imported Images
  const pastaData = [
    { name: "Spaghetti", image: Spaghetti },
    { name: "Penne-AllArrabbiata", image: PenneAllArrabbiata },
    { name: "Fettuccine-Alfredo", image: FettuccineAlfredo },
  ];

  return (
    <div className="pasta-page">
      <div className="pasta-container">
        <h2>Delicious Pasta 🍝</h2>
        <p>Enjoy our mouthwatering pasta, cooked to perfection!</p>

        <div className="pasta-grid">
          {pastaData.map((item) => (
            <div className="pasta-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Delight your taste buds with our mouthwatering {item.name}.</p>
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

export default Pasta;
