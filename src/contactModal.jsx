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
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
function ContactModal({ isOpen, onClose }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        // initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div>
                <div className="flex items-center justify-center h-screen">
                  <div
                    className="bg-white p-8 rounded-lg shadow-md relative"
                    style={{ width: "50rem", height: "32rem" }}
                  >
                    <div className="flex justify-between">
                      <div></div>
                      <div className="">
                        <button
                          className="bg-[#636768] text-[#fff]  w-12 h-12 rounded-full items-center  px-2 py-2 text-3xl"
                          onClick={onClose}
                        >
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
                          <h2 className="text-2xl font-semibold mb-4 text-center capitalize text-[#323434]">
                            get in touch
                          </h2>
                          <p className="text-center capitalize mb-4 text-black text-1xl font-bold">
                            feel free to drop us a line
                          </p>

                          <div className="mb-4 flex flex-col gap-4">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              placeholder="Your Full Name"
                              className="bg-[#F3F3F3] outline-none w-96 h-10 px-3 border-none"
                            />
                            <div className="flex space-x-4">
                              <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="bg-[#F3F3F3] outline-none w-45 h-10 px-3 border-none"
                              />
                              <input
                                type="text"
                                id="password"
                                name="password"
                                required
                                placeholder="Password"
                                className="bg-[#F3F3F3] outline-none w-40 h-10 px-3 border-none"
                              />
                            </div>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              placeholder="Subject"
                              className="bg-[#F3F3F3] outline-none w-96 h-10 px-3 border-none"
                            />
                            <textarea
                              name="name"
                              id="name"
                              cols="30"
                              rows="10"
                              className="bg-[#F3F3F3] outline-none w-96 h-16 px-3 border-none"
                              placeholder="Type Your Message Here"
                            ></textarea>
                          </div>
                          {/* Add more form fields as needed */}
                          <button
                            type="submit"
                            className=" w-96 bg-[#3AC1EF]  text-white text-center font-semibold py-2 px-4 rounded focus:outline-none"
                          >
                            Send
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
                            <SlLocationPin className="text-white text-2l" />
                          </div>
                          <div className="text-2l capitalize text-[#F3F3F3]">
                            <p>4 macenta close, wuse II, abuja</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-[#F3F3F3]">
                          <div>
                            <AiOutlineMail />
                          </div>
                          <div>
                            <p>barnksfortetech@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div>
                            <AiOutlineWhatsApp className="text-[#F3F3F3] font-bold" />
                          </div>
                          <div className="items-center text-2l text-[#F3F3F3]">
                            <p>07036889036</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center  gap-5">
                        <div className="text-white">
                          <AiOutlineInstagram />
                        </div>
                        <div className="text-white">
                          <AiFillFacebook />
                        </div>
                        <div className="text-white">
                          <RiTwitterXLine />
                        </div>
                        <div className="text-white">
                          <AiFillLinkedin />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ContactModal;
