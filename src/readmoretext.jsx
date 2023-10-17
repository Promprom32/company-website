import React, { useState } from "react";

const ReadMoreText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const displayedText = showFullText ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div>
      <p className="custom-text text-[#2C2E2E] mt-3 ">
        {displayedText}
      </p>
      <div className="items-center">
        <button
          onClick={toggleText}
          className="bg-[#fff] text-[#3AC1EF] border-[#3AC1EF]  border-2 shadow-xl font-bold py-3 px-10 items-center mt-5 rounded-full"
        >
          {showFullText ? "See Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default ReadMoreText;
