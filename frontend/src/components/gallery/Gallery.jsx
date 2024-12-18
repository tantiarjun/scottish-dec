import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import MasonryGallery from "./MasonryGallery";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="\Images\Herosection\gallery.png"
        heading="Gallery"
        description="Home / Gallery"
      />
      <div className="textpart my-8 md:my-16 mx-2 sm:mx-8 xl:mx-44">
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">Sneak Peek Into</p>
          <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
        </div>
        <h2 className="text-3xl font-bold font-playfair">Our Gallery</h2>
      </div>
      <div className="mx-2 sm:mx-12 xl:mx-44 xl:mb-28">
        <MasonryGallery />
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
