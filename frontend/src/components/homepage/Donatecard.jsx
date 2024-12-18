//DONATE  CARD HOMEPAGE
import { Link } from "react-router-dom";
import React from "react";

const Donatecard = () => {
  return (
    <div className="relative z-20 h-svh w-full">
      <div className="relative z-20 h-full w-full">
        <img
          className="w-full h-full object-cover saturate-100 mix-blend-difference brightness-150"
          src="/Images/homepage/home-page-banner.jpg"
          alt="Image"
        />

        {/* LEFT BOTTOM ASSET */}
        <div className="absolute z-30 bottom-0 left-0 hidden md:block">
          <img
            src="/Images/homepage/donate-left-bottom.png"
            alt="asset-1"
            className="h-96 brightness-200"

          />
        </div>

        {/* RIGHT BOTTOM ASSET */}
        <div className="absolute z-30 bottom-0 right-0 hidden md:block">
          <img
            src="/Images/homepage/donate-right-bottom.png"
            alt="asset-2"
            className="h-52"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute z-30 top-0 h-full lg:right-1/2  hidden lg:block">
          <img
            src="/Images/homepage/Overlay.png"
            alt="asset-2"
            className="h-full"
          />
        </div>

        {/* TEXT PART BOTTOM */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-center z-30">
          <div>
            <p className="text-bold font-montserrat">
              Join Us In The Journey!!
            </p>
            <h1 className="text-5xl font-bold mt-4 font-playfair">
              A Tale Of Scottish
              <br />Hindus In Scotland

            </h1>
            <p className="text-sm font-[400px] mt-4 font-inter" style={{ color: "rgba(238, 238, 238, 0.7)" }}>
              Welcome To The Official Website Of The Scottish Hindu Foundation{" "}
              <br />
              We Are Thrilled To Have You Here.
            </p>

            <div className="flex mt-8 justify-center">
              <Link to="/donate">
                <button className="bg-shfOrange font-light font-inter hover:bg-shfPurple transition duration-300 text-white py-2 px-10 mr-4 rounded-full">
                  Donate
                </button>
              </Link>

              <Link to="/report-an-issue">
                <button className="bg-transparent hover:bg-red-600 font-inter transition duration-300 text-white py-2 px-4 border-2 border-white rounded-full">
                  Report an Issue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* RING AT BOTTOM */}
      <div className="absolute z-10 -bottom-28 left-28 hidden lg:block ">
        <img
          src="/Images/homepage/donate-ring.png"
          alt="asset-3"
          style={{ height: "450px" }}
        />
      </div>
    </div>
  );
};

export default Donatecard;