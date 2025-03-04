import React, { useState } from "react";
import "./assets/pasta.css";
import OrderForm from "./OrderForm"; // Import Order Form

const Pasta = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="pasta-page">
      <div className="pasta-container">
        <h2>Delicious Pasta 🍝</h2>
        <p>Enjoy our mouthwatering pasta, cooked to perfection!</p>

        <div className="pasta-grid">
          {["Spaghetti", "Penne-Arrabbiata", "fettuccine-alfredo"].map((item) => (
            <div className="pasta-item" key={item}>
              <img src={`./public/image/pastatype/${item.toLowerCase().replace(/\s/g, "-")}.jpg`} alt={item} />
              <h3>{item}</h3>
              <p>Try our delicious {item}.</p>
              <button className="order-button" onClick={() => setSelectedItem(item)}>Order Now</button>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && <OrderForm item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Pasta;
