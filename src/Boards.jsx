import React from 'react'
import Nav from "./nav";
import Footer from "./footer";
import Fruit from "./assets/fruits.png";
import Verxid from "./assets/ver.png";
import { Link } from 'react-router-dom';

const Boards = () => {
  return (
    <div>
      <Nav/>
      <div className="flex gap-3 justify-center">
        <div>
          <img src={Fruit} alt="fruit-logo" />
        </div>
        <div className="capitalize text-3xl text-[#2C2E2E] font-semibold">
          <h3>management staff</h3>
        </div>
      </div>
      <div>
        <div>
          <div className="flex  p-24 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-3xl uppercase text-[#2C2E2E] font-semibold">
                  adedayo bankole - md/ceo
                </h3>
                <p className="custom-text text-[#2C2E2E] mt-3 capitalize">
                  mr adedayo bankole is a prominent figure in nigeria, serving
                  as a managing director and founder of barnksforte technologies
                  limited. his impressive educational background includes an
                  M.sc in leadership and management and an HND in insuarance and
                  risk management.
                </p>
                <p className="custom-text mt-3 capitalize text-[#2C2E2E]">
                  {" "}
                  adedayo bankole has established himself as a multifaceted
                  professionals with diverse interest and expertise. one of his
                  notable achievement is founding barnksforte grou ltd, which
                  operates as a parent company overseeing fove subsidiary
                  companies including barnksforte technologies limited, this
                  entrepreneural endeavour showcases his vision and leadership
                  in business development and management
                </p>
              </div>
              <div className="items-center">
                <Link className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-10 items-center mt-5 rounded-full">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* mr adedayo */}
        <div>
          <div className="flex  p-24 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                  oluwatoyin o. ayo-ayotade - executive project manager / scrum
                  master
                </h3>
                <p className="custom-text text-[#2C2E2E] mt-3 capitalize">
                  oluwatoyin o. ayo-ayotade is a highle skilled professional in
                  the information technology industry, specializing in project
                  and product management, agile and scrum methologies, and
                  business development. her extensive experience encompasses the
                  successful management and delivery of various products and
                  projects, and business development initiatives.she is also
                  known for her expertise in information, data visualization,
                  storytelling and presentation.
                </p>
                <p className="custom-text mt-3 capitalize text-[#2C2E2E]">
                  {" "}
                  currently serving as the executive project manager at
                  barnksforte technologies limited, oluwatoyin is responsible
                  for overseeing software project delivery,product management,
                  and leading cross functional technical teams. she assumes this
                  role in 2023.
                </p>
              </div>
              <div className="items-center">
                <Link className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-10 items-center mt-5 rounded-full">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* mrs toyin */}
        <div>
          <div className="flex  p-24 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                  olubukola kolade - chief financial officer
                </h3>
                <p className="custom-text text-[#2C2E2E] mt-3 capitalize">
                  oluwatoyin o. ayo-ayotade is a highle skilled professional in
                  the information technology industry, specializing in project
                  and product management, agile and scrum methologies, and
                  business development. her extensive experience encompasses the
                  successful management and delivery of various products and
                  projects, and business development initiatives.she is also
                  known for her expertise in information, data visualization,
                  storytelling and presentation.
                </p>
                <p className="custom-text mt-3 capitalize text-[#2C2E2E]">
                  {" "}
                  currently serving as the executive project manager at
                  barnksforte technologies limited, oluwatoyin is responsible
                  for overseeing software project delivery,product management,
                  and leading cross functional technical teams. she assumes this
                  role in 2023.
                </p>
              </div>
              <div className="items-center">
                <Link className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-10 items-center mt-5 rounded-full">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* bukola */}
        <div>
          <div className="flex  p-24 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                  benedicta kentebe - human resource director
                </h3>
                <p className="custom-text text-[#2C2E2E] mt-3 capitalize">
                  oluwatoyin o. ayo-ayotade is a highle skilled professional in
                  the information technology industry, specializing in project
                  and product management, agile and scrum methologies, and
                  business development. her extensive experience encompasses the
                  successful management and delivery of various products and
                  projects, and business development initiatives.she is also
                  known for her expertise in information, data visualization,
                  storytelling and presentation.
                </p>
                <p className="custom-text mt-3 capitalize text-[#2C2E2E]">
                  {" "}
                  currently serving as the executive project manager at
                  barnksforte technologies limited, oluwatoyin is responsible
                  for overseeing software project delivery,product management,
                  and leading cross functional technical teams. she assumes this
                  role in 2023.
                </p>
              </div>
              <div className="items-center">
                <Link className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-10 items-center mt-5 rounded-full">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* kentebe */}
        <div>
          <div className="flex  p-24 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                  sandra golen - director legal/company secretary
                </h3>
                <p className="custom-text text-[#2C2E2E] mt-3 capitalize">
                  oluwatoyin o. ayo-ayotade is a highle skilled professional in
                  the information technology industry, specializing in project
                  and product management, agile and scrum methologies, and
                  business development. her extensive experience encompasses the
                  successful management and delivery of various products and
                  projects, and business development initiatives.she is also
                  known for her expertise in information, data visualization,
                  storytelling and presentation.
                </p>
                <p className="custom-text mt-3 capitalize text-[#2C2E2E]">
                  {" "}
                  currently serving as the executive project manager at
                  barnksforte technologies limited, oluwatoyin is responsible
                  for overseeing software project delivery,product management,
                  and leading cross functional technical teams. she assumes this
                  role in 2023.
                </p>
              </div>
              <div className="items-center">
                <Link className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-10 items-center mt-5 rounded-full">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* sandra golen */}
        <div>
          <div className="flex  p-24 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                  demir selmanovic - chief technical officer
                </h3>
                <p className="custom-text text-[#2C2E2E] mt-3 capitalize">
                  oluwatoyin o. ayo-ayotade is a highle skilled professional in
                  the information technology industry, specializing in project
                  and product management, agile and scrum methologies, and
                  business development. her extensive experience encompasses the
                  successful management and delivery of various products and
                  projects, and business development initiatives.she is also
                  known for her expertise in information, data visualization,
                  storytelling and presentation.
                </p>
                <p className="custom-text mt-3 capitalize text-[#2C2E2E]">
                  {" "}
                  currently serving as the executive project manager at
                  barnksforte technologies limited, oluwatoyin is responsible
                  for overseeing software project delivery,product management,
                  and leading cross functional technical teams. she assumes this
                  role in 2023.
                </p>
              </div>
              <div className="items-center">
                <Link className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-5xl font-bold py-3 px-10 items-center mt-5 rounded-full">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* demir */}
      </div>
      <Footer/>
    </div>
  )
}

export default Boards
