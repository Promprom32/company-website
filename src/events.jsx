import React, { useState, useEffect } from "react";
import Card1 from "./assets/card1.png";
import Card2 from "./assets/card2.png";
import Card3 from "./assets/card3.png";
import Card4 from "./assets/card4.png";
import Card5 from "./assets/card5.png";
import Fruit from "./assets/fruits.png";
import Footer from "./footer";
import Nav from "./nav";
import "../src/index.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Card1, Card2, Card3]; // Add more image filenames as needed
  const imageContent = [
    {
      heading: "touchless biometric system",
      description:
        "we provide advanced contactless/automated biometric identification system(ABIS) used for large scale biometric identification and deduplication",
    },
    {
      heading: "data loss prevention",
      description:
        "we provide a data loss prevention strategy to tackle the incidence of data compromise and data loss by mentoring, detecting and blocking unauthorised forms of data",
    },
    {
      heading: "network and deployment services",
      description:
        "we provide a variety of flexible installation oferings, designed to assist you in planning and implementing either a single site and multi-site, network solution. we have the expertise to develop your network solutions for a green field application, redesigning networks or deploying existing hardware in new applications or new location.",
    },
    {
      heading: "IT procurement services",
      description:
        "we profer a collection of processes that identifies business for strategic needs for IT, selecting the appropriate solutions and then procuring the hardware.",
    },
    {
      heading: "training support services",
      description:
        "we offer an array of professional training and support services which are facilitated by IT experts with extensive work experience and research and advanced software development",
    },
  ]; // Add corresponding content for each image

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
      <Nav />
      <div className="w-full h-screen overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full absolute top-0 left-0 transform transition-opacity  ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background color or texture */}
            <div className="w-full h-full bg-opacity-75 absolute"></div>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-contain"
            />
            {/* Text content */}
            <div className="w-full h-full bg-gray-900 bg-opacity-75 absolute"></div>
            <div className="text-white absolute md:left-1/4 md:-bottom-1  mb-6 lg:block">
              <h3 className="text-[#3AC1EF] custom-text text-3xl capitalize">
                {imageContent[index].heading}
              </h3>
              <p className="text-[#fff] custom-text capitalize mt-2">
                {imageContent[index].description}
              </p>
            </div>
          </div>
        ))}
        <div className="">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-5xl  text-white rounded-l"
            style={{ padding: "5rem" }}
          >
            <AiOutlineDoubleLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-5xl text-white  rounded-r hover-bg-gray-600"
            style={{ padding: "5rem" }}
          >
            <AiOutlineDoubleRight />
          </button>
        </div>
      </div>
      <div>
        <div className="flex   space-x-4 p-10">
          <img src={Fruit} alt="fruit-logo" />
          <h3 className="text-2xl capitalize text-[#636768] font-bold">
            events
          </h3>
        </div>

        <div className="flex justify-between gap-4 p-10">
          <div>
            <img src={Card1} alt="" className="w-50 h-50" />
            <div className="flex justify-between">
              <h3>launced verxid</h3>
              <p>2023</p>
            </div>
          </div>
          <div>
            <img src={Card4} alt="" />
            <div className="flex justify-between">
              <h3>launced verxid</h3>
              <p>2023</p>
            </div>
          </div>
          <div>
            <img src={Card5} alt="" className="w-50 h-50" />
            <div className="flex justify-between">
              <h3>launced verxid</h3>
              <p>2023</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-4 p-10">
          <div>
            <img src={Card1} alt="" className="w-50 h-50" />
            <div className="flex justify-between">
              <h3>launced verxid</h3>
              <p>2023</p>
            </div>
          </div>
          <div>
            <img src={Card4} alt="" />
            <div className="flex justify-between">
              <h3>launced verxid</h3>
              <p>2023</p>
            </div>
          </div>
          <div>
            <img src={Card5} alt="" className="w-50 h-50" />
            <div className="flex justify-between">
              <h3>launced verxid</h3>
              <p>2023</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default events;
