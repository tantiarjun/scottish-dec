import React from 'react';
const Herosection = ({ imageUrl, heading, description }) => {
  return (
    <div className="relative w-full h-[250px] overflow-hidden">
      <img
        src={imageUrl}
        alt="HeroSection"
        className="w-full h-full object-cover object-center absolute top-0 left-0 
          saturate-100 mix-blend-difference"
      />

      {/* LEFT BOTTOM ASSET */}
      <div className="absolute z-30 bottom-0 left-0 hidden md:block">
        <img src="/Images/homepage/donate-left-bottom.png" alt="asset-1" className="h-48" />
      </div>

      {/* RIGHT BOTTOM ASSET */}
      <div className="absolute z-30 bottom-0 right-0 hidden md:block">
        <img src="/Images/homepage/donate-right-bottom.png" alt="asset-2" className="h-36" />
      </div>

      {/* OVERLAY */}
      <div className="absolute z-30 h-full lg:-left-32 xl:left-0  hidden lg:block">
        <img src="/Images/Herosection/Overlay.png" alt="asset-2" className="h-full" />
      </div>


      {/* TEXT */}
      <div className="absolute inset-y-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-1 text-nowrap font-playfair">{heading}</h1>
        <p className="text-sm text-white font-nunito underline">{description}</p>
      </div>
    </div>
  );
};

export default Herosection;