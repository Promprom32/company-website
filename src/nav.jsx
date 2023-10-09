import React, { useState } from "react";
import BGL from "./assets/bgl-logo.png";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../src/index.css";
import ContactModal from "./contactModal";
const nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(""); // State to track active menu item
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // Function to handle clicking on menu items
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };
  // Define state variables for each dropdown
  const [careerDropdownOpen, setCareerDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  return (
    <div>
      <div>
        {/* Sidebar for small screens */}
        <div
          className={`fixed top-0 h-full bg-white z-50 w-64 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
          style={{ zIndex: 51 }}
        >
          {/* Close button */}
          <div className="flex justify-end p-2 mt-5">
            <button onClick={toggleSidebar}>
              <GrClose className="text-2xl" />
            </button>
          </div>

          <div className="p-4 ml-3 text-[#717576]">
            {/* <div className="text-center font-bold mb-4">
          </div> */}
            <Link to="/" className="block py-2 mt-10 ">
              <span className="sidebar-menu-item">Home</span>
            </Link>
            <Link to="/about" className="block py-2 mt-4">
              <span className="sidebar-menu-item">About Us</span>
            </Link>
            <Link to="/services" className="block py-2 mt-4 ">
              <span className="sidebar-menu-item">Services</span>
            </Link>
            <Link to="/company" className="block py-2 mt-4 ">
              <span className="sidebar-menu-item">Company</span>
            </Link>
            <Link to="/team" className="block py-2 mt-4 ">
              <span className="sidebar-menu-item">Team</span>
            </Link>
            <button className="bg-[#267F93] text-white font-bold py-2 px-6 rounded mt-4">
              Contact Us
            </button>
          </div>
        </div>

        {/* Main navigation bar */}
        <div
          className="fixed top-0 left-0 right-0 z-50 pl-10 w-full bg-white items-center flex justify-between p-4 "
          style={{ zIndex: 50 }}
        >
          <div className="flex-shrink-0">
            <img src={BGL} alt="barnksforte" className="h-12" />
          </div>
          <div
            className={`hidden md:flex space-x-9 justify-center font-semibold text-[#717576] ${
              isSidebarOpen ? "md:hidden" : ""
            }`}
          >
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`${
                  activeMenuItem === "Home" ? "text-[#267F93]" : ""
                }`}
                onClick={() => handleMenuItemClick("Home")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  activeMenuItem === "About Us" ? "text-[#267F93]" : ""
                }`}
                onClick={() => handleMenuItemClick("About Us")}
              >
                About Us
              </Link>
              {/* company logic */}
              <div className="relative">
                <span
                  className={`cursor-pointer px-2 py-1 rounded ${
                    companyDropdownOpen ? "" : ""
                  }`}
                  onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                >
                  Company{" "}
                  <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
                </span>
                {companyDropdownOpen && (
                  <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3ABFED] text-white border rounded-lg w-48 items-center">
                    <div className="flex flex-col items-center">
                      <Link
                        to="/management"
                        className={` block px-4 py-2 border-b  ${
                          activeMenuItem === "management"
                            ? "text-[#267F93]"
                            : ""
                        }`}
                        onClick={() => handleMenuItemClick("management")}
                      >
                        Management Staff
                      </Link>
                      <Link
                        to="/boards"
                        className={` block px-4 py-2 border-b  ${
                          activeMenuItem === "teams" ? "text-[#267F93]" : ""
                        }`}
                        onClick={() => handleMenuItemClick("boards")}
                      >
                        Board
                      </Link>

                      <Link
                        to="/roles"
                        className={` block px-4 py-2  border-b ${
                          activeMenuItem === "teams" ? "text-[#267F93]" : ""
                        }`}
                        onClick={() => handleMenuItemClick("Teams")}
                      >
                        Teams
                      </Link>
                      <Link
                        to="/events"
                        className={` block px-4 py-2 ${
                          activeMenuItem === "events" ? "text-[#267F93]" : ""
                        }`}
                        onClick={() => handleMenuItemClick("events")}
                      >
                        Events
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <span
                className={`cursor-pointer px-2 py-1 rounded ${
                  careerDropdownOpen ? "" : ""
                }`}
                onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
              >
                Careers{" "}
                <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
              </span>
              {careerDropdownOpen && (
                <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3ABFED] text-white border rounded-lg w-48 items-center">
                  <div className="flex flex-col items-center">
                    <Link
                      to="/career"
                      className={` block px-4 py-2 border-b ${
                        activeMenuItem === "career" ? "text-[#267F93]" : ""
                      }`}
                      onClick={() => handleMenuItemClick("career")}
                    >
                      Career
                    </Link>
                    <Link
                      to="/position"
                      className={` block px-4 py-2  ${
                        activeMenuItem === "positions" ? "text-[#267F93]" : ""
                      }`}
                      onClick={() => handleMenuItemClick("positions")}
                    >
                      Our Positions
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Define similar logic for other menu items */}
            <div className="relative">
              <span
                className={`cursor-pointer px-2 py-1 rounded ${
                  servicesDropdownOpen ? "" : ""
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services{" "}
                <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
              </span>
              {servicesDropdownOpen && (
                <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3ABFED] text-white border rounded w-48 items-center">
                  <div className="flex flex-col items-center">
                    <Link
                      to="/priority"
                      className={` block px-4 py-2 border-b ${
                        activeMenuItem === "priority" ? "text-[#267F93]" : ""
                      }`}
                      onClick={() => handleMenuItemClick("priority")}
                    >
                      What We Do
                    </Link>

                    <Link
                      to="/enterprise"
                      className={` block px-4 py-2 border-b ${
                        activeMenuItem === "enterprise system"
                          ? "text-[#267F93]"
                          : ""
                      }`}
                      onClick={() => handleMenuItemClick("Enterprise System")}
                    >
                      Enterprise System
                    </Link>
                    <Link
                      to="/products"
                      className={` block px-4 py-2 border-b ${
                        activeMenuItem === "products" ? "text-[#267F93]" : ""
                      }`}
                      onClick={() => handleMenuItemClick("products")}
                    >
                      Our Products
                    </Link>
                    <Link
                      to="/projects"
                      className={` block px-4 py-2  ${
                        activeMenuItem === "projects" ? "text-[#267F93]" : ""
                      }`}
                      onClick={() => handleMenuItemClick("projects")}
                    >
                      Our Projects
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* "Contact Us" button visible only on large screens */}
          <div
            className={`pr-10 mr-4 hidden md:block  ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            <div
              className={`pr-10 mr-4 hidden md:block ${
                isSidebarOpen ? "block" : "hidden"
              }`}
            >
              <button
                className="bg-[#2C2E2E] text-[#fff] shadow-2xl font-bold py-2 px-6 rounded"
                onClick={openContactModal}
              >
                Contact Us
              </button>
            </div>
          </div>
          {/* Mobile view div */}
          <div
            className={`md:hidden mt-2 text-3xl cursor-pointer`}
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu />
          </div>
          {/* Render the ContactModal */}
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={closeContactModal}
          />
        </div>
      </div>
    </div>
  );
};

export default nav;
