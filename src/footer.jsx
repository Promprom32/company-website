import React,{useState, useEffect} from "react";
import BGL from "./assets/bgl-logo.png";
import { Link } from "react-router-dom";
import face from "./assets/face.png";
import insta from "./assets/insta.png";
import linkd from "./assets/linkd.png";
import tweet from "./assets/tweet.png";
const footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Update the year every second

    return () => {
      clearInterval(timer); // Cleanup the timer on component unmount
    };
  }, []);
  return (
    <div>
      <div className="bg-[#444444] text-white py-4">
        <div className="container mx-auto flex justify-between  gap-4 items-center">
          <div className="flex items-center p-5">
            <img
              src={BGL}
              alt="verxid image"
              className="w-30 h-20 object-contain"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 capitalize text-[#D6D6D6] font-semibold">
            <div className="col-span-3 space-x-4">
              <Link to="/">home</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact us</Link>
            </div>
            <div className="col-span-3 space-x-4">
              <Link to="/services">services</Link>
              <Link to="/product">products</Link>
              <Link to="/faq">Faq</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <div className="">
            <img src={face} alt="facebook logo" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <img src={linkd} alt="linkedlin logo" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <img src={insta} alt="instagram logo" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <img src={tweet} alt="tweeter logo" className="w-10 h-10 object-contain" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center capitalize mt-3 text-[#D6D6D6]">
          <h2> {currentYear} barnksforte technologies limited. all rights reserved</h2>
        </div>
      </div>
    </div>
  );
};

export default footer;
