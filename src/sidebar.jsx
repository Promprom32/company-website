// ContactModal.js
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function ContactModal({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center h-screen">
        <div
          className="bg-white p-8 rounded-lg shadow-md "
          style={{ width: "50rem" }}
        >
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            </div>
            <div className="bg-[#636768] text-[#fff] rounded-full">
              <button className="  hover:text-gray-800" onClick={onClose}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          {/* Add your contact form fields and logic here */}
          <form>
            {/* Form fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input type="text" id="name" name="name" required />
            </div>
            {/* Add more form fields as needed */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
