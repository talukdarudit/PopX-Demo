import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
    };
    navigate("/profile", { state: data });
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-[#F7F8F9] px-4 py-10">
      <div className="w-full max-w-sm">
        {/* Header with line break */}
        <h1 className="text-3xl font-bold text-[#1D2226] mb-3 text-left leading-snug">
          Sign in to your
          <br />
          PopX account
        </h1>

        {/* Description with line break */}
        <p className="text-lg text-[#1D2226]/60 mb-8 text-left leading-snug">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipisicing elit
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              required
              className="peer w-full border border-[#CBCBCB] rounded-md bg-transparent px-3 pt-5 pb-2 text-sm text-[#1D2226] placeholder-transparent focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all bg-[#F7F8F9] px-1
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF]"
            >
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Enter password"
              required
              className="peer w-full border border-[#CBCBCB] rounded-md bg-transparent px-3 pt-5 pb-2 text-sm text-[#1D2226] placeholder-transparent focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] outline-none"
            />
            <label
              htmlFor="pwd"
              className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all bg-[#F7F8F9] px-1
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF]"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="submit-btn"
            className="w-full bg-[#CBCBCB] text-white rounded-md py-3 text-base font-medium hover:bg-[#a8a8a8] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
