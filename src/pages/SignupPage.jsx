import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    navigate("/profile", { state: data });
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-[#F7F8F9] px-4 py-10">
      <div className="w-full max-w-sm">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#1D2226] mb-10 text-left leading-snug">
          Create your <br /> PopX account
        </h1>

        {/* Signup Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              required
              className="peer w-full border border-[#CBCBCB] rounded-md bg-transparent px-3 pt-5 pb-2 text-sm text-[#1D2226] focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] outline-none"
            />
            {/* Full Name Label */}
            <label
              htmlFor="name"
              className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all bg-[#F7F8F9] px-1
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF]"
            >
              Full Name <span className="text-[#DD4A3D]">*</span>
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              maxLength={10}
              placeholder=" "
              required
              className="peer w-full border border-[#CBCBCB] rounded-md bg-transparent px-3 pt-5 pb-2 text-sm text-[#1D2226] focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] outline-none"
            />
            {/* Phone Number Label */}
            <label
              htmlFor="phone"
              className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all bg-[#F7F8F9] px-1
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF]"
            >
              Phone Number <span className="text-[#DD4A3D]">*</span>
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              required
              className="peer w-full border border-[#CBCBCB] rounded-md bg-transparent px-3 pt-5 pb-2 text-sm text-[#1D2226] focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] outline-none"
            />
            {/* Email Label */}
            <label
              htmlFor="email"
              className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all bg-[#F7F8F9] px-1
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF]"
            >
              Email Address <span className="text-[#DD4A3D]">*</span>
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder=" "
              required
              className="peer w-full border border-[#CBCBCB] rounded-md bg-transparent px-3 pt-5 pb-2 text-sm text-[#1D2226] focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] outline-none"
            />
            {/* Password Label */}
            <label
              htmlFor="pwd"
              className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all bg-[#F7F8F9] px-1
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF]"
            >
              Password <span className="text-[#DD4A3D]">*</span>
            </label>
          </div>

          {/* Company Name (Optional) */}
          <div className="relative">
            <input
              type="text"
              name="comp-name"
              id="comp-name"
              placeholder=" "
              className="peer w-full border border-[#CBCBCB] rounded-md bg-transparent px-3 pt-5 pb-2 text-sm text-[#1D2226] focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] outline-none"
            />
            {/* Company Name Label */}
            <label
              htmlFor="comp-name"
              className="absolute left-3 top-3.5 text-sm text-gray-400 transition-all bg-[#F7F8F9] px-1
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF]"
            >
              Company Name
            </label>
          </div>

          {/* Radio Buttons */}
          <div>
            <span className="block text-sm font-medium text-[#1D2226] mb-2 after:content-['*'] after:text-[#DD4A3D]">
              Are you an Agency?
            </span>
            <div className="flex gap-10">
              <label className="flex items-center gap-2 text-sm text-[#1D2226]">
                <input
                  id="radio-yes"
                  type="radio"
                  name="agency"
                  value="Yes"
                  required
                  className="w-5 h-5 text-[#6C25FF] focus:ring-[#6C25FF]"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-[#1D2226]">
                <input
                  id="radio-no"
                  type="radio"
                  name="agency"
                  value="No"
                  required
                  className="w-5 h-5 text-[#6C25FF] focus:ring-[#6C25FF]"
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            id="create-acc-btn"
            type="submit"
            className="w-full bg-[#6C25FF] text-white rounded-md py-3 text-base font-medium hover:bg-[#5a1fd9] transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
