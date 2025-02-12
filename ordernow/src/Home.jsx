import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const API_URL = `${import.meta.env.VITE_API_URL}/api`; // Ensure correct API path
    console.log("API URL:", API_URL);

    axios
      .get(API_URL)
      .then((response) => {
        console.log("API Response:", response.data); 
        setMessage(response.data.message || "No message received"); // Ensure correct data extraction
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Home-container">
      <h1>
        <span className="welcome">Welcome to</span>{" "}
        <span className="hotel">Our Hotel</span>
      </h1>
      

      <Link to="/Menu">
        <button className="home-button">Click Here for Menu</button>
      </Link>
    </div>
  );
};

export default Home;
