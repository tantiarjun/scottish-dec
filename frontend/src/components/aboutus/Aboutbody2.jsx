import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Aboutbody2 = () => {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/aboutus2`);
        setAboutContent(response.data);
      } catch (error) {
        console.error("Error fetching about us content", error);
      }
    };
    fetchAboutContent();
  }, []);

  if (!aboutContent) {
    return <div className="mt-10">Loading...</div>;
  }

  const itemData = [
    {
      img: aboutContent.image1_url,
      title: "Image 1",
      aspectRatio: "56.25%",
      colSpan: "col-span-2",
    },
    {
      img: aboutContent.image2_url,
      title: "Image 2",
      aspectRatio: "66.67%",
      colSpan: "col-span-1",
    },
    {
      img: aboutContent.image3_url,
      title: "Image 3",
      aspectRatio: "66.67%",
      colSpan: "col-span-1",
    },
    {
      img: aboutContent.image4_url,
      title: "Image 4",
      aspectRatio: "56.25%",
      colSpan: "col-span-2",
    },
  ];

  return (
    <div
      className="flex flex-col-reverse items-center justify-center md:flex-row md:space-x-4 mt-8
    sm:mx-4 sm:gap-x-8
    md:mx-10 md:my-16
    xl:mx-28"
    >
      <div className="flex flex-col p-4 md:p-6 space-y-3 md:w-1/2">
        <div className="inline-flex gap-2 items-center">
          <p className="text-gray-800 text-md font-semibold font-montserrat">
            {aboutContent.sub_text}
          </p>
          <hr className="w-[60px] border-t-1 border-gray-300 my-4" />
        </div>

        <h1 className="text-3xl font-bold font-playfair">{aboutContent.title}</h1>
        <p className="text-gray-700 font-inter text-base">{aboutContent.description}</p>
        <Link to="/contactus">
          <button className="bg-shfOrange hover:bg-shfPurple text-white font-base py-3 mt-2 px-6 w-fit rounded-full">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="w-full md:w-2/5">
        <div
          className="grid grid-cols-3 gap-2"
          style={{
            borderColor: "rgba(251, 191, 36, 0.3)",
            background: "rgba(251, 191, 36, 0.3)",
            padding: "10px",
          }}
        >
          {itemData.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${item.colSpan}`}
              style={{ paddingBottom: item.aspectRatio }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutbody2;
