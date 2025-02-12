import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Pizza from './Pizza';
import Pasta from './Pasta';
import Salad from './Salad';
import Dessert from './Dessert';
import Orderform from './Orderform';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Pizza" element={<Pizza/>}/>
        <Route path="/Pasta" element={<Pasta/>}/>
        <Route path="/Salad" element={<Salad/>}/>
        <Route path="/Dessert" element={<Dessert/>}/>
        <Route path="/Orderform" element={<Orderform/>}/>
        
         
      </Routes>
    </Router>
  );
}

export default App;
