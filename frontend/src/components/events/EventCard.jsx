import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = ({ image, title, time, date, location, onClick, status }) => {
  return (
    <div onClick={onClick} className=" rounded-md mt-5 max-w-md bg-orange-100 overflow-hidden md:hover:scale-110 transition duration-300  cursor-pointer">
      <div className="relative w-full h-72 overflow-hidden ">
        <img
          className="absolute bottom-0 w-full p-3 h-full object-cover object-top"
          src={image}
          alt={title}
        />
        <span className="absolute top-6 right-3 bg-white text-green-500 text-xs font-semibold px-3 py-1 m-2 rounded">
          {status}
        </span>
      </div>
      <div className="p-2 flex flex-col justify-center">
        <h3 className="text-lg leading-tight font-medium text-black text-center">
          {title}
        </h3>
        <p className="mt-2 text-gray-700 text-center " style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="mr-2 mb-1 text-3xl font-thin" style={{ letterSpacing: '-0.2em' }}>---</span>
          {time} | {date}
        </p>

        <div className="text-center flex items-center justify-center">
          {/* <FaMapMarkerAlt className="mr-1 text-1xl" style={{ color: "white" }} /> */}
          <img src="/Images/location.svg" style={{ width: "15px", marginTop: "10px", marginRight: "5px" }} />
          <p className="mt-2 text-md text-gray-700 ">
            {location}
          </p>


        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="px-5 py-2 my-4  rounded-full bg-shfOrange text-white text-sm md:hover:bg-shfPurple">
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventCard;