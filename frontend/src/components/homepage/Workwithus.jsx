import Card from "./Card";
import React from 'react';

const Workwithus = () => {
  return (
    <>
      <div className="mx-4 my-12 lg:mx-36">
        <div className="upperPart 2xl:">
          <div className="inline-flex gap-2">
            <p className="text-gray-700 text-md font-semibold font-montserrat">
              We Can Do Better
            </p>
            <hr className="w-[60px] border-t-1 border-gray-400 my-4 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold font-playfair">Work With Us</h2>
        </div>

        {/* CARDS */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center mt-8 gap-y-12 md:gap-y-0 md:gap-5 lg:gap-x-12">
          <Card
            src="/Images/homepage/card-2-1.jfif"
            title="Local Volunteers"
            description="Find The Nearest Hindu Community Project. Based on the Hindu Concept of Sewa-Selfless Service Hindu Organisations are giving back in many ways."
          />
          <Card
            src="/Images/homepage/card-2-2.jfif"
            title="Regional Projects"
            description="Scotland is home to many unique projects, From Environmental to Business and even Spiritual. Find yourself by losing yourself in the service of others."
          />
          <Card
            src="/Images/homepage/card-2-3.jfif"
            title="International Projects"
            description="There are Global Challenges and the Hindu Ethos of Dharma and Karma are calls to action, & To Make the World a Safe and Better place"
          />
        </div>
      </div>
    </>
  );
};

export default Workwithus;
