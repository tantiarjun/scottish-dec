import React, { useEffect, useState } from 'react';

const Rotate = () => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setRotation(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="ml-4 h-12 flex items-center justify-center">
      <img
        src="/Images/logoSHF-transp.png"
        alt="Rotating"
        className="w-12 h-12"
      // style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
};

export default Rotate;
