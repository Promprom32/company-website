import React from "react";
import Home from "./Navbar/home";
import About from "./Navbar/about";
import Enterprise from "./enterprise";
import Products from "./products";
import Priority from "./priority";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/products" element={<Products />} />
          <Route path="/priority" element={<Priority />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
