// ContactModal.js
import React from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
function ContactModal({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center h-screen">
        <div
          className="bg-white p-8 rounded-lg shadow-md relative"
          style={{ width: "50rem", height: "25rem" }}
        >
          <div className="flex justify-between">
            <div></div>
            <div className="bg-[#636768] text-[#fff] rounded-full">
              <button className="  hover:text-gray-800" onClick={onClose}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          {/* Add your contact form fields and logic here */}
          <div className="flex items-center">
            <div style={{ flex: 1 }}></div>
            <div className="flex justify-center" style={{ flex: 3 }}>
              <form>
                {/* Form fields */}
                <h2 className="text-2xl font-semibold mb-4 text-center capitalize">
                  get in touch
                </h2>
                <p className="text-center capitalize">
                  feel free to drop us a line
                </p>

                <div className="mb-4 flex flex-col">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="your full name"
                    className="bg-[#F3F3F3] outline-none w-96 h-10 px-3 border-none"
                  />
                  <input type="text" id="name" name="name" required />
                  <input type="text" id="name" name="name" required />
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
          <div className="absolute top-16 -left-20  bg-[#3AC1EF] p-2.5 shadow-md py-8 h-72 flex flex-col justify-between ">
            <div className="flex  items-center flex-col gap-4">
              <h3 className="text-center text-[#FFFFFF] text-2xl capitalize">
                contact us
              </h3>
              <div className="flex items-center gap-6">
                <div>
                  <SlLocationPin />
                </div>
                <div className="text-2l capitalize">
                  <p>4 macenta close, wuse ii, abuja</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <AiOutlineMail />
                </div>
                <div>
                  <p>info@barnksfortetech.com</p>
                </div>
              </div>
              <div className="flex  gap-6">
                <div>
                  <AiOutlineWhatsApp className="bg-white font-bold" />
                </div>
                <div className="items-center">
                  <p>09043712482</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <AiOutlineInstagram />
              </div>
              <div>
                <AiFillFacebook />
              </div>
              <div>
                <RiTwitterXLine />
              </div>
              <div>
                <AiFillLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
