import React, { useState } from "react";
import "./assets/orderForm.css";

const OrderForm = ({ item, onClose }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = { name, address, item };
    console.log("Sending Order Data:", orderData);  // ✅ Debugging

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert(`Order Placed Successfully!\nItem: ${item}\nName: ${name}\nAddress: ${address}`);
        onClose();
      } else {
        alert("Failed to place order. Try again!");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="order-modal">
      <div className="order-modal-content">
        <h2>Order Now - {item}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button type="submit">Submit Order</button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderForm;
