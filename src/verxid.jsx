import React, { useState, useEffect } from "react";
import Fruit from "./assets/fruits.png";
import Verxid from "./assets/verxid.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import img9 from "./assets/img9.png";
import img10 from "./assets/img10.png";
import img11 from "./assets/img11.png";
import img12 from "./assets/img12.png";
import { Link } from "react-router-dom";
import "../src/index.css";
function ImageCarousel() {
  const images = [img5, img6, img7, img8, img9, img10, img11, img12];
  return (
    <div>
      <div className="bg-white w-full h-full">
        <div className="flex justify-center space-x-4 font-semibold text-5xl mt-20">
          <img src={Fruit} alt="fruit logo" className="object-contain w-15" />
          <h2 className="text-[#606262] font-semibold text-3xl capitalize">
            {" "}
            our product
          </h2>
        </div>
        <div className="flex items-center justify-center space-x-24">
          <div className="flex items-center">
            <img src={Verxid} alt="verxid image" className="p-5" />
          </div>
          <div className="text-center mt-5 text-[#767A7A] text-1xl capitalize">
            <p className="custom-text">
              Verxid is a proprietary end to end highly secured, innovative
              touchless biometric infrastructure that can be integrated into
              existing mobile apps to enhance and offer multi-factor biometrics
              authentication. A patent self-service touchless biometric
              solutionfitted on a smart mobile device that can integrate
              seamlessly as an "Authentication Call to Action" process.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="flex border-2 border-[#3AC1EF] items-center rounded-full shadow-1xl bg-[#fff] p-4 mt-2 text-[#3BBFEC] font-semibold font-1l space-x-1">
          <Link to="/products">View More</Link>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                className="mt-1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 font-semibold text-5xl mt-20">
        <img src={Fruit} alt="fruit logo" className="object-contain w-15" />
        <h2 className="text-[#606262] font-semibold text-3xl capitalize">
          {" "}
          our clients
        </h2>
      </div>
      <div className="image-carousel-container flex justify-center">
        <div className="image-carousel flex justify-center">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`logo ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="image-carousel flex justify-center">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`logo ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
