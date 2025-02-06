import React from 'react';
import './assets/pizza.css';

const Pizza = () => {
  
  return (
    <div className="pizza-page">
      <div className="pizza-container">
        <h2>Delicious Pizzas 🍕</h2>
        <p1>Enjoy our mouth-watering pizzas made with fresh ingredients!</p1>
        
        <div className="pizza-grid">
          <div className="pizza-item">
            <img src="../src/pizzatype/margareta.jpg" alt="Margherita Pizza" />
            <h3>Margherita</h3>
            <p>Classic delight with fresh tomatoes & basil.</p>
            <button className="order-button">Order Now</button>
          </div>

          <div className="pizza-item">
            <img src="../src/pizzatype/pepperoni.jpg" alt="Pepperoni Pizza" />
            <h3>Pepperoni</h3>
            <p>Loaded with spicy pepperoni slices.</p>
            <button className="order-button">Order Now</button>
          </div>

          <div className="pizza-item">
            <img src="../src/pizzatype/veggie.jpg" alt="Veggie Pizza" />
            <h3>Veggie Special</h3>
            <p>Topped with fresh veggies & cheese.</p>
            <button className="order-button">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
