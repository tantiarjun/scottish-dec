import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Story = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/homepagestory`);
        setContent(response.data);
      } catch (error) {
        console.error('Error fetching story content', error);
      }
    };
    fetchContent();
  }, []);

  if (!content) {
    return <div className='mt-10 flex justify-center'>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center my-12 mx-4 md:flex-row md:space-x-4 sm:mx-8 sm:my-32 sm:gap-x-8 md:mx-16 lg:mx-32">
      {/* Image Div */}
      <div className="relative w-72 h-72">
        {/* Base image */}
        <img
          src={content.image1_url}
          alt="Base"
          className="w-4/5 h-4/5 object-cover border-8 border-orange-500"
          style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
        />

        {/* Overlay image */}
        <img
          src={content.image2_url}
          alt="Overlay"
          className="absolute w-3/5 h-3/5 bottom-0 right-0 object-cover border-8 border-orange-500"
          style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="flex flex-col mt-7 md:mt-0 md:w-1/2 lg:w-2/3 justify-center">
        <hr className="w-[50px] border-t-1 border-shfOrange" />
        {/* sub-text */}
        <p className="text-gray-700 text-sm font-semibold font-montserrat">
          {content.sub_text}
        </p>
        {/* title */}
        <h1 className="text-3xl font-bold font-playfair">{content.title}</h1>
        {/* description */}
        <p className="text-gray-700 mt-3 font-montserrat text-sm">{content.description}</p>

        {/* Button */}
        <Link to="/about">
          <button className="bg-shfOrange hover:bg-shfPurple font-base text-white py-2 px-4 mt-4 focus:outline-none w-fit rounded-full">
            More About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Story;
