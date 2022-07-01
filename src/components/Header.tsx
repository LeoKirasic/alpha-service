import React from 'react';
import alpha from '../assets/alpha.png';
import icon from '../assets/icon.png';

const Header = () => {
  return (
    <header className="flex mb-10">
      <img className="self-start" src={icon} alt="Icon" />
      <img className="self-start ml-4 pt-1" src={alpha} alt="Alpha" />
    </header>
  );
};

export default Header;
