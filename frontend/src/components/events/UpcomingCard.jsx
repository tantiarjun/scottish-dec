/* eslint-disable react/prop-types */
import React from "react";

const UpcomingCard = ({ image, title, date }) => {
  return (
    <div className=" pb-5 font-inter relative max-w-md bg-orange-100 overflow-hidden lg:hover:scale-110 transition duration-300 rounded-md">
      <div>
        <img
          className="px-3 pt-5 h-80 w-full object-cover relative"
          src={image}
          alt={title}
        />
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <h3 className="text-lg leading-tight font-semibold text-black text-center">
          {title}
        </h3>
        <p className="mt-2 mb-3 text-gray-700 text-center text-sm">{date}</p>
      </div>
    </div>
  );
};

export default UpcomingCard;
