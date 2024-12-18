import React from 'react';

const Subscribe = () => {
  return (
    <div className="text-white flex-col w-full justify-center items-center text-center sm:text-left font-inter">
      <h2 className="text-lg font-normal text w-full font-playfair">Subscribe</h2>
      <div className="mt-2 w-full flex justify-center sm:justify-normal rounded-sm">
        <input className="text-black font-normal px-4 rounded-sm text-sm" type="text" placeholder="Enter Your Email"/>
        <button className="bg-shfOrange px-3 rounded-sm font-thin">Subscribe</button>
      </div>
      <p className="text-xs font-base mt-1 w-full text-gray-300">
        Your email is safe with us, We don&apos;t spam 
      </p>
    </div>
  );
};

export default Subscribe;

