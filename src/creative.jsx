import React from "react";
import Fruit from "./assets/fruits.png";
import Bio from "./assets/bio.png";
import Coding from "./assets/coding.png";
import Internet from "./assets/internet.png";
import Lock from "./assets/lock.png";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import "../src/index.css";
import "./index.css";
const creative = () => {
  return (
    <div>
      <div className="bg-white w-full h-full">
        <div className="flex justify-center space-x-4 font-semibold text-5xl mt-20">
          <img src={Fruit} alt="fruit logo" className="object-contain w-15" />
          <h2 className="text-[#2C2E2E]"> Our Creative Value</h2>
        </div>
        <div className="text-center text-[#717576]">
          <p className="text-2l capitalize mt-2 ">
            we offer development solutions in africa and intentionally. we are a
            purpose driven <br />
            organisations with products and services,
            <br /> development concepts,intellectual capital, and business
            soltions <br /> required for transforming the economy of nigeria.
          </p>
        </div>
        <div className="flex justify-center text-center items-center space-x-7 flex-wrap">
          <div className="flex flex-col items-center mt-5  w-full md:w-1/2 lg:w-1/5">
            <div className="p-6  rounded-full border shadow-2xl bg-[#319650]">
              <img src={Coding} alt="coding image" className="" />
            </div>
            <h2 className="capitalize text-[#2C2E2E] font-semibold text-1xl mt-2">
              software development, <br />
              implementation & <br /> management
            </h2>
            <p className="text-[#7E909E] capitalize text-1l font-semibold mt-2 custom-text">
              We apply cutting-edge <br />
              techniques to ensure our <br /> products are delivered
              efficiently, <br /> effectively and satisfactorily.
            </p>
          </div>

          <div className="flex flex-col items-center mt-7  w-full md:w-1/2 lg:w-1/5">
            <div className="p-6 rounded-full border shadow-2xl bg-[#3B99B7]">
              <img src={Bio} alt="biometrics" />
            </div>
            <h2 className="capitalize text-[#2C2E2E] font-semibold text-1xl mt-4">
              {" "}
              touchless biometric system
            </h2>
            <p className="text-[#7E909E] capitalize text-1l font-semibold mt-2 custom-text">
              We provide advanced <br />
              Automated Biometric <br /> Identification System used for <br />{" "}
              large-scale biometric <br /> identification and <br />
              deduplication.
            </p>
          </div>
          <div className="flex flex-col items-center mt-6  w-full md:w-1/2 lg:w-1/5">
            <div className="p-6 rounded-full border shadow-2xl bg-[#FA4343] ">
              <img src={Lock} alt="lock" />
            </div>
            <h2 className="capitalize text-[#2C2E2E] font-semibold text-1xl mt-2">
              data loss prevention
            </h2>
            <p className="text-[#7E909E] capitalize text-1l font-semibold mt-2 custom-text">
              We provide strategic solutions <br /> through our well researched{" "}
              <br /> and development partnership <br /> company to monitor,
              detect, <br /> and block the unauthorized <br />
              flow of information.
            </p>
          </div>
          <div className="flex flex-col items-center  w-full md:w-1/2 lg:w-1/5">
            <div className="p-6 rounded-full border shadow-2xl bg-[#BE9D16]">
              <img src={Internet} alt="internet" />
            </div>
            <h2 className="capitalize font-semibold text-1xl text-[#2C2E2E] mt-2">
              network and deployment services
            </h2>
            <p className="text-[#7E909E] capitalize text-1l font-semibold mt-2 custom-text">
              We provide a variety of <br />
              flexible installation offerings,
              <br /> designed to assist you in <br />
              planning and implementating <br />
              your network solutions.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <div className="flex border-2 border-[#3BBFEC] items-center rounded-full shadow-1xl bg-[#fff] p-4 mt-2 text-[#3BBFEC] font-semibold font-1l space-x-1">
            <Link to="services">See More Services </Link>
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
      </div>
    </div>
  );
};

export default creative;
