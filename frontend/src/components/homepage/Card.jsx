import React from "react";
import { Link } from "react-router-dom";
const Card = ({ src, title, description }) => {
  return (
    <>
      <Link to="/workwithus">
        <div className="max-w-md overflow-hidden lg:hover:scale-110 transition duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] cursor-default">
          <div className="image">
            <img className="w-full h-48 object-cover" src={src} alt={title} />
          </div>
          <div className="px-4 py-4">
            <h2 className="font-bold text-lg mb-2 font-playfair">{title}</h2>
            <p className="text-gray-700 text-sm font-inter">{description}</p>
          </div>
          <div className="px-3 py-3">
            <button className="bg-shfOrange hover:bg-shfPurple text-white font-base py-2 px-4 rounded-full font-inter text-sm">
              Explore Now
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
