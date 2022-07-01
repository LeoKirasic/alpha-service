import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EmailForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const validEmail = (input: string) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };
  let navigate = useNavigate();

  const emailFormClickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (validEmail(emailInput)) {
      navigate('/orders');
    } else {
      alert('err');
    }
  };

  const handleEmailInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setEmailInput(target.value);
    console.log(emailInput);
  };

  return (
    <form className="flex flex-col">
      <label className="text-[#737373] text-xs mb-2">Email Address</label>
      <input
        className="bg-transparent border-[#D0D0D0] border-solid border-[1px] w-[295px] h-[45px] rounded-lg focus:outline-none invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        type="email"
        name=""
        id=""
        value={emailInput}
        onChange={handleEmailInputChange}
        required
      />
      <button
        className="btn-primary w-[295px] mt-[18px] h-[45px]"
        onClick={emailFormClickHandler}
      >
        Continue
      </button>
    </form>
  );
};

export default EmailForm;
