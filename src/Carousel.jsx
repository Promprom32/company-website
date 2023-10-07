import React, { useState, useEffect } from "react";
import Mask from "./assets/mask.png";
import Hero from "./assets/hero.png";
import Bio from "./assets/bio.png";
import Code from "./assets/coding.png";
import Internet from "./assets/internet.png";
import Lock from "./assets/lock.png";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Hero, Mask]; // Add more image filenames as needed

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next image
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="w-full h-screen overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full absolute top-0 left-0 transform transition-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background color or texture */}
            <div className="w-full h-full bg-gray-700 bg-opacity-75 absolute"></div>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover"
            />
            {/* Text content */}
            <div className="text-white text-center top-72 absolute md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 lg:block">
              <h1 className="sm:text-1xl md:text-4xl lg:text-4xl font-semibold">
                <span
                  className="bg-[#267F93] text-6xl font-semibold py-3 px-6 sm:text-1xl "
                  style={{ letterSpacing: "0.2rem" }}
                >
                  BARNKSFORTE
                </span>{" "}
                <br />
                <span
                  style={{ letterSpacing: "0.3rem" }}
                  className="sm:text-1xl"
                >
                  TECHNOLOGIES LIMITED
                </span>
              </h1>
              <p
                className="text-lg md:text-xl lg:text-2xl text-[#267F93] font-semibold mt-4"
                style={{ letterSpacing: "0.3rem" }}
              >
                Your Reliable Solution Partner
              </p>
              <div className="flex justify-center space-x-4 md:space-x-2 mt-4">
                <img src={Bio} alt="biometrics" />
                <img src={Code} alt="coding" />
                <img src={Internet} alt="internet" />
                <img src={Lock} alt="lock" />
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white py-2 px-4 rounded-l hover:bg-gray-600"
        >
          <AiOutlineDoubleLeft className="text-4xl text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white py-2 px-4 rounded-r hover:bg-gray-600"
        >
          <AiOutlineDoubleRight className="text-4xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
