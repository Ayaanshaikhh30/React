import React from 'react';
import './assets/Home.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="Home-container">
      <h1>
        <span className="welcome">Welcome to</span> <span className="hotel">Our Hotel</span>
      </h1>
      
      {/* Link component for navigation */}
      <Link to="/Menu">
        <button className="home-button">
          Click Here for Menu
        </button>
      </Link>
    </div>
  );
};

export default Home;
