import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutUs = () => {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/aboutus1`);
        setAboutContent(response.data);
      } catch (error) {
        console.error("Error fetching about us content", error);
      }
    };
    fetchAboutContent();
  }, []);

  if (!aboutContent) {
    return <div className="mt-10 flex justify-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center my-12 mx-4 md:flex-row md:space-x-4 sm:mx-8 sm:my-32 sm:gap-x-8 md:mx-16 lg:mx-32">
      {/* Image Div */}
      <div className="relative w-72 h-72">
        {/* Base image */}
        <img
          src={aboutContent.image1_url}
          alt="Base"
          className="w-4/5 h-4/5 object-cover border-8 border-orange-500"
          style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
        />

        {/* Overlay image */}
        <img
          src={aboutContent.image2_url}
          alt="Overlay"
          className="absolute w-3/5 h-3/5 bottom-0 right-0 object-cover border-8 border-orange-500"
          style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="flex flex-col mt-7 md:mt-0 md:w-1/2 lg:w-2/3 justify-center">
        {/* sub-text */}
        <div className="inline-flex gap-2 items-center">
          <p className="text-gray-800 text-md font-semibold font-montserrat">
            {aboutContent.sub_text}
          </p>
          <hr className="w-[60px] border-t-1 border-gray-300 my-4" />
        </div>

        {/* title */}
        <h1 className="text-3xl font-bold font-playfair">{aboutContent.title}</h1>
        <p className="text-1xl  font-Inter mt-3" style={{ fontWeight: "600" }}>Welcome To The Official Website Of The Scottish Hindu Foundation!  We are <br></br>Thrilled To Have You Here.</p>
        {/* description */}
        <p className="text-gray-700 mt-3 font-inter text-base">{aboutContent.description}</p>

      </div>

    </div >
  );
};

export default AboutUs;
