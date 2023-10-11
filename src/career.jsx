import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Man from "./assets/man.png";
import { AiOutlineRight } from "react-icons/ai";
const career = () => {
  return (
    <div>
      <Nav />
      <div
        className="bg-[#3AC1EF]"
        style={{ padding: "1rem", paddingLeft: "3rem" }}
      >
        <h3 className="text-2xl capitalize text-[#fff] font-semibold">
          career
        </h3>
      </div>
      <div className="bg-[#636768]">
        <div className="flex justify-center space-x-20 px-5 py-5">
          <div>
            <h3 className="custom-text text-[#fff] capitalize font-bold text-3xl">
              are you prepared to embark on your adventure with barnksforte?
            </h3>
            <p className="text-[#3AC1EF] text-2xl capitalize">
              we welcome to join us
            </p>
          </div>

          <div>
            <img
              src={Man}
              alt=""
              className=" object-contain"
              style={{ width: "20rem", height: "16rem" }}
            />
          </div>
        </div>
        <h3
          style={{ marginLeft: "10rem" }}
          className="text-[#fff] text-4l  font-semibold capitalize"
        >
          role
        </h3>

        <div>
          <div className="flex justify-center space-x-20 ">
            <div>
              <h3>quality assurance specialist</h3>
              <p className="custom-text">
                the quality assurance analyst complies with defined quality
                standards and ensures that every assigned products meets the
                established standards of quality including security, reliability
              </p>
            </div>
            <div>
              <h3>quality assurance</h3>
              <p>full time  <AiOutlineRight /></p>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default career;
