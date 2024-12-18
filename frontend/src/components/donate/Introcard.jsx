import React from 'react';

const Introcard = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row bg-white rounded-lg overflow-hidden md:space-x-8">
        <div className="md:w-1/4 p-6">
          <h1 className="text-4xl font-bold mb-2 text-center sm:text-left text-gray-800 text-nowrap font-playfair">
            Small Efforts,
            <br />
            Big Changes
          </h1>
          <p className="text-gray-700 text-sm font-inter">
            We seek out world changers and difference-makers around the globe
            and their unique purpose.Together we can make a huge impact. Come
            join us in this journey and let’s make the world a better place.
          </p>
        </div>
        <div className="">
          <img
            className="w-full h-64 object-cover rounded-md md:h-full md:w-64"
            src="/Images/donate/card-1-1.png"
            alt="Card Image"
          />
        </div>
      </div>
    </>
  );
};

export default Introcard;
