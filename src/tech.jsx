import React from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
const tech = () => {
  return (
    <div>
      <div className="bg-[#3AC1EF]">
        <div
          className=" mt-10 flex justify-center"
          style={{ letterSpacing: "0.2rem" }}
        >
          <h2 className="uppercase  text-[#fff] text-2xl text-center font-light relative p-3">
            barnksforte technologies limited
            <div className="absolute bottom-0 left-1/2  transform -translate-x-1/2 border-b-2 items-center border-white w-1/6"></div>
          </h2>
        </div>
        <div className="flex flex-col p-2">
          <p
            className="text-center text-[#EAF8FD]  capitalize font-light italic"
            style={{ letterSpacing: "0.2rem" }}
          >
            your reliable solution partners
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap">
          <div className="flex w-full max-w-screen-lg md:w-1/2 p-7">
            <div className="flex flex-col items-center p-7">
              <img src={img1} alt="" className="w-full object-contain" />
            </div>
            <div className="mt-5">
              <h2 className=" text-[#fff] font-semibold uppercase">
                our mission
              </h2>
              <p className="text-[#B5E7F8]  font-semibold capitalize">
                To facilitate infrastructure, human, <br /> knowledge management
                and technology <br /> transfers for sustainable <br />
                economic development in Africa.
              </p>
            </div>
          </div>
          {/* div 1 */}
          <div className="flex w-full max-w-screen-lg md:w-1/2 p-7">
            <div className="flex flex-col items-center p-7">
              <img src={img2} alt="" className="w-full object-contain" />
            </div>
            <div className="mt-5">
              <h2 className=" text-[#fff] font-semibold uppercase">
                our vision
              </h2>
              <p className="text-[#B5E7F8]  font-semibold capitalize">
              To be a leading Provider of  Innovative <br /> development solutions across Africa.
              </p>
            </div>
          </div>
          {/* div 2 */}
          <div className="flex w-full max-w-screen-lg md:w-1/2 p-7">
            <div className="flex flex-col items-center p-7">
              <img src={img4} alt="" className="w-full object-contain" />
            </div>
            <div className="mt-5">
              <h2 className=" text-[#fff] font-semibold uppercase">
                our value
              </h2>
              <p className="text-[#B5E7F8]  font-semibold capitalize">
              We serve as compass for our  <br />actions and describe how we <br /> behave with our patners and clients.
              </p>
            </div>
          </div>
          {/* div 3 */}
          <div className="flex w-full max-w-screen-lg md:w-1/2 p-7">
            <div className="flex flex-col items-center p-7">
              <img src={img3} alt="" className="w-full object-contain" />
            </div>
            <div className="mt-5">
              <h2 className=" text-[#fff] font-semibold uppercase">
                our brand
              </h2>
              <p className="text-[#B5E7F8]  font-semibold capitalize">
              Our Brand is focussed on <br /> providing top notch solutions and <br /> services in a global Scale.
              </p>
            </div>
          </div>
          {/* div 4 */}
        </div>
      </div>
    </div>
  );
};

export default tech;
