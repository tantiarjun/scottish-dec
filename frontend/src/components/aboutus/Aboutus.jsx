import Footer from "../footer/Footer"
import Header from "../header/Header"
import React from 'react';
import Herosection from "../herosection/Herosection"
import Aboutbody1 from "./Aboutbody1"
import Aboutbody2 from "./Aboutbody2"


const Aboutus = () => {
  return (
    <div>

      <Header />
      <Herosection
        imageUrl="\Images\Herosection\aboutus.png"
        heading="About Us"
        description="Home / About Us"
      />
      <Aboutbody1 />
      <Aboutbody2 />
      <Footer />
    </div>
  )
}

export default Aboutus;