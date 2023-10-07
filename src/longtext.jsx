import React, { useState } from "react";
import { Link } from "react-router-dom";

function LongText({ text, maxLength }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = showFullText ? text : text.slice(0, maxLength);

  return (
    <div>
      <div className="p-10 mb-5">
        <h3 className="text-[#3AC1EF] font-bold text-2xl">Verxid</h3>
        <h2 className="text-[#71849B] italic mt-2">
          Touchless Biometric System
        </h2>
        <p className="custom-text text-[#71849B] mt-2">
          {truncatedText}{" "}
          {text.length > maxLength && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleText();
              }}
              className="text-[#3AC1EF] font-semibold cursor-pointer"
            >
              {showFullText ? "See Less" : "Read More"}
            </a>
          )}
        </p>
      </div>
    </div>
  );
}

export default LongText;
