import React, { useState } from "react";

import "../index.css";
import Carousel from "../Carousel";
import Creative from "../creative";
import Tech from "../tech";
import Verxid from "../verxid";
import Footer from "../footer";
import Nav from "../nav";
const Home = () => {
  return (
    <div>
      <Nav />
      <div>
        <Carousel />
        <Creative />
        <Tech />
        <Verxid />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
