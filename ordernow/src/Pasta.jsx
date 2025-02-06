import React from 'react';
import './assets/pasta.css';

const Pasta = () => {
  return (
    <div className="pasta-page">
      <div className="pasta-container">
        <h2>Delicious Pastas 🍝</h2>
        <p1>Indulge in our mouth-watering pasta dishes made with fresh ingredients!</p1>
        
        <div className="pasta-grid">
          <div className="pasta-item">
            <img src="../src/pastatype/spaghetti.jpg" alt="Spaghetti" />
            <h3>Spaghetti</h3>
            <p>Classic Italian pasta with a rich tomato sauce.</p>
            <button className="order-button">Order Now</button>
          </div>

          <div className="pasta-item">
            <img src="../src/pastatype/fettuccine-alfredo.jpg" alt="Alfredo Pasta" />
            <h3>Fettuccine Alfredo</h3>
            <p>Rich and creamy pasta with a white Alfredo sauce.</p>
            <button className="order-button">Order Now</button>
          </div>

          <div className="pasta-item">
            <img src="../src/pastatype/Penne Arrabbiata.jpg" alt="Penne Arrabbiata" />
            <h3>Penne Arrabbiata</h3>
            <p>Spicy penne pasta with a tangy tomato sauce.</p>
            <button className="order-button">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pasta;
