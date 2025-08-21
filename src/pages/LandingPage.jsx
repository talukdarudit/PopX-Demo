import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-end justify-center min-h-screen bg-[#F7F8F9] px-4 pb-12">
      {/* Container */}
      <div className="w-full max-w-sm flex flex-col items-start">
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#1D2226] mb-4 text-left">
          Welcome to PopX
        </h1>

        {/* Description with forced line break */}
        <p className="text-lg text-[#1D2226]/60 mb-6 text-left leading-snug">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit
        </p>

        {/* Buttons */}
        <button
          onClick={handleRegister}
          className="w-full bg-[#6C25FF] text-white rounded-md py-3 text-base font-medium hover:bg-[#5a1fd9] transition"
        >
          Create Account
        </button>
        <button
          onClick={handleLogin}
          className="w-full bg-[#6C25FF]/30 text-[#1D2226] rounded-md py-3 text-base font-medium mt-3 hover:bg-[#6C25FF]/40 transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
