import React, { useState, useEffect } from "react";
import Fruit from "./assets/fruits.png";
import Verxid from "./assets/verxid.png";
import Img5 from "./assets/img5.png";
import Img6 from "./assets/img6.png";
import Img7 from "./assets/img7.png";
import Img8 from "./assets/img8.png";
import Img9 from "./assets/img9.png";
import Img10 from "./assets/img10.png";
import Img11 from "./assets/img11.png";
import Img12 from "./assets/img12.png";
import { Link } from "react-router-dom";

// Define an array of image sources
const images = [Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12];

// Define the number of images to display at a time
const imagesPerPage = 4;

function ImageCarousel() {
  // Initialize the current page index
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Function to handle automatic scrolling
    const handleAutoScroll = () => {
      if (currentPage < images.length / imagesPerPage - 1) {
        setCurrentPage((prevPage) => prevPage + 1);
      } else {
        setCurrentPage(0); // Reset to the first page
      }
    };

    // Set up an interval to scroll automatically
    const intervalId = setInterval(handleAutoScroll, 3000); // Adjust the time interval as needed (e.g., 3000 milliseconds for a 3-second interval)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentPage]);

  // Calculate the start and end index of the images to display
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Get the subset of images to display on the current page
  const displayedImages = images.slice(startIndex, endIndex);

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
      <div className="flex flex-col items-center relative">
        <div className="flex justify-between w-full">
          {displayedImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`logo ${index}`}
                className="w-50 h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
