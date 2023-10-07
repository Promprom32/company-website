import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
const testimony = ({ testimonials }) => {
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold text-center p-2">
        {testimonials[currentIndex]}
      </p>

      <div className="flex justify-between">
        <div>
          <button
            className="absolute text-2xl left-2 transform -translate-y-1/2 text-white py-2 px-4 w-16 h-16 border-2 border-black bg-[#D6D6D6]"
            onClick={prevTestimonial}
          >
            <GrPrevious />
          </button>
        </div>
        <div>
          <button
            className="absolute text-2xl right-2 transform -translate-y-1/2 text-white py-2 px-4 rounded-l bg-[#D6D6D6]"
            onClick={nextTestimonial}
          >
            <GrNext />
          </button>
        </div>
      </div>
      <div className="flex mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentIndex === index ? 'bg-[#3AC1EF]' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default testimony;
