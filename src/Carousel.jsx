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
            <div className="w-full h-full  bg-[#110F15] bg-opacity-25 absolute"></div>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover"
            />
            {/* Text content */}
            <div className=" top-0 absolute md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 py-4 px-4">
              <h1 className="sm:text-1xl md:text-4xl ">
                <span
                  className="bg-[#2783A1] text-5xl font-semibold py-5 px-6 sm:text-1xl  text-white"
                  style={{ letterSpacing: "0.3rem" }}
                >
                  BARNKSFORTE
                </span>{" "}
              </h1>
              <p>
                <span
                  className="flex flex-col text-5xl font-semibold py-4 px-3 sm:text-1xl ml-3 uppercase text-white"
                  style={{ letterSpacing: "0.3rem", marginTop:"0.3rem" }}
                >
                  technologies
                </span>{" "}
              </p>
              <p>
                <span
                  className="flex flex-col text-5xl font-semibold py-4 px-3 sm:text-1xl ml-4 mb-2 uppercase text-white"
                  style={{ letterSpacing: "0.3rem" }}
                >
                  limited
                </span>{" "}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-[#2B85A1] ml-7 font-semibold flex flex-col">
                Your Reliable Solution Partner
              </p>
              <div className="flex justify-left space-x-4 md:space-x-2 mt-4 ml-6">
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
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white py-2 px-4 rounded-l"
        >
          <AiOutlineDoubleLeft className="text-5xl text-white hover:text-[#110F15]"  />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white py-2 px-4 rounded-r"
        >
          <AiOutlineDoubleRight className="text-5xl text-white hover:text-[#110F15]" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
