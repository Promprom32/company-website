import React, { useState } from "react";
import BGL from "./assets/bgl-logo.png";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../src/index.css";
import ContactModal from "./contactModal";
import Sidebar from "./sidebar";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  const handleMenuItemClick = (menuItem, isDropdown) => {
    setActiveMenuItem(menuItem);
    if (isDropdown) {
      // Toggle the active dropdown
      setActiveDropdown(activeDropdown === menuItem ? null : menuItem);
    } else {
      // Close the active dropdown when a non-dropdown menu item is clicked
      setActiveDropdown(null);
    }
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

  return (
    <div>
      <div>
        <div
          className={`fixed top-0 h-full bg-white z-50 w-64 transform mt-10 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
          style={{ zIndex: 51 }}
        >
          <div className="flex justify-end p-2 mt-5">
            <button onClick={toggleSidebar}>
              <GrClose className="text-2xl" />
            </button>
          </div>

          <div className="p-4 ml-3 text-[#717576] relative">
            <div className="relative">
              <Link
                to="/"
                className={`sidebar-menu-item  px-2 py-1 ${
                  activeMenuItem === "Home" ? "text-[#3B99B7]" : ""
                }`}
                onClick={() => handleMenuItemClick("Home")}
              >
                Home
              </Link>
            </div>
            <Link
              to="/about"
              className="block py-2 mt-4"
            >
              <span className="sidebar-menu-item">About Us</span>
            </Link>

            {/* Company dropdown */}
            <div className="relative">
              <span
                className={`cursor-pointer px-2 py-1 rounded sidebar-menu-item ${
                  activeDropdown === "Company" ? "text-[#3B99B7]" : ""
                }`}
                onClick={() =>
                  handleMenuItemClick("Company", true) // Pass true for dropdown
                }
              >
                Company{" "}
                <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
              </span>
              {activeDropdown === "Company" && (
                <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3AC1EF] text-white border rounded-lg w-48 items-center">
                  <Link
                    to="/company/management"
                    className={`block px-4 py-2 border-b ${
                      activeMenuItem === "Management Staff"
                        ? "text-[#267F93]"
                        : ""
                    }`}
                    onClick={() => handleMenuItemClick("Management Staff")}
                  >
                    Management Staff
                  </Link>
                  <Link
                    to="/company/boards"
                    className={` block px-4 py-2 border-b ${
                      activeMenuItem === "Board" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Board")}
                  >
                    Board
                  </Link>
                  <Link
                    to="/company/roles"
                    className={` block px-4 py-2  border-b ${
                      activeMenuItem === "Teams" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Teams")}
                  >
                    Teams
                  </Link>
                  <Link
                    to="/company/events"
                    className={` block px-4 py-2 ${
                      activeMenuItem === "Events" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Events")}
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>
            {/* Career dropdown */}
            <div className="relative">
              <span
                className={`cursor-pointer px-2 py-1 rounded sidebar-menu-item ${
                  activeDropdown === "Careers" ? "text-[#3B99B7]" : ""
                }`}
                onClick={() =>
                  handleMenuItemClick("Careers", true) // Pass true for dropdown
                }
              >
                Careers{" "}
                <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
              </span>
              {activeDropdown === "Careers" && (
                <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3AC1EF] text-white border rounded-lg w-48 items-center">
                  <Link
                    to="/career/career"
                    className={`block px-4 py-2 border-b ${
                      activeMenuItem === "Career" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Career")}
                  >
                    Career
                  </Link>
                  <Link
                    to="/position"
                    className={` block px-4 py-2  ${
                      activeMenuItem === "Our Positions" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Our Positions")}
                  >
                    Our Positions
                  </Link>
                </div>
              )}
            </div>
            {/* Services dropdown */}
            <div className="relative">
              <span
                className={`cursor-pointer px-2 py-1 rounded sidebar-menu-item ${
                  activeDropdown === "Services" ? "text-[#3B99B7]" : ""
                }`}
                onClick={() =>
                  handleMenuItemClick("Services", true) // Pass true for dropdown
                }
              >
                Services{" "}
                <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
              </span>
              {activeDropdown === "Services" && (
                <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3AC1EF] text-white border rounded w-48 items-center">
                  <Link
                    to="/services/priority"
                    className={`block px-4 py-2 border-b ${
                      activeMenuItem === "What We Do" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("What We Do")}
                  >
                    What We Do
                  </Link>
                  <Link
                    to="/services/enterprise"
                    className={` block px-4 py-2 border-b ${
                      activeMenuItem === "Enterprise System" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Enterprise System")}
                  >
                    Enterprise System
                  </Link>
                  <Link
                    to="/services/products"
                    className={` block px-4 py-2 border-b ${
                      activeMenuItem === "Our Products" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Our Products")}
                  >
                    Our Products
                  </Link>
                  <Link
                    to="/services/projects"
                    className={` block px-4 py-2 ${
                      activeMenuItem === "Our Projects" ? "text-[#267F93]" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Our Projects")}
                  >
                    Our Projects
                  </Link>
                </div>
              )}
            </div>
            <button
              className="bg-[#3B99B7] text-white font-bold py-2 px-6 rounded mt-4"
              onClick={openContactModal}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          className="fixed top-0 left-0 right-0 z-50 pl-10 w-full bg-white items-center flex justify-between p-4 "
          style={{ zIndex: 9999, height: "60px" }}
        >
          <div className="flex-shrink-0">
            <img
              src={BGL}
              alt="barnksforte"
              className="h-16 w-50 object-contain"
            />
          </div>
          <div
            className={`hidden md:flex space-x-9 justify-center  text-[#717576]  ${
              isSidebarOpen ? "md:hidden" : ""
            }`}
          >
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`${activeMenuItem === "Home" ? "text-[#3AC1EF]" : ""}`}
                onClick={() => handleMenuItemClick("Home")}
              >
                Home
              </Link>
              <Link to="/about" className={`${activeMenuItem === "About Us" ? "text-[#3AC1EF]" : ""}`} onClick={() => handleMenuItemClick("About Us")}>
                About Us
              </Link>
              <div className="relative">
                <span
                  className={`cursor-pointer px-2 py-1 rounded ${
                    activeDropdown === "Company" ? "text-[#3AC1EF]" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Company", true)}
                >
                  Company{" "}
                  <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
                </span>
                {activeDropdown === "Company" && (
                  <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3AC1EF] text-white border rounded-lg w-48 items-center">
                    <Link to="/company/boards" className={` block px-4 py-2 border-b  ${activeMenuItem === "Board" ? "text-[#2783A1]" : ""}`} onClick={() => handleMenuItemClick("Management Staff")}>
                      Board
                    </Link>
                    <Link to="/company/management" className={` block px-4 py-2 border-b  ${activeMenuItem === "Management" ? "text-[#2783A1]" : ""}`} onClick={() => handleMenuItemClick("Board")}>
                      Management
                    </Link>
                    <Link to="/company/roles" className={` block px-4 py-2  border-b ${activeMenuItem === "Team" ? "text-[#2783A1]" : ""}`} onClick={() => handleMenuItemClick("Teams")}>
                      Team
                    </Link>
                    <Link to="/company/events" className={` block px-4 py-2 ${activeMenuItem === "Events" ? "text-[#2783A1]" : ""}`} onClick={() => handleMenuItemClick("Events")}>
                      Events
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="relative text-2l">
              <span
                className={`cursor-pointer px-2 py-1 rounded ${
                  activeDropdown === "Careers" ? "text-[#3AC1EF]" : ""
                }`}
                onClick={() => handleMenuItemClick("Careers", true)}
              >
                Careers{" "}
                <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
              </span>
              {activeDropdown === "Careers" && (
                <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3AC1EF] text-white border rounded-lg w-48 items-center">
                  <Link to="/career/career" className={` block px-4 py-2 border-b ${activeMenuItem === "Career" ? "text-[#267F93]" : ""}`} onClick={() => handleMenuItemClick("Career")}>
                    Career
                  </Link>
                  <Link to="/position" className={` block px-4 py-2  ${activeMenuItem === "Our Positions" ? "text-[#267F93]" : ""}`} onClick={() => handleMenuItemClick("Our Positions")}>
                    Our Positions
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <span
                className={`cursor-pointer px-2 py-1 rounded ${
                  activeDropdown === "Services" ? "text-[#3AC1EF]" : ""
                }`}
                onClick={() => handleMenuItemClick("Services", true)}
              >
                Services{" "}
                <RiArrowDropDownLine className="inline-block ml-0 text-gray-500" />
              </span>
              {activeDropdown === "Services" && (
                <div className="absolute z-10 left-0 mt-2 space-y-2 bg-[#3AC1EF] text-white border rounded w-48 items-center">
                  <Link to="/services/priority" className={` block px-4 py-2 border-b ${activeMenuItem === "What We Do" ? "text-[#267F93]" : ""}`} onClick={() => handleMenuItemClick("What We Do")}>
                    What We Do
                  </Link>
                  <Link to="/services/enterprise" className={` block px-4 py-2 border-b ${activeMenuItem === "Enterprise System" ? "text-[#3AC1EF]" : ""}`} onClick={() => handleMenuItemClick("Enterprise System")}>
                    Enterprise System
                  </Link>
                  <Link to="/services/products" className={` block px-4 py-2 border-b ${activeMenuItem === "Our Products" ? "text-[#3AC1EF]" : ""}`} onClick={() => handleMenuItemClick("Our Products")}>
                    Our Products
                  </Link>
                  <Link to="/services/projects" className={` block px-4 py-2 ${activeMenuItem === "Our Projects" ? "text-[#3AC1EF" : ""}`} onClick={() => handleMenuItemClick("Our Projects")}>
                    Our Projects
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className={`pr-10 mr-4 hidden md:block  ${isSidebarOpen ? "block" : "hidden"}`}>
            <button className="bg-[#2C2E2E] text-[#fff] shadow-2xl font-bold py-2 px-6 rounded" onClick={openContactModal}>
              Contact Us
            </button>
          </div>
          <div className={`md:hidden mt-2 text-3xl cursor-pointer`} onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </div>
          <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
