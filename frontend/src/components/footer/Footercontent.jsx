import React from "react";
import { Link } from "react-router-dom";

const Footercontent = () => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center text-center sm:text-left space-x-0 lg:space-x-4 space-y-4 sm:space-y-0">
        
        <div className="column-1">
          <h2 className="text-white text-base font-normal font-playfair">Quick Links</h2>

          <ul className="text-gray-300 nav-links font-extralight text-sm pt-2 space-y-2 font-inter ">
            <li className="lg:hover:scale-110 transition duration-100 lg:hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="lg:hover:scale-110 transition duration-100  lg:hover:text-white">
              <Link to="/about">About Us</Link>
            </li>
            <li className="lg:hover:scale-110 transition duration-100 lg:hover:text-white">
              <Link to="/events">Events</Link>
            </li>
            <li className="lg:hover:scale-110 transition duration-100 lg:hover:text-white">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="lg:hover:scale-110 transition  duration-100 lg:hover:text-white">
              <Link to="/contactus">Contact</Link>
            </li>
            <li className="lg:hover:scale-110 transition duration-100 lg:hover:text-white">
              <Link to="/workwithus">Work With Us</Link>
            </li>
          </ul>
        </div>

        <div className="column-2 pl-0 sm:pl-4 lg:pl-0">
          <h2 className="text-white text-base font-normal text-nowrap font-playfair">
            Get In Touch
          </h2>
          <ul className="text-gray-300 nav-links font-extralight text-sm pt-2 space-y-2 font-inter">
            <li className="md:hover:scale-110 transition duration-100 lg:hover:text-white">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="md:hover:scale-110 transition duration-100 lg:hover:text-white">
              <Link to="/">Our Services</Link>
            </li>
          </ul>
        </div>

        <div className="column-3 pt-0 sm:pt-3 lg:pt-0">
          <h2 className="text-white text-base font-normal font-playfair">Address</h2>
          <p className="text-gray-300 font-extralight text-sm pt-2 font-inter">
            2464 Royal Ln, Mesa,
            <br />
            Scotland 4567842
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footercontent;
