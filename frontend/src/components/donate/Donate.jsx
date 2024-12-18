import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Introcard from "./Introcard";
import Donationscards from "./Donationscards";
import Bankdetails from "./Bankdetails";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Donate = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/donations`);
        const reversedDonations = response.data.reverse();
        setDonations(reversedDonations);
      } catch (error) {
        console.error("Error fetching donation data:", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <>
      <Header />

      <Herosection
        imageUrl="\Images\Herosection\donation.png"
        heading="Donate"
        description="Home/ Donate"
      />

      {/* Body Start */}
      {/* part1 */}
      <div className="flex items-center justify-center my-5 md:my-20 w-full">
        <Introcard />
      </div>

      {/* part2 */}
      <div className="mt-16 mb-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-shfOrange my-6 underline md:no-underline font-playfair">
          Make An Impact
        </h1>
        {/* Cards */}
        <div className="mx-0 lg:mx-20">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-12 sm:px-4 md:px-20">
            {donations.map((donation) => (
              <Donationscards
                key={donation.id}
                src={donation.image_url}
                title={donation.title}
                description={donation.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* part3 */}
      <div className="Payment px-4 mt-16 mb-8 md:px-20 w-full">
        <Bankdetails />
      </div>

      {/* Body End */}
      <Footer />
    </>
  );
};

export default Donate;
