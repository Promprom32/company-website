import React, { useState } from "react";
import Nav from "../nav";
import Group from "../assets/group.png";
import Footer from "../footer";
import Fruit from "../assets/fruits.png";
import BGL from "../assets/bgl.png";
import BG from "../assets/bg.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";
import img18 from "../assets/img18.png";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Testimony from "../testimony";
const about = () => {
  // Define an array of image sources
  const images = [img5, img6, img7, img13, img14, img15, img16, img17, img18];

  // Define the number of images to display at a time
  const imagesPerPage = 3;

  // Initialize the current page index
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the start and end index of the images to display
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Get the subset of images to display on the current page
  const displayedImages = images.slice(startIndex, endIndex);

  // Function to handle the next button click
  const handleNextClick = () => {
    if (endIndex < images.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  // Function to handle the previous button click
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const testimonials = [
    "working with barnksforte technologies limited has been a game changer for us. their innovative solutions and attention to detials have helped us acheive our goals faster than we have ever imagined.",
    "Client testimonial 2 text goes here.",
    "Client testimonial 3 text goes here.",
  ];
  return (
    <div>
      <Nav />
      <div>
        <img src={BG} alt="group photo" className="object-contain" />
      </div>
      <div>
        <div className="flex justify-center space-x-4 font-semibold text-3xl mt-10">
          <img src={Fruit} alt="fruit logo" className="object-contain w-15" />
          <h2 className="text-[#2D2B2B]">Who We Are</h2>
        </div>
        <div>
          <div className="text-[#2D2B2B] capitalize mt-2 p-20">
            {" "}
            <p>
              barnksforte technologies limited (BTL) is a subsidiary of
              barnksforte group, a parent company with subsidiaries like
              barnksforte global ltd. we are a conglomerate incorporated in
              nigeria with domestic and international business portfolios and
              trade links. we offer development solutions in africa and
              internationally. we are a purpose driven organization with
              products and services, development concepts, intellectual capital,
              and business solutions to transform the nigerian economy. <br />{" "}
              <br />
              in realizing africa's economic transformation, we have made a
              tremendous investment in the research and development of
              transferable and adoptable technology. based on our management
              philosophy, barnksforte technologies limited is committed to
              creating a new, progressive, state-of-the-art approach in our
              operations and services and contributing to the growth of nigeria
              and africa at large.
            </p>
          </div>
        </div>
        <div className="flex p-20   text-2l text-[#2D2B2B] capitalize">
          <div>
            <img src={BGL} alt="barnksforte-group-photo" />
          </div>
          <div>
            <p>
              at btl, our dedicated ICT practice deploys best of industry
              professionals in nigeria and abroad. <br /> our team of experts
              have decades of experience in the development and deployment of
              high-end IT solutions tailored to specific needs.
            </p>
            <br /> <br />
            <p>
              our dedicated practices cut across all works of life, providing
              solutions in many industry. <br /> our value added services to
              consumer is premised on our desire to be a leader providing <br />{" "}
              of development solution across the continent, and the world at
              large.
            </p>
            <div className=" ">
              <button className="bg-[#2C2E2E] text-[#fff] shadow-2xl font-bold py-2 px-8 rounded mt-5">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center space-x-4 font-semibold text-3xl">
          <img src={Fruit} alt="fruit logo" className="object-contain w-15" />
          <h2 className="text-[#2D2B2B]"> What Our Clients Say About Us</h2>
        </div>
        <div className="container justify-center p-4 mt-5">
          <Testimony testimonials={testimonials} className="custom-text"/>
        </div>
      </div>

      <div>
        <div className="flex justify-center space-x-4 font-semibold text-3xl mt-10">
          <img src={Fruit} alt="fruit logo" className="object-contain w-15" />
          <h2 className="text-[#2D2B2B]"> Our Partners</h2>
        </div>
        <div className="flex flex-col items-center relative p-10">
          <div className="flex justify-between w-full">
            {displayedImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`logo ${index}`} />
              </div>
            ))}
            <button
              onClick={handlePrevClick}
              className="absolute text-2xl left-2 transform -translate--1/2  text-white py-2 px-4 rounded-l bg-[#D6D6D6]"
            >
              {" "}
              <AiOutlineDoubleLeft />{" "}
            </button>
            <button
              onClick={handleNextClick}
              className="absolute text-2xl right-2 transform -translate-y-1/2 text-white py-2 px-4 rounded-l bg-[#D6D6D6]"
            >
              <AiOutlineDoubleRight />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default about;
