import React from 'react';
import heroImage from '../assets/hero-image.png';
import alphaServices from '../assets/alpha-services.png';
const HeroImage = () => {
  return (
    <div className="relative">
      <img className="pl-40" src={heroImage} alt="Hero Image of a motorcycle" />
      <img
        className="absolute bottom-2 right-[-25px]"
        src={alphaServices}
        alt="Alpha Services"
      />
    </div>
  );
};

export default HeroImage;
