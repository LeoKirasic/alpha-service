import React from 'react';
import EmailForm from './EmailForm';
import Header from './Header';
import HeroImage from './HeroImage';

const LoginScreen = () => {
  return (
    <div className="flex pt-20">
      <div className="pl-40 pt-40">
        <Header></Header>
        <p className="text-[#737373] font-bold text-lg">Welcome to</p>
        <p className="font-bold text-2xl mb-8">alpha service</p>
        <EmailForm></EmailForm>
      </div>
      <HeroImage></HeroImage>
    </div>
  );
};

export default LoginScreen;
