import React, { useState } from "react";
import "./assets/dessert.css";
import OrderForm from "./OrderForm"; // ✅ Fixed Import Path

// ✅ Import Images from assets
import ChocolateCake from "./assets/desserttype/chocolatecake.jpg";
import IceCream from "./assets/desserttype/ice-cream.jpg";
import Cheesecake from "./assets/desserttype/cheesecake.jpg";

const Dessert = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ Array with Imported Images
  const dessertData = [
    { name: "Chocolate Cake", image: ChocolateCake },
    { name: "Ice Cream", image: IceCream },
    { name: "Cheesecake", image: Cheesecake },
  ];

  return (
    <div className="dessert-page">
      <div className="dessert-container">
        <h2>Sweet & Tasty Desserts 🍰</h2>
        <p>Indulge in our delicious desserts, perfect for every occasion!</p>

        <div className="dessert-grid">
          {dessertData.map((item) => (
            <div className="dessert-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Delicious {item.name} to satisfy your cravings.</p>
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

export default Dessert;
