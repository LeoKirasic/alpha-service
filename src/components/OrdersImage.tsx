import React from 'react';
import ordersHeroImage from '../assets/orders-hero-image.png';
import alpha from '../assets/alpha-white.png';
const OrdersImage = () => {
  return (
    <div className="relative mt-36">
      <img
        className="bg-[#D0D0D0] rounded-lg"
        src={ordersHeroImage}
        alt="Hero Image of a motorcycle"
      />
      <img className="absolute top-7 left-7" src={alpha} alt="Alpha Services" />
    </div>
  );
};

export default OrdersImage;
