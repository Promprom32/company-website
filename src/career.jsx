import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Man from "./assets/man.png";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

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
      <div className="bg-[#636768] px-24">
        <div className="flex py-5 px-5 justify-between">
          <div className="mt-7">
            <h3 className="custom-text text-[#fff] capitalize font-bold text-3xl">
              are you prepared to embark on your adventure with barnksforte?
            </h3>
            <p className="text-[#3AC1EF] text-2xl capitalize">
              we welcome  you to join us
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
        <div className="py-5 ">
          <h3
            // style={{ marginLeft: "17.2rem" }}

            className="text-[#fff] text-4l  font-semibold capitalize"
          >
            role
          </h3>
        </div>

        <div className="flex bg-[#878B8C]  justify-between items-center p-5">
          <div className="flex flex-col gap-3">
            <h3 className="capitalize text-white text-2xl font-semibold">
              quality assurance specialist
            </h3>
            <p className="custom-text text-white text-3l capitalize">
              the quality assurance specialist complies with defined quality
              standards and ensures that every assigned products meets the
              established standards of quality including security,
              reliability...
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col gap-1 items-center">
              <h3 className="capitalize text-2l text-white">
                quality assurance
              </h3>
              <p className="capitalize text-2l text-white">full time</p>
            </div>
            <Link className="text-[#3AC1EF] text-5xl" to="/career/quality">
              <AiOutlineRight />
            </Link>
          </div>
        </div>
        <div className="flex  bg-[#878B8C]  justify-between items-center p-5 mt-3">
          <div className="flex flex-col gap-3">
            <h3 className="capitalize text-white text-2xl font-semibold">
              UI/UX developer
            </h3>
            <p className="custom-text text-white text-3l capitalize">
              we are looking for someone who is an expert in UI/UX development
              to join us. you will be at natural at understanding human-computer
              interacting design (HCID),gathering user...
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col gap-1 items-center">
              <h3 className="capitalize text-2l text-white">design</h3>
              <p className="capitalize text-2l text-white">full time</p>
            </div>
            <Link className="text-[#3AC1EF] text-5xl" to="/career/quality">
              <AiOutlineRight />
            </Link>
          </div>
        </div>
        <div className="flex  bg-[#878B8C]  justify-between items-center p-5 mt-3">
          <div className="flex flex-col gap-3">
            <h3 className="capitalize text-white text-2xl font-semibold">
              technical assistant to executives
            </h3>
            <p className="custom-text text-white text-3l capitalize">
              we are looking for a technical assistant to the executives who
              will drive initiatives in the technology team to benefit realizing
              using 4DX, and in so doing, help the team to...
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col gap-1 items-center">
              <h3 className="capitalize text-2l text-white">administration</h3>
              <p className="capitalize text-2l text-white">full time</p>
            </div>
            <div className="text-[#3AC1EF] text-5xl">
              <AiOutlineRight />
            </div>
          </div>
        </div>
        <div className="flex  bg-[#878B8C]  justify-between items-center p-5 mt-3">
          <div className="flex flex-col gap-3">
            <h3 className="capitalize text-white text-2xl font-semibold">
              frontend engineer expert
            </h3>
            <p className="custom-text text-white text-3l capitalize">
              we are looking for a technical assistant to the executives who
              will drive initiatives in the technology team to benefit realizing
              using 4DX, and in so doing, help the team to...
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col gap-1 items-center">
              <h3 className="capitalize text-2l text-white">engineering</h3>
              <p className="capitalize text-2l text-white">full time</p>
            </div>

            <Link to="/career/quality" className="text-[#3AC1EF] text-5xl">
              <AiOutlineRight />
            </Link>
          </div>
        </div>
        <div className="flex  bg-[#878B8C]  justify-between items-center p-5 mt-5">
          <div className="flex flex-col gap-3">
            <h3 className="capitalize text-white text-2xl font-semibold">
              backend engineer expert
            </h3>
            <p className="custom-text text-white text-3l capitalize">
              we are looking for a technical assistant to the executives who
              will drive initiatives in the technology team to benefit realizing
              using 4DX, and in so doing, help the team to...
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col gap-1 items-center">
              <h3 className="capitalize text-2l text-white">engineering</h3>
              <p className="capitalize text-2l text-white">full time</p>
            </div>
            <Link className="text-[#3AC1EF] text-5xl" to="/career/quality">
              <AiOutlineRight />
            </Link>
          </div>
        </div>
      </div>
      <Footer className="px-2" />
    </div>
  );
};

export default career;
