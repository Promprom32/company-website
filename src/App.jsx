import React from "react";
import Home from "./Navbar/home";
import About from "./Navbar/about";
import Enterprise from "./enterprise";
import Products from "./products";
import Priority from "./priority";
import Management from "./management";
import Boards from "./Boards";
import Events from "./events";
import Career from "./career";
import Quality from "./quality";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/enterprise" element={<Enterprise />} />
          <Route path="/services/products" element={<Products />} />
          <Route path="/services/priority" element={<Priority />} />
          <Route path="/company/management" element={<Management />} />
          <Route path="/company/boards" element={<Boards />} />
          <Route path="/company/events" element={<Events />} />
          <Route path="/career/career" element={<Career />} />

          <Route path="/career/quality" element={<Quality />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
