import React from "react";
import Logo from "../header/Logo";
import Subscribe from "./Subscribe";
import Footercontent from "./Footercontent";
import Watermark from "./Watermark";

const Footer = () => {
  return (
    <>
      <div className="bg-shfPurple w-full flex flex-col justify-center gap-y-8 sm:flex-row sm:justify-around py-24">
        <div className="flex justify-center sm:hidden lg:flex">
          <img
            className="h-14 rounded-md"
            src="\Images\logo-white-bg.jpg"
            alt="SHF-Logo"
          />
        </div>
        <div>
          <Footercontent />
        </div>
        <div className="space-y-0 sm:space-y-20 lg:space-y-0">
          <div className="sm:flex sm:justify-center hidden lg:hidden">
            <img
              className="h-14 rounded-md"
              src="\Images\logo-white-bg.jpg"
              alt="SHF-Logo"
            />
          </div>
          <div>
            <Subscribe />
          </div>
        </div>
      </div>
      <Watermark/>
    </>
  );
};

export default Footer;
